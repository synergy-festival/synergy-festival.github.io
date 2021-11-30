import styled  from 'styled-components'
import Marquee from "react-fast-marquee";


const Div = styled.div`
    width: 100%;
    height: auto;
    color: #AE69FF;
`;

const Span = styled.span`
    font-size: max(1.4vw, 16px);
    white-space: nowrap;
`;

const Symbol = styled.span`
    vertical-align: center;
    height: auto;
    font-size: max(1vw, 12px);
    white-space: nowrap;
`;

const style = {
  height: 'auto',
  fontSize: '3vw',
  color: '#AE69FF',
  display: 'flex',
}


function  Slogan() {

    return (
        <Div>
            <Marquee style={style} gradientWidth='10'>
                <Span>Synergy Festival  2022.3.19 <Symbol>&rarr;</Symbol> 20</Span>
                <Span>Shape The Future With Music, Art and Technology</Span>
            </Marquee>
        </Div>
    )
}


export default Slogan;