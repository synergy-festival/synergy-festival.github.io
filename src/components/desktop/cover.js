import styled   from 'styled-components'
import coverImg from '../../assests/img/cover-desktop.png'

const Img = styled.img`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    object-fit: cover;
    z-index: -1;
    background-color: #AE69FF;
`;


function Cover() {
    return (
        <>
            <Img src={coverImg} alt="" className='cover'/>
        </>
    )
}


export default Cover;