import styled  from 'styled-components'
import fb      from '../../assests/img/fb-white.svg'
import ig      from '../../assests/img/ig-white.svg'
import discord from '../../assests/img/discord-white.svg'

const IconDiv = styled.div`
    width: auto;
    display: inline-block; 
`;

const Img = styled.img`
    max-width: 3rem;
    max-height: 3rem;
    margin: 0 .7rem; 
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