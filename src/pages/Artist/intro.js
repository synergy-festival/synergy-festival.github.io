import styled             from 'styled-components'
import { isMobile }      from 'react-device-detect';
import { NavLink }       from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import useWindowDimensions from '../../hooks/useWindowDimensions'


const Div = styled(NavLink)`
    display: flex;
    flex-direction: column;
    width: ${({ isMobile }) => (isMobile ? '45%' :'20%')};
    height: auto;
    align-items: center;
    margin: 1% 2.5%;
    text-decoration: none;
`

const P = styled.p` 
    text-align: center;
    width: 100%;
    line-height: 120%;
    text-transform: uppercase;
    font-size: ${({ isMobile }) => (isMobile ? '4.2vw' :'2.3vw')};
    color: ${(props) => (props.theme.color.purple)};
    &::selection {
        background: #AE69FF;
        color: #FFFFFF;
    }

    &::-moz-selection {
        background: #AE69FF;
        color: #FFFFFF;
    }

`

const StyledLazyLoadImage = styled(LazyLoadImage)`
    height: auto;
    cursor: pointer;

    &::selection {
        background: #AE69FF;
        color: #FFFFFF;
    }

    &::-moz-selection {
        background: #AE69FF;
        color: #FFFFFF;
    }
    padding: 5%;
    
`


function Intro({ key, image, name }) {
        const { width } = useWindowDimensions()
        const edge = isMobile ? 0.42 * width : 0.2 * width

        return (
        <Div isMobile={isMobile} to={'/artist/' + name}>
            <StyledLazyLoadImage
                key={key}
                src={image}
                alt={name}
                width={edge}
                height={edge}
                effect='opacity'
            />
            <P isMobile={isMobile}>{ name }</P>
        </Div>
    )
}

export default Intro;