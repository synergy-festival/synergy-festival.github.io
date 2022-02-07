import styled from "styled-components";
import { rgba } from 'polished'



const Div = styled.div`
    width: 100%;
    max-height: 85%;
    display: flex;
    flex: 3 1;
`;


const Left = styled.div`
    margin-right: 1%;
    width: 100%;
    height: 100%;
    flex: 4;
    font-size: 5vw;
    color: #AE69FF;
    display: flex;
    align-items: ${(props) => (props.top ? 'flex-start' : 'center')};
    justify-content: center;
    text-decoration: ${(props) => (props.decoration ? 'underline' : 'none')};
    text-decoration-thickness: .05em;

    &::selection {
        background: #AE69FF;
        color: #FFFFFF;
    }

    &::-moz-selection {
        background: #AE69FF;
        color: #FFFFFF;
    }
`;


const Right = styled.div`
    margin-left: 1%;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    flex: 8;
    align-items: center;
    justify-content: center;


    &::-webkit-scrollbar {
        width: 1rem;
        border: none
    }
    &::-webkit-scrollbar-thumb {
        background-color: ${rgba('#AE69FF', 0.8)}
    }

    &::-webkit-scrollbar-thumb:hover {
        background: ${rgba('#AE69FF', 0.6)}
    }

    &::selection {
        background: #AE69FF;
        color: #FFFFFF;
    }

    &::-moz-selection {
        background: #AE69FF;
        color: #FFFFFF;
    }
`;

function TwoRow(props) {  
    return (
        <Div>
            <Left {...props}>
                {props.left}
            </Left>
            <Right>
                {props.right}
            </Right>
        </Div>
    )
}


export default TwoRow