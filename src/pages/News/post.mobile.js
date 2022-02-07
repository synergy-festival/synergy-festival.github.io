import styled from 'styled-components'
import clip   from "text-clipper";
import { useState } from "react";
import { rgba }     from 'polished'


const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #AE69FF;
    height: auto;
    width: auto;
    padding: 1%;
`;

const DivHtml = styled.div`
    font-size: 3vw;
    padding: 2% 0;
`

const DivBottom = styled.div`
    position: relative;
`

const IMG = styled.img`
    width  : 100%;
    height : auto;
    margin : 5%;
`

const RDIV = styled.div`
    width: auto;
    height: auto;
    font-size: 1vw;
    & a:link, a:visited {
        color: inherit;
    }
`   

const Title = styled.p`
    font-size: 5vw;
    font-weight: bolder;
    width: auto;
    height: auto;
    margin: 2% 0;
`;

const P = styled.p`
    display: flex;
    flex-direction: row-reverse;
    color: #AE69FF;
    font-size: 3vw;
    width: auto;
    height: auto;
    padding-right: 1%;
    
`

const BTN = styled.p`
    display: flex;
    color: ${rgba('#AE69FF', .6)};
    font-size: 3vw;
    flex-direction: row-reverse;
    text-decoration: underline;
    padding-right: 1%;
    
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




function MobilePost( { date, image, title, content } ) {
    return (
        <Div>
            <IMG src={image}/>
            <DivBottom>
                <P>update date: {date}</P>
                <Title>{title}</Title>
                <ReadMore content={content}/>
            </DivBottom>
        </Div>
    )
}

export default MobilePost;