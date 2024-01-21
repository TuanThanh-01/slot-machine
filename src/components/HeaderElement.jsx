import { Header } from 'antd/es/layout/layout';
import React from 'react';
import logo from '../assets/logo_viettel.png';
import { Col, Row } from 'antd';

const HeaderElement = () => {
  return (
    <div
      className='shadow container'
      style={{
        padding: 0,
        display: 'flex',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        borderRadius: '0 0 10px 10px',
      }}
    >
      <Row className='container mt-2 '>
        <Col span={8}>
          <img
            src={logo}
            className='mr-5 mt-2'
            style={{
              height: '2.5rem',
              padding: '2px',
            }}
          />
        </Col>
        <Col span={16}>
          <h1 className='mt-2' style={{ color: '#EA0029' }}>
            Quay Số Trúng Thưởng
          </h1>
        </Col>
      </Row>
    </div>
  );
};

export default HeaderElement;
