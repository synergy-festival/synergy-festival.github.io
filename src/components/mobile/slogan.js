import styled  from 'styled-components'
import Marquee from "react-fast-marquee";

const Span = styled.span`
    white-space: nowrap;
`;

const style = {
  height: 'auto',
  fontSize: '3vw',
  color: '#AE69FF'
}


function  Slogan() {

    return (
        <Marquee style={style} gradientWidth='10'>
            <Span>
                Synergy Festival Shape The Future With Music, Art and Technology
            </Span>
        </Marquee>
    )
}


export default Slogan;