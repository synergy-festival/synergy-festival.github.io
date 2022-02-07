import styled, { css }   from 'styled-components'
import { rgba }     from 'polished'
import { isMobile } from 'react-device-detect';


const Block = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2%;
    width : ${(props) => (props.isMobile ? '60vw' :' 30vw')};
    height: ${(props) => (props.isMobile ? '20vw' :' 10vw')};
    border: .2rem solid ${(props) => rgba(props.theme.color.purple, props.theme.alpha.primary)};
    color: ${(props) => props.theme.color.light};
    background-color: ${(props) => rgba(props.theme.color.purple, .6)};


    &:hover {
        background-color: ${(props) => props.theme.color.purple};
        border-color: ${(props) => rgba(props.theme.color.purple, .6)};
        transition: all .5s;
    }

    ${props => props.disabled && css`
        pointer-events: none;
        color: ${(props) => rgba(props.theme.color.purple, .6)};
        background-color: ${rgba('black', .2)};
        border-color: ${rgba('black', .1)};
    `}

`

const A = styled.a`
    width : auto;
    height: auto;
    text-align: center;
    vertical-align: middle;
    color: white;
    font-size: ${(props) => (props.isMobile ? '8vw' :' 5vw')};
    &:link {
        text-decoration: none;
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

function Blocks () {
    return (
        <>
            <Block isMobile={isMobile} disabled><A isMobile={isMobile}>Flying V</A></Block>
            <Block isMobile={isMobile}>
                <A isMobile={isMobile} target="_blank" href='https://www.klook.com/zh-TW/activity/67335-synergy-festival-2022-taipei/'>KLOOK</A>
            </Block>
        </>

    )
}

export default Blocks