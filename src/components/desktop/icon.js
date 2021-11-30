import styled  from 'styled-components'
import fb      from '../../assests/img/fb-white.svg'
import ig      from '../../assests/img/ig-white.svg'
import discord from '../../assests/img/discord-white.svg'

const IconDiv = styled.div`
    width: auto;
    display: inline-block; 
`;


const A = styled.a`
    max-width: 3rem;
    max-height: 3rem;
    margin: 0 .7rem; 
`
const Img = styled.img`
    max-width: 3rem;
    max-height: 3rem;
    margin: 0 .7rem; 
`;


function Icon() {
    return (
        <IconDiv>
            <A target="_blank" href='https://www.facebook.com/synergyfestivaltw/'><Img src={fb} /></A>
            <A target="_blank" href='https://www.instagram.com/synergy.fest/'><Img src={ig} /></A>
            <A target="_blank" href='https://discord.com/channels/872441483536502804/914828648819879947'><Img src={discord} /></A>
        </IconDiv>
    )
}


export default Icon;