import styled, { css } from 'styled-components'
import { useNavigate } from "react-router-dom";

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

    &::selection {
        background: #AE69FF;
        color: #FFFFFF;
    }

    &::-moz-selection {
        background: #AE69FF;
        color: #FFFFFF;
    }

`;

const NEXTDICT = {
    '/news'   : '/about',
    '/about'  : '/artist',
    '/artist' : '/ticket',
    '/ticket'   : '/virtual-art-gallery',
    '/virtual-art-gallery': '/news'
}



function Next({ page }) {
    const navigate = useNavigate();
    const handleClick = (page) => {
        if (Object.keys(NEXTDICT).includes(page)) {
            navigate(NEXTDICT[page])
        } else {
            if (page.includes('artist')) {
                navigate('/ticket')
            }
        }
    }
    
    return (
        <Div onClick={()=>{handleClick(page)}}>
            <P>Next Page</P>
        </Div>
    )
}

export default Next;