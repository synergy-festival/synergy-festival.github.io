import styled  from 'styled-components'
import fb      from '../../assests/img/fb-purple.svg'
import ig      from '../../assests/img/ig-purple.svg'
import discord from '../../assests/img/discord-purple.svg'

const IconDiv = styled.div`
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    margin: 3vh 0;
`;

const Img = styled.img`
    max-width: 1.5rem;
    max-height: 1.5rem;
    margin: 0 .3rem; 
`;


function Icon() {
    return (
        <IconDiv>
            <Img src={fb} />
            <Img src={ig} />
            <Img src={discord} />
        </IconDiv>
    )
}


export default Icon;