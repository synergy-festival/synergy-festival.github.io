import styled   from 'styled-components'
import coverImg from '../../assests/img/cover-mobile.png'
import useWindowDimensions from '../hooks/useWindowDimensions'

const Div = styled.div`
    width: 100%;
    height: ${(props) => props.height*.8 + 'px'};
    overflow: hidden;
    display: flex;
    position: absolute;
    top: 20%;
    
`

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    background-color: #FFFFFF;
    -webkit-backface-visibility: hidden;
    flex-grow:1;
    transforme: scale(1.5);
`;


function Cover() {
    const {width, height} = useWindowDimensions()
    return (
        <Div height={height}>
            <Img src={coverImg} alt="" className='cover'/>
        </Div>
    )
}


export default Cover;