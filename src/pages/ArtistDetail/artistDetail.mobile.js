import styled, { css }   from 'styled-components'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import TwoCol            from "../../components/Layout/twoCol";

const Div = styled.div`
    display: flex;
    flex-direction: column;
    color: #AE69FF;
`

const Top = styled.div`
    display: flex;
    align-items: center;
`

const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2% 0;
    align-items: flex-start;
    justify-content: center;   
`

const Name = styled.span`
    width: auto;
    height: auto;
    font-size: 8vw;

    font-weight: bolder;

    &::selection {
        background: #AE69FF;
        color: #FFFFFF;
    }

    &::-moz-selection {
        background: #AE69FF;
        color: #FFFFFF;
    }
`

const Title = styled.p`
    margin-top: 3%;
    font-size: 3.5vw;
    font-weight: bolder;
    width: auto;
    height: auto;

    &::selection {
        background: #AE69FF;
        color: #FFFFFF;
    }

    &::-moz-selection {
        background: #AE69FF;
        color: #FFFFFF;
    }
`

const P = styled.p`
    margin-top: 5%;
    
    &::selection {
        background: #AE69FF;
        color: #FFFFFF;
    }

    &::-moz-selection {
        background: #AE69FF;
        color: #FFFFFF;
    }

    font-size  : 2.5vw;

    ${props => !props.isMobile && css`
        display: flex;
        align-items: center;
    `}
`

function Detail({ image, name, tag, title, content }) {
    return (
        <Div>
            <Top>
                <LazyLoadImage                 
                    src={image}
                    alt={name}
                    effect='opacity'
                />  
            </Top>
            <Bottom>
                <Name>{name}</Name>
                <Title>{title}</Title>
                <P><div dangerouslySetInnerHTML={{ __html: content }} /></P>
            </Bottom>

        </Div>
    )
}





function MobileArtistDetail(props) {
    return (
        <TwoCol 
            top={'Artist'} 
            bottom={<Detail {...props}/>}
        />
    )
}

export default MobileArtistDetail;