import Main  from './main'
import About from './about'
import { Routes ,Route } from 'react-router-dom';

function Desktop(props) {
    const {lang, setLang} = props
    return (
        <Routes>
            <Route exact path="/" element={<Main lang={lang} setLang={setLang}  />} />
            <Route path="/about"  element={<About lang={lang} setLang={setLang} />} />
            <Route element={<Main lang={lang} setLang={setLang} />} />
        </Routes>
    )
}


export default Desktop;