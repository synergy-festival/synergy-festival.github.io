import { Routes ,Route } from 'react-router-dom';
import Main from '../mobile/main'
import About from './about'
    

function Mobile() {
    return (
        <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route element={<Main />} />
        </Routes>
    )
}


export default Mobile;