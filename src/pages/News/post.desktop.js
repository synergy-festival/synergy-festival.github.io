import styled       from 'styled-components'
import { rgba }     from 'polished'
import clip         from "text-clipper";
import { useState } from "react";


const Div = styled.div`
    position: relative;
    color: #AE69FF;
    height: auto;
    width: auto;
    padding: 1%;

`;

const Title = styled.p`
    font-size: 1.8vw;
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
`;

const IMG = styled.img`
    display: block;
    width: 40%;
    height: auto;
`

const RDIV = styled.div`
    width: auto;
    height: auto;
    font-size: 1vw;
    & a:link, a:visited {
        color: inherit;
    }
    
`

const BTN = styled.p`
    display: flex;
    color: ${rgba('#AE69FF', .6)};
    flex-direction: row-reverse;
    text-decoration: underline;
    padding-right: 2rem;
`

const P = styled.p`
    position: absolute;
    color: #AE69FF;
    line-height: 5rem;
    font-size: 1.2vw;
    width: auto;
    height: auto;
    top: 0;
    right: 2rem;

    &::selection {
        background: #AE69FF;
        color: #FFFFFF;
    }

    &::-moz-selection {
        background: #AE69FF;
        color: #FFFFFF;
    }
`

const DivHtml = styled.div`

    & p {
        &::selection {
            background: #AE69FF;
            color: #FFFFFF;
        }

        &::-moz-selection {
            background: #AE69FF;
            color: #FFFFFF;
        }

    }


`


const ReadMore = (props) => {
    const { content } = props
    const [isReadMore, setIsReadMore] = useState(true);
    const [part, setPart] = useState(clip(content, 120, { html: true, maxLines: 5 }))
    
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
        if (!isReadMore) {
            setPart(clip(content, 120, { html: true, maxLines: 5 }))
        } else {
            setPart(content)
        }
     };
    return (
        <RDIV>
            <DivHtml dangerouslySetInnerHTML={{ __html: part }} />
            <BTN onClick={toggleReadMore} className="read-or-hide">
                {isReadMore ? 'Read More →' : 'Show Less ←'}
            </BTN>
        </RDIV>

  );
};




function DesktopPost( { date, image, title, content } ) {
    return (
        <Div>
            <P>update date: {date}</P>
            <IMG src={image}/>
            <Title>{title}</Title>
            <ReadMore content={content}/>
        </Div>
    )
}

export default DesktopPost;