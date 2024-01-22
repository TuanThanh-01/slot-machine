import { Button, Col, Divider, Modal, Row, Select, message } from 'antd';
import axios from 'axios';
import './styleContent.css';

import React, { useEffect, useState } from 'react';

const ContentElement = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [employeeWinner, setEmployeeWinner] = useState({});
  const [winnerId, setWinnerId] = useState([
    '❓',
    '❓',
    '❓',
    '❓',
    '❓',
    '❓',
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prize, setPrize] = useState('');

  const handleSelectPrize = (value) => {
    setPrize(value);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleGetWinner = () => {
    const listNumberEmployeeId = document.querySelectorAll('.item');
    listNumberEmployeeId.forEach((item) => {
      item.classList.remove('appear');
    });

    const employeeRandom =
      employeeData[Math.floor(Math.random() * employeeData.length)];
    setWinnerId(Array.from(employeeRandom.employeeID));
    setEmployeeWinner(employeeRandom);

    listNumberEmployeeId.forEach((item, index) => {
      setTimeout(() => {
        console.log(index);
        item.classList.add('appear');
      }, (index + 1) * 1500);
    });
    setTimeout(() => {
      setIsModalOpen(true);
    }, 9500);
  };

  const handleReset = () => {
    setWinnerId(['❓', '❓', '❓', '❓', '❓', '❓']);
  };

  const getEmployeeData = async () => {
    try {
      const response = await axios.get(
        'http://localhost:8082/api/v1/lottery/all-employee-data'
      );
      setEmployeeData(response.data);
    } catch (error) {
      message.error('Lấy dữ liệu nhân viên thất bại');
      console.log(error);
    }
  };

  useEffect(() => {
    getEmployeeData();
  }, []);

  return (
    <div
      style={{
        height: '100vh',
        overflowY: 'auto',
      }}
      className='container mt-5 p-0'
    >
      <Row>
        <Select
          onChange={handleSelectPrize}
          style={{
            width: 200,
            right: 0,
          }}
          placeholder='Chọn giải thưởng'
          options={[
            {
              value: 'Giải Nhất',
              label: 'Giải Nhất',
            },
            {
              value: 'Giải Nhì',
              label: 'Giải Nhì',
            },
            {
              value: 'Giải Ba',
              label: 'Giải Ba',
            },
            {
              value: 'Giải Khuyến Khích',
              label: 'Giải Khuyến Khích',
            },
          ]}
        />
      </Row>
      <Modal
        title={
          <div>
            <h2 style={{ fontWeight: '700', color: '#D24545' }}>
              <span style={{ fontSize: '1.3rem' }}>🥳🎉🎊</span> {prize}{' '}
              <span style={{ fontSize: '1.3rem' }}>🥳🎉🎊</span>
            </h2>
          </div>
        }
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={700}
      >
        <Divider />
        <div style={{ fontSize: '1.8rem' }}>
          <p>
            Mã Nhân Viên:{' '}
            <span
              className='ml-5 font-weight-bold'
              style={{ color: '#43766C' }}
            >
              {employeeWinner.employeeID}
            </span>
          </p>
          <p>
            Tên Nhân Viên:{' '}
            <span
              className='ml-5 font-weight-bold'
              style={{ color: '#43766C' }}
            >
              {employeeWinner.name}
            </span>
          </p>
          <p>
            Email Nhân Viên:{' '}
            <span
              className='ml-4 font-weight-bold'
              style={{ color: '#43766C' }}
            >
              {employeeWinner.email}
            </span>
          </p>
        </div>
      </Modal>
      <Row style={{ marginTop: '100px' }}>
        {winnerId.map((item, index) => (
          <Col span={4} key={index}>
            <div
              style={{
                background: '#fff',
                boxShadow: '0 0 1px 2px #D24545',
                width: '100px',
                height: '150px',
                overflow: 'hidden',
                borderRadius: '1ex',
                margin: '1ch',
              }}
              className='ml-5'
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontSize: '3rem',
                  marginTop: '30px',
                  fontWeight: 600,
                }}
                className='item appear'
              >
                {item}
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <Row style={{ marginTop: '80px' }}>
        <Col span={12}>
          <Button
            style={{ width: '120px', float: 'right' }}
            size='large'
            danger
            className='mr-3'
            onClick={handleGetWinner}
          >
            Quay thưởng
          </Button>
        </Col>
        <Col span={12}>
          <Button
            style={{ width: '120px', color: '#007bff' }}
            size='large'
            className='ml-3'
            onClick={handleReset}
          >
            Đặt lại
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default ContentElement;
