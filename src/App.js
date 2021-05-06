import logo from './logo.svg';
import './App.css';
import { useTranslation, Translation } from 'react-i18next';

function App() {
  const {t, i18n} = useTranslation();
  
  const handleChangeLanguage = () => i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr');
  console.log(i18n.language);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{t('hi')}</p>
        <h1>{t('Welcome to React')}</h1>
        <button onClick={handleChangeLanguage}>change</button>
      </header>
    </div>
  );
}

export default App;
