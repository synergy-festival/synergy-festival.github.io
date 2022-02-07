import styled  from 'styled-components'
import fb       from '../../../assests/img/fb-purple.svg'
import ig       from '../../../assests/img/ig-purple.svg'
import discord  from '../../../assests/img/discord-purple.svg'


const Div = styled.div`
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    margin: 3vh 0;
`;

const A = styled.a`
    max-width: 1.5rem;
    max-height: 1.5rem;
    margin: 0 .3rem; 
`

const Img = styled.img`
    max-width: 1.5rem;
    max-height: 1.5rem;
    margin: 0 .3rem; 
`;

function MobileIcons({ handleClick }) {
    return (
        <Div>
            <A target="_blank" onClick={handleClick('social_media', 'fb')} href='https://www.facebook.com/synergyfestivaltw/'><Img src={fb} /></A>
            <A target="_blank" onClick={handleClick('social_media', 'ig')} href='https://www.instagram.com/synergy.fest/'><Img src={ig} /></A>
            <A target="_blank" onClick={handleClick('social_media', 'discord')} href='https://discord.com/channels/872441483536502804/914828648819879947'><Img src={discord} /></A>
        </Div>
    )
}


export default MobileIcons;