import styled from 'styled-components'
import titleImg from '../../assests/img/title-white.svg'


const Img = styled.img`
    width: 100%;
    height: auto;
`;


function Title() {
    return (
        <>
            <Img src={titleImg} />
        </>
    )
}


export default Title;