import Main  from './main'
import About from './about'
import { Routes ,Route } from 'react-router-dom';

function Desktop() {
    return (
        <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route element={<Main />} />
        </Routes>
    )
}


export default Desktop;