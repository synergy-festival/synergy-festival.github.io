import styled from 'styled-components'
import { rgba } from 'polished'

const Div = styled.div`
    width: 100%;
    max-height: 85%;
    display: flex;
    flex: 3 1;
`;

const Left = styled.div`
    margin-right: 1%;
    width: 100%;
    height: 100%;
    flex: 4;
    font-size: 5vw;
    color: #AE69FF;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: underline;
    text-decoration-thickness: .05em;
`;

const Right = styled.div`
    margin-left: 1%;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    flex: 8;
    &::-webkit-scrollbar {
        width: 1rem;
        border: none
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${rgba('#AE69FF', 1.0)}
    }

    &::-webkit-scrollbar-thumb:hover {
        background: ${rgba('#AE69FF', 0.8)}
    }
`;

const P = styled.p`
    color: #AE69FF;
    line-height: 3rem;
    margin-top: 2rem;
    font-size: 1.6rem;
    margin-top: ;
`



function Content() {

    return (
        <Div>
            <Left>About</Left>
            <Right>
                {
                    [0, 1, 2, 3].map((item) => (
                        <P>
                            新能祭是台灣第一個大型電子音樂結合數位藝術的祭典。由電子音樂製作人和數位藝術家跨界合作，結合創作歌手和派對文化展現台灣特有本土創造力，提供一個新型態的音樂祭體驗。
                            你／妳將在這個虛實交錯的能量場裡感受到電子音樂的爆發力、數位藝術的聲光視覺饗宴以及埋藏在各處的小彩蛋等著你/妳在這場深度音樂之旅中找到答案。 
                            我們擁抱多元文化，提倡性別平等和平等相待，提供你／妳一個有趣好玩又注重安全的空間，請在這裡放心地把身體交給新能祭一起舞動吧！ 
                            最後，你／妳可以將新能祭看成一個碰撞出新點子、新想法的交流平台。不管你／妳是參與此祭典的民眾，還是參加演出的藝術家／音樂人，都能在此趟旅程中獲得爆棚的新能量。 
                            聯絡方式：info@synergyfestival.xyz
                        </P>
                    ))
                }
            </Right>
        </Div>
    )
}

export default Content;