import styled from 'styled-components'
import { isMobile } from 'react-device-detect';
import Blocks       from './Blocks'
import TwoCol       from "../../components/Layout/twoCol";


const Div = styled.div`
    display: flex;
    flex-direction: ${(props) => (props.isMobile ? 'column' : 'row')};    
    align-items: center;
    justify-content: center;
`

const P = styled.p`
    font-size: 3vw;
    width: auto;
    height: auto;
    margin-bottom: 5%;
    color: ${props => (props.theme.color.purple)}
`


function Ticket() {

    if (isMobile) {
         return (
             <TwoCol top='Ticket' bottom={<Div isMobile={isMobile}><P>GO SYNERGY ⦿ w ⦿</P><Blocks /></Div>} />
         )
    } else {
        return (
            <Div isMobile={isMobile}>
                <Blocks />
            </Div>
        )
    }

}


export default Ticket;