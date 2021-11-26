import styled from 'styled-components'
import titleImg from '../../assests/img/title-purple.svg'


const Img = styled.img`
    width: 100%;
    height: auto;
    margin-top: 1vh;
    padding: 0 1%;
`;


function Title() {
    return (
        <>
            <Img src={titleImg} />
        </>
    )
}


export default Title;