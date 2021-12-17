import './App.scss';
import Tab     from './components/tab'
import Desktop from './components/desktop/container'
import Mobile  from './components/mobile/container'
import { BrowserView, MobileView } from 'react-device-detect';
import { useState } from 'react';
import ReactPixel from 'react-facebook-pixel';
const options = {
  autoConfig: true,
  debug: false,
};


function App() {
  ReactPixel.init('1109142783156081', {}, options);
  ReactPixel.pageView();
  const [lang, setLang] = useState('eng')
  return (
    <div className="App">
        <Tab />
        <BrowserView>
          <Desktop lang={lang} setLang={setLang} />
        </BrowserView>
        <MobileView>
          <Mobile lang={lang} setLang={setLang} />
        </MobileView>
    </div>
  );
}

export default App;
