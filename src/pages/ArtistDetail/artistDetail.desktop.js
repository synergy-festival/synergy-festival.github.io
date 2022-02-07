import styled, { css }   from 'styled-components'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import TwoRow            from "../../components/Layout/twoRow";



const AbstractDiv = styled.div`
    width: 90%;
    height: auto;

`

const Top = styled.div`
    display: flex;
    align-items: center;
`

const Bottom = styled.div`
    display: flex;
    flex-direction: row;
    margin: 2% 0;
    align-items: flex-start;
    justify-content: center;   
`

const DetailTitle = styled.p`
    color: #AE69FF;
    font-size: 2.5vw;
    font-weight: bolder;
    width: auto;
    height: auto;
    padding: 2rem 0;

    &::selection {
        background: #AE69FF;
        color: #FFFFFF;
    }

    &::-moz-selection {
        background: #AE69FF;
        color: #FFFFFF;
    }
`

const Name = styled.span`
    width: auto;
    height: auto;
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

const DetailP = styled.p`
    color: #AE69FF;
    margin-top: 2rem;
    font-size  : 1.2vw;


    & div {
        &::selection {
            background: #AE69FF;
            color: #FFFFFF;
        }

        &::-moz-selection {
            background: #AE69FF;
            color: #FFFFFF;
        }

    }

    ${props => !props.isMobile && css`
        display: flex;
        align-items: center;
    `}
`

function Abstract({ image, name, tag }) {
    return (
        <AbstractDiv>
            <Top>
                <LazyLoadImage                 
                    src={image}
                    alt={name}
                    effect='opacity'
                />  
            </Top>
            <Bottom>
                <Name>{name}</Name>
            </Bottom>

        </AbstractDiv>
    )
}

function Detail({ title, content }) {
    return (
        <>
            <DetailTitle>{title}</DetailTitle>
            <DetailP><div dangerouslySetInnerHTML={{ __html: content }} /></DetailP>
        </>
    )

}





function DesktopArtistDetail({ image, name, title, tag, content }) {
    return (
        <TwoRow 
            top={true}
            left={<Abstract image={image} name={name} tag={tag} />} 
            right={<Detail title={title} content={content} />}
        />
    )
}

export default DesktopArtistDetail;