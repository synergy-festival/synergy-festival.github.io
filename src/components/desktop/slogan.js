import styled  from 'styled-components'
import Marquee from "react-fast-marquee";


const Div = styled.div`
    width: 100%;
    height: 100%;
    font-size: 1.4vw;
    color: #AE69FF;
`;


function  Slogan() {

    return (
        <Div>
            <Marquee>
                <span>Synergy Festival 2022.3.19 &rarr; 20</span>
                <span>Synergy Festival Shape The Future With Music, Art and Technology</span>
            </Marquee>
        </Div>
    )
}


export default Slogan;