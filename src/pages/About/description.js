import styled, { css } from 'styled-components'
import { isMobile }    from 'react-device-detect';


const P = styled.p`
    color: #AE69FF;
    margin-top: 2rem;
    
    &::selection {
        background: #AE69FF;
        color: #FFFFFF;
    }

    &::-moz-selection {
        background: #AE69FF;
        color: #FFFFFF;
    }

    line-height: ${(props) => props.isMobile ? '2.2rem' : '3rem'};
    font-size  : ${(props) => props.isMobile ? '1.2rem' : '1.6rem'};

    ${props => !props.isMobile && css`
        display: flex;
        align-items: center;
    `}
`

function Description() {

    return (
        <P isMobile={isMobile}>
            新能祭是台灣第一個大型電子音樂結合數位藝術的祭典。由電子音樂製作人、創作歌手和數位藝術家三方跨界合作，結合派對文化和本土創造力，提供一種新型態的音樂祭體驗。我們將在這個虛實交錯的能量場裡感受電子音樂的爆發力、數位藝術的視覺饗宴以及埋藏在各處的小彩蛋。 我們擁抱多元文化，提倡性別平等和互相尊重的價值，這是一個有趣、好玩又安全的空間，請放心地把身體交給新能祭一起舞動吧！ 無論是創作者還是參與者，新能祭歡迎大家一起來互相交流、激發新點子，透過這趟旅程獲得滿滿的新能量。
            <br/>
            聯絡方式：info@synergyfestival.xyz
            <br/>
            <br/>
            Synergy Festival is Taiwan’s first large-scale festival dedicated to the collaboration of Taiwanese electronic music producers, singer-songwriters, and digital artists. At Synergy Festival, you will experience the explosive power of electronic music, marvel at the dazzling digital art and visual effects, and hunt for Easter eggs hidden across the venue. We value diversity and gender equality, and we strive to create a fun and safe festival environment. Whether you are a creator or a participant, we welcome you to engage with one another, inspire new ideas, and refuel your energy through this unique journey.
            <br/>
            Contact: info@synergyfestival.xyz
        </P>    
    )
}


export default Description;