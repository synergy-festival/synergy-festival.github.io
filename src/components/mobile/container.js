import styled  from 'styled-components'
import { Routes ,Route } from 'react-router-dom';
import Main from '../mobile/main'

const Div = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`
    

function Mobile() {
    return (
        <Routes>
            <Route exact path="/" element={<Main />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route element={<Main />} />
        </Routes>
    )
}


export default Mobile;