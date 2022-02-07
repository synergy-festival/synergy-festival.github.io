import styled  from 'styled-components'
import Marquee from "react-fast-marquee";

const MobileStyle = {
  height: 'auto',
  fontSize: '3vw',
  color: '#AE69FF',
}

const MobileDiv = styled.div`
    position: fixed;
    width; 100%;
    height: auto;
    left: 0;
    bottom: 1%;
    background-color: white;
`

const MobileSpan = styled.span`    
    white-space: nowrap;

    &::selection {
        background: #AE69FF;
        color: #FFFFFF;
    }

    &::-moz-selection {
        background: #AE69FF;
        color: #FFFFFF;
    }
`;


function MobileTicker() {
    return (
        <MobileDiv>
            <Marquee style={MobileStyle} gradientWidth='10'>
                <MobileSpan>Shape The Future With Music, Art and Technology</MobileSpan>
            </Marquee>
        </MobileDiv>
    )
}

export default MobileTicker;