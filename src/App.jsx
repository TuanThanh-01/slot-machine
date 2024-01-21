import { Layout } from 'antd';
import './App.css';
import FooterElement from './components/FooterElement';
import HeaderElement from './components/HeaderElement';
import ContentElement from './components/ContentElement';
import background from './assets/background.jpg';

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        height: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <HeaderElement />
      <ContentElement />
      <FooterElement />
    </div>
  );
}

export default App;
