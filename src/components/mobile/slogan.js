import styled  from 'styled-components'
import Marquee from "react-fast-marquee";


const Div = styled.div`
    padding: 2% 0;

    position: fixed;
    width; 100%;
    height: auto;
    left: 0;
    bottom: 0;
    background-color: white;
`

const Span = styled.span`    
    white-space: nowrap;
`;


const style = {
  height: 'auto',
  fontSize: '3vw',
  color: '#AE69FF',
}


function  Slogan() {

    return (
        <Div>
            <Marquee style={style} gradientWidth='10'>
                <Span>Synergy Festival Shape The Future With Music, Art and Technology</Span>
            </Marquee>
        </Div>

    )
}


export default Slogan;