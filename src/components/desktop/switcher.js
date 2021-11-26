import { useState } from 'react';
import styled, { css } from 'styled-components'

const SwitchDiv = styled.div`
    width: auto;
    height: auto;
    font-size: 2rem;
`;

const P = styled.p`
    display: inline-block;
    text-transform: uppercase;
    width: auto;
    height: auto;
    color : #FFFFFF; 
    margin : ${(props) => (`${props.space}` ? '0 .4rem' : '0')};
    opacity: ${(props) => (props.active ? 1 : 0.5)};
    ${props => props.space && css`
        transform: rotate(30deg) scale(1.2);
    `}
`;


function Switcher() {
    const [lang, setLang] = useState('eng')

    return (
        <SwitchDiv>
            <P active={lang === 'eng'} onClick={() => {(setLang('eng'))}}>eng</P>
            <P space>/</P>
            <P active={lang === 'chinese'} onClick={() => {(setLang('chinese'))}}>chinese</P>
        </SwitchDiv>
    )
}

export default Switcher;