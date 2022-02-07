import styled from "styled-components";
import { rgba } from 'polished'


const Div = styled.div`
    padding: 5%;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 1rem;
        border: none
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${rgba('#AE69FF', 0.6)}
    }
`;

const Top = styled.div`
    color: #AE69FF;
    font-size: 3rem;
    height: auto;
    width: 90%;
`

function TwoCol(props) {  
    return (
        <Div>
            <Top>
                {props.top}
            </Top>
            {props.bottom}
        </Div>
    )
}


export default TwoCol