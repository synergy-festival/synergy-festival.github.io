import styled, { css } from 'styled-components'

const Div = styled.div`
    width: auto;
    height: auto;
    font-size: 2rem;
    display: flex;
    align-items: center;
`;

const P = styled.p`
    display: inline-block;
    width: auto;
    height: auto;
    color : #AE69FF; 
    ${props => props.space && css`
        transform: rotate(30deg) scale(1.2);
    `}
`;



function Next() {

    return (
        <Div>
            <P>Next Page</P>
        </Div>
    )
}

export default Next;