import './App.scss';
import Tab     from './components/tab'
import Desktop from './components/desktop/container'
import Mobile  from './components/mobile/container'
import { BrowserView, MobileView } from 'react-device-detect';


function App() {
  return (
    <div className="App">
        <Tab />
        <BrowserView>
          <Desktop/>
        </BrowserView>
        <MobileView>
          <Mobile/>
        </MobileView>
    </div>
  );
}

export default App;
