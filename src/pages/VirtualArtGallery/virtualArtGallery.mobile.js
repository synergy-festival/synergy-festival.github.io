import styled  from 'styled-components'
import TwoCol  from "../../components/Layout/twoCol";

const DIV = styled.div`
    display: flex;
    flex-direction: column;
    color: #AE69FF;

    & * {
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

const P = styled.div`
    text-transform: uppercase;
    &::selection {
        background: #AE69FF;
        color: #FFFFFF;
    }

    &::-moz-selection {
        background: #AE69FF;
        color: #FFFFFF;
    }
`

const Link = styled.a`
    text-align: center;
    background: #AE69FF;
    font-size: 7vw;
    color: #FFFFFF;
    text-transform: uppercase;
    text-decoration: none;
    height: auto;
    padding: 8% 5%;
    margin: 5% 0;
`

const T = styled.div`
    color: #AE69FF;
    height: auto;
    width: auto;
    text-align: ${(props) => props.align};
    font-size : ${(props) => (props.big ? '4vw' : '2.2vw' )};
    line-height: 3.2vh;
    font-weight: bolder;
    text-decoration: ${(props) => (props.decoration && 'underline' )};
    margin: 2% 0;
`


const T0 = styled.div`
    font-size: 2.2vw;
    line-height: 3.2vh;
    font-weight: bolder;
    height: auto;
    color: #AE69FF;
`

const T1 = styled.div`
    font-size: 2vw;
    line-height: 2.5vh;
    font-weight: bolder;
    height: auto;
`



const T2 = styled.div`
    height: auto;
    color: #AE69FF;
    font-size: 2.5vw;
    line-height: 3vh;
    margin: 1% 0;
`

const ListDIV = styled.div`
    list-style-position: inside;
    height: auto;
`

const LI1 = styled.li`
    margin-top: 1%;
    height: auto;
`

const LI2 = styled.li`
    list-style-type: none;
    list-style-position: inside;
    padding-left: 2%;
    margin-bottom: 1%;
    height: auto;
`
const RED = styled.span`
    color: #C5000B;
    font-weight: bolder;

    &::selection {
        background: #AE69FF;
        color: #C5000B;
    }

    &::-moz-selection {
        background: #AE69FF;
        color: #C5000B;
    }
`

const SMALL = styled.p`
    font-size: 2.1 vw;
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

const A = styled.a`
    color: #AE69FF;
    &::selection {
        background: #AE69FF;
        color: #FFFFFF;
    }

    &::-moz-selection {
        background: #AE69FF;
        color: #FFFFFF;
    }
`

const BLOCK = styled.div`
    margin: 2% 0;
    height: auto;
`

const SMALLBR = styled.div`
    line-height: 2vh;
    &::selection {
        background: #AE69FF;
        color: #FFFFFF;
    }

    &::-moz-selection {
        background: #AE69FF;
        color: #FFFFFF;
    }
    &::selection {
        background: #AE69FF;
        color: #FFFFFF;
    }

    &::-moz-selection {
        background: #AE69FF;
        color: #FFFFFF;
    }
`




function MobileVirtualArtGallery() {
    return (
        <TwoCol 
            top={<P>Virtual Art Gallery</P>}
            bottom={
                <DIV>
                    <T big={true}>展覽介紹</T>
                    <T decoration={true}>構成你命運的每則故事，來自於你的創造</T>
                    <T2>
                        新能祭的展覽《構成你命運的每則故事，來自於你的創造》著重在肯定觀眾的想像力，以及音樂、藝術與觀眾的關係。你我都曾經是觀眾，觀看的行為，都將成為觀眾的意識養分，形成彼此對生活的想像與創造我們的人生故事。
                    </T2>
                    <Link target='_blank' href='https://hubs.mozilla.com/tjRBa38/synergy-virtual-art-gallery'>Virtual Art Gallery</Link>
                    <T decoration={true}>我們彼此的注意力，影響層面其實很大</T>
                    <T2>
                        隨著行動裝置作為許多資訊與娛樂的主要入口，在監視資本主義的影響之下，我們的眼球停留在某一則貼文，視覺，或是點擊行為的發生，都會被收集後加以分析，作為許多商業組織決定產品生產與產品規劃走向的決策資料來源。
                    </T2>
                    <T2>
                        平台為了增加每個用戶在平台上的使用時間，便會自動推薦內容給我們，讓我們無意識地往下滑。平台為的並非我們的資訊吸收，而是平台資本如何透過我們的觀看時間投注而最大化。
                    </T2>
                    <T2>
                        因此我們想藉著展覽提議，我們是選擇自己時間與注意力的人，拿回注意力的掌控權，因為我們的注意力，有更大的影響力，影響什麼樣的產品被製造，觀念被傳達，陋習被屏除，創造改變的動能來自於我們。       
                    </T2>
                    <T decoration={true}>疫情以來的數位藝術創作爆發</T>
                    <T2>
                        自疫情發生以來，有許多過去的創作與展示方式，紛紛地轉移到虛擬的展示空間中，虛擬空間也隨著人們增加在網路上的瀏覽時間，快速發展可供使用的虛擬工具而蓬勃發展。原本屬於現場的，或是著重觀眾參與的作品，也因為展示方式的改變，而紛紛發展出新型態的展演形式，如〈Chatroom〉打開了空間與肢體的演出方式，以及〈Last Night My Dream Tapped Yours〉以文字、遊戲、錄像與動態肢體的方式討論在隔離期間，我們與網路的關係如同一場場夢境的延伸。
                    </T2>
                    <T big={true}>藝術家主題空間介紹</T>
                    <T2>
                        〈水皮〉、〈地平說：當你拍照時為什麼地面不是圓的？〉、〈虛擬曖昧〉
                         由藝術家打造的三大主題空間，〈水皮〉、〈地平說：當你拍照時為什麼地面不是圓的？〉、〈虛擬曖昧〉，交相回應我們在虛擬世界中的訊息傳遞、與觸控螢幕、用戶體驗路徑以及監視資本主義之間的關係。
                         <ListDIV>
                              <ul>
                                <LI1>林子桓建造的虛擬空間主題：《地平說：當你拍照時為什麼地面不是圓的？》</LI1>
                                <ul>
                                    <LI2>地平說是一種古老的世界觀認為地球是平的，這種觀點在人們開始觀測理解地球後被推翻。但近年來網路的發達推動了喜歡陰謀論與偽科學的人復興了這個想法，其中也有一派人是以聖經所說地球是平面。由於從科學的角度來看地平說完全站不住腳，讓我們從說一個故事的角度去想像地平說相關的可能。虛擬藝廊《地平說》中的作品是關於抽象概念被共振後落下的形狀。</LI2>
                                </ul>
                                <LI1>吳維佳建造的虛擬空間主題：《水皮》</LI1>
                                <ul>
                                    <LI2>當你在觀看水面時，水上有一層皮，但這層皮也並不存在，也並不是一層皮，但你看它時，它就存在。不看則不在，但跟你看不看，也不一定有關係。</LI2>
                                </ul>
                                <LI1>XTRUX建造的虛擬空間主題：《虛擬曖昧》</LI1>
                                <ul>
                                    <LI2>試圖透過民間信仰及宗教歷史之中挖掘出一層層獨立事件所建立的群體意識，並追尋這些信仰，是由什麼事件、情感、立場所形塑而成，我們想要體驗性的遊戲形式作為嚮導，於虛擬空間中探索由意識結合身體記憶所創造的第二現實、第二文化。</LI2>
                                </ul>
                            </ul>
                         </ListDIV>
                        我們同時也以此三大主題概念舉辦了OPEN CALL，邀請了來自許多不同領域的創作者們，以他們的創作回應整體的策展概念，以及三個主題空間。邀請所有的參觀者進入全新的觀看體驗，與我們一同探索與思考，虛擬的生活與互動，該由誰來決定？
                    </T2>
                    <T big={true}>工作人員</T>
                    <T2>
                        藝術空間藝術家：林子桓、吳維佳、XTRUX <br/>
                        作品展示藝術家：莊凱竣, 趙怡然, N. Andrew Walsh, Guy Ronen, Alice Minervini,Elettra Giunta, HakureiNeko, Tzu Ni,Jacys Lin, Master Chu,RONG, Ferran Bertomeu Castells & 羅妍婷,姚睿蘭,陳政維 Chen Cheng-Wei,Cheng Daoyuan, 阮柏遠,Bing <br/>
                        <RED> 虛擬藝廊音樂： 吳維佳</RED><br/>
                        <RED> Avatar: 蜜蜂、貓頭鷹、蠍子 by @Mofn, 新能祭 Avatar by XTRUX </RED><br/>
                        策展人：李彥儀與新能祭團隊 <br/>
                        策展助理：邱楚童 <br/>
                    </T2>
                    <T big={true}>參展藝術家介紹</T>
                    <T0>
                        虛擬藝廊三大主題展間創作藝術家
                        <br/>
                        <SMALL>Virtual Art Gallery Space Created by 3 artists with 3 rooms </SMALL>
                    </T0>
                    <T2>
                        <BLOCK>
                            <b>林子桓</b><br/>
                            <A target='_blank' href='https://tzuhuanlin.com'>https://tzuhuanlin.com</A> <br/>
                            做錄像跟裝置，打工為生。媒材不打算拘但現在只有錄像跟裝置。處理議題關於藝術是什麼，藝術的角色，藝術的方式。處理本質與尋找狀態呈現兩件事的韻。旅居紐約，明年北美館舉辦個展尋找欲望的各種狀態；陳以軒大部分時間都在拍照，有時候也拍紀錄片。媒材形式橫跨平面攝影、創作書、錄像、影像裝置、以及行為演出。近期創作多關注於攝影如何處理個人的生命史，影像媒介在進行溝通傳達時的所產生的模糊與誤謬，還有一些垃圾靜物。
                            <SMALLBR><br/></SMALLBR>
                            Tzuhuan Lin<br/>
                            His work centers around personal experience as an immigrant, adapts to connect different subjects or stories to address the phenomena. He received an MFA in Digital Arts at Pratt Institute in Brooklyn. Lin’s work has been included in international group exhibitions such as ”The 15th Digital Art Festival Taipei” “The 6th International Video Art Exhibition”, “ADAF 14th Athens Digital Arts Festival” and solo exhibitions at Taipei Fine Art Museum, Kuandu Museum of Fine Arts. 
                        </BLOCK>
                        <BLOCK>
                            <b>吳維佳</b><br/>
                            <A target='_blank' href='https://www.veeeky.com'>https://www.veeeky.com</A> <br/>
                            在物聯網、演算法、後人類時代的語境下，吳維佳的作品圍繞著當代訊息社會與科技技術的思考:聲音、視覺、舞台情緒、觀者表演者之間的彈性，以至內在的敘事、當代社會符號所產生的共感。她採樣和實驗聲音和視覺的方式是無邊際且開放的:開源軟體到 3D 建模，電腦生成繪畫 (CGI)等等，到音訊轉換的物理機械動力或轉譯為視覺。在這個現實與虛擬一步步模糊的世界中，做為獨立藝術家，她穿梭世界各處的文化場景參與展演。這些創作內容包含網路/碎片化資訊流動/性別/渠道/全球化──在地化等等，呈現出一種源於臨近未來的烏托邦/反烏托邦/無烏托邦的高飽和色彩世界，最大的目的是讓觀者思索當代社會可能的生活方案。
                            <SMALLBR><br/></SMALLBR>
                            Born in Kaohsiung and raised in Taipei (Taiwan), Veeeky currently lives and works in Beijing (China). She started from the cofounder of Bounce Girlz, a group focusing on music event and content in Taiwan, Taipei, when she was in National Taiwan University studying sociology.  After spending time digging into visual communication in Goldsmiths College, London, she had more chances to explore new sounds and further established her own way of selection of music and creating visual art.  Her approach of synchronizing and sampling sound with visual is limitless, experimenting sounds consisting of surprising content. She is now taking care of the visual in a creative music label Do Hits, making cover arts, live visual and graphics. Do Hits is known for Asian digital sound and art. Veeeky’s visual is based on the thinking of contemporary society, discussing internet, gender, information, channels, globalization-local content, often presenting it in high saturation utopia videos.
                            His work centers around personal experience as an immigrant, adapts to connect different subjects or stories to address the phenomena. He received an MFA in Digital Arts at Pratt Institute in Brooklyn. Lin’s work has been included in international group exhibitions such as ”The 15th Digital Art Festival Taipei” “The 6th International Video Art Exhibition”, “ADAF 14th Athens Digital Arts Festival” and solo exhibitions at Taipei Fine Art Museum, Kuandu Museum of Fine Arts. 
                        </BLOCK>
                        <BLOCK>
                        <b>XTRUX</b><br/>
                            <A target='_blank' href='https://instagram.com/xtrux_official'>https://instagram.com/xtrux_official</A> <br/>
                            成立於2020年10月，由多位關注於新媒體藝術的創作者組成，近期以元宇宙、遊戲、動態捕捉、聲光、裝置、銳舞、音像等元素在藝術創作中發展，創作主要關注「虛擬世界、數位身分、民間信仰」之交互關係，試圖在虛擬及沉浸式媒體的形式中重塑之間的關係。
                            <SMALLBR><br/></SMALLBR>
                            成員：蘇柏瑞（行政、視覺影像）、李畯玨（論述、視覺影像）、邱晨恩（視覺影像）、葉志翔（特效）、黃詠仁 ( 聲音、程式設計 )
                            <SMALLBR><br/></SMALLBR>
                            XTRUX, founded in October 2020 with a number of creators whose works focus on new media art, and has recently developed in artistic creation with elements such as Metaverse, Video game, motion capture, Sound Art(Klangkunst), Light, Installation, Rave, Audio-visual, etc. Their creative practice mainly focuses on the interaction of "virtual world, digital identity, and Taiwanese folk beliefs" with the attempt to reshape the relationship between virtual and immersive media.
                        </BLOCK>
                     </T2>
                     <T2>
                        <T0>虛擬藝廊參展藝術家 Virtual Art Gallery Artists</T0>
                        <BLOCK>
                            <b>莊凱竣, 趙怡然, N. Andrew Walsh</b><br/>
                            "Chatroom" 作品的慨念發展是由台灣舞者/編舞者 莊凱竣、中國當代⾳樂作曲家/演出者 趙怡然、美國編劇/作家 N. Andrew Walsh，他們除了參與演出以外還與烏克蘭指揮/ 女⾼⾳ Viktoriia Vitrenko、法國打擊樂⼿ Lucas Gerin、德國導演/攝影 Christopher  Buehler、烏克蘭視覺藝術/多學科設計師 Sasha Pais 共同創作。
                            藝術家們來⾃世界各國，不同的⽂化也為作品帶來不⼀樣的點⼦。Chatroom 創作於2021德國斯圖加特拍攝於Kultur im Bunker 它是⼀個持續發展性的計畫，因為疫情的關係這次選擇以網站的⽅式來呈現作品並且希望能夠與觀眾互動為主。作品將於2023/24年在歐洲巡演， 以現場表演的形式來進⾏演出。
                            <SMALLBR><br/></SMALLBR>
                            The concept of "Chatroom" develop by Taiwanese Dancer/Choreographer Kai-Chun  Chuang, Chinese Composer/performer Yiran Zhao and American librettist/author N.  Andrew Walsh. Collaborate with Ukrainian conductor/singer Viktoriia Vitrenko and French percussionist  Lucas Gerin. German Video maker/director Christopher Buehler, Ukrainian  multidisciplinary designer/visual artist Sasha Pais. The artists team is from all over the  world with divers idea. The piece made in Stuttgart Germany 2021 filmed at Kultur im  Bunker. Chatroom is a continuation of the work because of the pandemic, therefore the  website is used tp present the works and interact with the audience. The piece is planning to  have live performance and tour in Europe 2023/24. 
                        </BLOCK>
                       <BLOCK>
                            <b>Guy Ronen, Alice Minervini,Elettra Giunta</b><br/>
                            Guy 是一位來自倫敦的穿領域藝術家。X也的實踐是由非線性的、零散的和廣闊的知識體系所掌握的，X也試圖用這些知識重新定位和反學習（Unlearning）現有的虛構和具體結構。 Alice 是一位藝術家和作家，她對於以動作及虛構敘事作為酷兒未來的想像感到興趣。她的創作實踐是以一系列合作的形式展開，研究技術介面對親密關係所造成的情緒影響。Elettra 是一位動作藝術家和編舞家，來自西西里島，目前居住在倫敦。她的藝術實踐源於她對流動現實、做夢地狀態以及 womxn 的賦權和脆弱的研究。
                            <SMALLBR><br/></SMALLBR>
                            Guy is a multidisciplinary artist based in London. Their practice is held by nonlinear, patchy and capacious bodies of knowledge with whom they attempt to reorientate and unlearn existing fictional and embodied structures.<br/>
                            Alice is an artist and writer interested in movement and fiction as ways to envision queer futures. Her practice unfolds as a series of collaborations that investigate the emotional impacts of technological interfaces on intimacy.<br/>
                            Elettra is a movement artist and choreographer, originally from Sicily, currently based in London. Her artistic practice is informed by her interest in fluid realities, dreaming states, and womxn's empowerment and vulnerabilities.<br/>
                        </BLOCK>
                        <BLOCK>
                            <b>HakureiNeko -</b><br/>
                            <A target='_blank' href='https://www.iitzunii.com/'>https://www.iitzunii.com/</A> <br/>
                            是來自台灣的3D藝術家。<br/>
                            喜歡創作寫實的3DCG，同時也喜歡玻璃折射帶來的美。
                            <SMALLBR><br/></SMALLBR>
                            HakureiNeko is a 3D artist from Taiwan.<br/>
                            I like to create realistic 3DCG, and I also like the beauty by the refraction of glass.
                        </BLOCK>
                        <BLOCK>
                            <b>Tzu Ni</b><br/>
                            <A target='_blank' href='http://hakurei.cat/'>http://hakurei.cat/</A> <br/>
                            作品主要聚焦於空間裝置與聲音裝置，藉由裝置探討空間中光線建構與聲音身體交互接合的關係與環境。<br/>
                            空間於聲音，聲音於身體，身體於機器，機器於儀式，儀式於詩，詩於空間。<br/>
                            試圖在現今社會狀態充滿無意義的勞動之中，建構一個環繞的場景／空間讓聽者進入空幻的狀態把自身與外界隔絕，在當下深切感知思緒與此在。
                            <SMALLBR><br/></SMALLBR>
                            In a social landscape filled to the brim with busy work, Hung Tzu-Ni seeks to create a setting or an environment where a listener or viewer might enter into a dream state, momentarily isolated from the outer world, and in that space be able to more intensely perceive one’s frame of mind & body.
                        </BLOCK>
                        <BLOCK>
                            <b>Jacys Lin</b><br/>
                            <A target='_blank' href='https://www.instagram.com/jacyslin/'>https://www.instagram.com/jacyslin/</A> <br/>
                            現任動畫公司經營者與監督，實作苦幹十年以上的視覺特效藝術家。
                            <SMALLBR><br/></SMALLBR>
                            Owner of StealthWorks Taiwan. JC has experience in world famous companies such as Industrial Light and Magic, Weta Digital and SquareEnix. Also passionate for complex, photorealistic effects and simulation work - including natural phenomena like fire, smoke, water and destruction.<br/>
                            IMDB<br/>
                            <A target='_blank' href='http://www.imdb.com/name/nm5350328/'>http://www.imdb.com/name/nm5350328/</A> <br/>
                            13 years experience in CG industry. Most are working with visual effect. Self-motivated individual with a disciplined attitude towards work and studies. Assiduous effort on adapting to new situations and meeting goal-oriented challenges.
                        </BLOCK>
                        <BLOCK>
                            <b>Master Chu</b><br/>
                            <A target='_blank' href='https://www.instagram.com/master_chu/'>https://www.instagram.com/master_chu/</A> <br/>
                            Master Chu，1994年生，涉足藝術指導、數位藝術、平面視覺、品牌規劃及網頁設計等範疇。現為＂aether3 三渡創意＂負責人之一，此團隊致力於創造嶄新且獨特的視覺符碼，並將前衛的創意發想帶入每一項專案；同時也以個人名義發表獨立製作的創作，作品涵蓋次文化、音樂及服飾等領域，試圖創造強烈衝突並具敘事感的畫面。
                            <SMALLBR><br/></SMALLBR>
                            Master Chu is a Taiwanese multi-disciplinary designer, involves in the fields of Art Direction, Graphic, Branding, Web Design and Digital Art. He currently works as a graphic designer and co-founder of aether3 Studio, the studio dedicated to creating contemporary visual languages and bringing avant-garde creativity to their projects. He also creates personal artworks through digital and physical means, spanning the fields of Culture, Music, Fashion and CGI Art, trying to create conceptual and narrative visions.
                        </BLOCK>
                        <BLOCK>
                            <b>RONG</b><br/>
                            <A target='_blank' href='https://www.instagram.com/rong_ad/'>https://www.instagram.com/rong_ad/</A><br/>
                            Master Chu，1994年生，涉足藝術指導、數位藝術、平面視覺、品牌規劃及網頁設計等範疇。現為＂aether3 三渡創意＂負責人之一，此團隊致力於創造嶄新且獨特的視覺符碼，並將前衛的創意發想帶入每一項專案；同時也以個人名義發表獨立製作的創作，作品涵蓋次文化、音樂及服飾等領域，試圖創造強烈衝突並具敘事感的畫面。
                            <SMALLBR><br/></SMALLBR>
                            目前致力於製作動畫、VJ、3D領域相關之個人創作。重點在於探索，並且創造一些未知元素的作品以表達自我。興趣則是利用閒暇時間去環島，並在每一次的旅行中獲得不同的啟發，是我靈感的根源，而這些也和我的創作息息相關。<br/>
                            創作這件事，對我來說一直都是不可或缺的，它時常可以引領我的生活以及情緒。偶爾腦海裡經常浮現一些不明生物，在我的潛意識裡，祂們擁有一個完整的生態宇宙，混藏在我的行星記憶庫裡。因此想利用3D結合動畫，將他們實質化，除了重新賦予新的生命之外，祂們的顯化，對我來說是Y世代的福音。身處於資訊混沌的年代裡，可以快速的學習，運用，不停的創造、延伸。虛擬的新紀元，開啟了我的精神感官世界，也造就了我對未來的各種想像，生活也是有跡可循的。
                            <SMALLBR><br/></SMALLBR>
                            Currently working on personal creations related to animation, Video Jockey and 3D fields.The focus is on exploring and creating works of unknown elements to express oneself.  I travel around the island oftenly and get a different inspiration each time I travel. It is the source of my inspiration, moreover, these are also closely related to my creation.<br/>
                            Creating has always been inseparable to me, it can guide my life and emotions. Occasionally, some unknown creatures will appear in my mind. In my subconscious, they have a complete ecological universe, which is mixed in my planetary memory bank. Therefore, I want to use 3D combined with animation to materialize them. In addition to giving rebirth, their manifestation is a blessing from Y Generation to me. Being the age of information chaos, we can quickly learn, use, and constantly create and extend. The new era of virtuality has inspired my spiritual sensory world, and it has also created my various imaginations about the future which is also traceable in life.
                        </BLOCK>
                        <BLOCK>
                            <b>Frran Bertomeu Castells & 羅妍婷</b><br/>
                            <A target='_blank' href='https://fonserbc.itch.io/'>https://fonserbc.itch.io/</A><br/>
                            Ferran Bertomeu Castells (巴塞隆納，西班牙) 是個熱衷於音樂互動作品的遊戲開發工程師。羅妍婷(台灣)是個獲獎爵士音樂家和跨領域自由創作者。兩人現居台北，多次合作探索音樂敘事及遊戲互動的交集。
                            <SMALLBR><br/></SMALLBR>
                            Ferran Bertomeu Castells (Barcelona, Spain) is a game designer and developer that has been exploring the intersection of music and game design.<br/>
                            羅妍婷 YenTing Lo (Kaohsiung, Taiwan) is an awarded jazz singer-songwriter and designer that has been composing and exploring different ways to engage the audience with her music.<br/>
                            Together they have collaborated in several interactive experiences and games that explore different uses of music in game design and novel music-centered storytelling devices. They are currently based in Taipei.
                        </BLOCK>
                        <BLOCK>
                            <b>姚睿蘭</b><br/>
                            <A target='_blank' href='https://www.instagram.com/yaoyaya.art/'>https://www.instagram.com/yaoyaya.art/</A><br/>
                            姚睿蘭，台南人，目前常駐於台北。畢業於台藝大書畫藝術學系、北藝大新媒體藝術學系碩士班， 曾赴法國布爾日高等藝術學院交換（2013）。創作根基於書畫水墨的傳統訓練，跨足互動科技、關係美學。 近期創作著重在科技發展背後的傳導媒材、技術語言與其隱喻。<br/>
                            於2019年初舉辦個展—「印予召准」以大地遊戲的方式將展場分佈於台北市11個空間。駐村經歷包含STUPIN共享工作室計畫、《 場所感 》－ 青年藝術駐村及駐點培力、《 邊陲人》台灣與尼泊爾鄉憂系列計畫三部曲，作品展出於2020年台灣雙年展。 技術支援長期與maker社群成員協作。
                            <SMALLBR><br/></SMALLBR>
                            Jui-Lan Yao (1989 - ) Artists based in Taiwan, Taipei. B.D. in Painting and Calligraphy, National Taiwan University of Arts, M.F.A in New Media, Taipei National University of the Arts, with exchange experience at the Bourges College of Fine Arts in France as an exchange student. <br/>
                            Her works are mainly based on traditional training in calligraphy and painting, as well as on interactive technology and relational aesthetics. Her recent interests focus on technical material and metaphoric behind technology development. Her creations often cooperate with local makerspaces.
                        </BLOCK>
                        <BLOCK>
                            <b>陳政維 Chen Cheng-Wei</b><br/>
                            <A target='_blank' href='https://www.instagram.com/bezi_popok/'>https://www.instagram.com/bezi_popok/</A><br/>
                            目前就讀於臺北藝術大學新媒系，嘗試以各種形式或手法尋找影像的可能性，將大量的生活經驗與反思直覺式的注入作品，多以實拍、動畫錄像和影像裝置為主呈現。
                            <SMALLBR><br/></SMALLBR>
                            Currently studying new media art in Taipei National University of the Arts, what I'm trying to pursue through experimenting on variety of methods and form of imagery making, is to find out the different possibilities of moving images.<br/>
                            Inserting life experience and instinctive creative process into it, majority of my work are presented as animation and video installation.<br/>
                        </BLOCK>
                        <BLOCK>
                            <b>Cheng Daoyuan</b><br/>
                            <A target='_blank' href='http://www.chengdaoyuan.com/'>http://www.chengdaoyuan.com/</A><br/>
                            鄭道元是來自臺北的新媒體創作者，以聲響、影像及裝置等形式探尋自我狀態與存在本質的相對與共存，將一體兩面作為核心概念貫穿於作品中。2019年日本演出後發行首張實體專輯，2020年於國立臺灣美術館製作7.1聲道聲音設計，並於MUTEK線上活動Nexus Experience演出。 現為英國Currents.fm及香港聯合電台常駐主持。
                            <SMALLBR><br/></SMALLBR>
                            Cheng Daoyuan is a Taipei-based multimedia creator, he searches paradox and coexist between self-awareness and existence with experimental sound, visual and installations. At the core of Cheng's art is the convergence of two distinct planes into a coherent form, tries to present the philosophy concept of "Everything is nothingness, the end is the beginning" in his works.
                        </BLOCK>
                        <BLOCK>
                            <b>阮柏遠</b><br/>
                            <A target='_blank' href='https://www.poyuan.art/'>https://www.poyuan.art/</A><br/>
                            阮柏遠，藝術家、遊戲玩家與網路成癮者，以數位考古作為創作脈絡的核心概念，長期以數位遊戲、網路空間作為關注研究對象，將成長在網際網路、新型態的入口瀏覽器與線上社群、電子數位遊戲等所架構的後網路時代，來自於遊戲或數位的美學等等，新形式的數位視覺經驗等等這些要素作為阮柏遠創作的重要發源，創作融合線上遊戲、網路社群、機造影片、遊戲引擎、3D軟體，不管是歷史、記憶、美感、技術上的特性等等創造出新的、屬於當代新的視覺經驗、技術思考以及雕塑、影像等等觀看方式，呈現出的新的觀點與思考方式去反思與叩問這個後網路時代背後的元設定。
                            <SMALLBR><br/></SMALLBR>
                            Juan Poyuan, an artist, gamer and Internet addict, takes digital archaeology as the core concept of his creative process, and has been focusing on digital games and online spaces for a long time. Poyuan ‘s creation source combining online games, online communities, machine-made videos, game engines, 3D software, history, memory, aesthetics and technical characteristics to create a new, contemporary visual experience, technical thinking, sculpture, video and other ways of viewing, presenting new perspectives and ways of thinking to reflect on and question the meta-set-up behind this post-Internet era.
                        </BLOCK>
                        <BLOCK>
                            <b>Bing</b><br/>
                            <A target='_blank' href='https://bingcomputing.hotglue.me/'>https://bingcomputing.hotglue.me/</A><br/>
                            Bing是⼀位數字媒體領域的圖像創作者，致⼒於通過數字互動與視覺藝術的結合，探索行為和體驗給作品概念和形式表達上帶來的可能性。從平⾯設計到計算機藝術，她沉迷於構建系統，在克制中失控，在混亂與秩序間找⼀個精準的⼊口，然後通向更加寬⼴的詩意。
                            <SMALLBR><br/></SMALLBR>
                            Bing is a digital creator and image maker. She is dedicated to combine visual arts and multimedia interactions, as well as to explore the possibilities where conceptive expression and live experience intersect. Her creative practice includes Graphic Design, Photography, Video Arts, Interactive Installations and Audio-visual Performance, etc. Bing is fascinated with constructing systems, which she could navigate to an exit of poetics in between the order and the chaos.
                        </BLOCK>
                    </T2>
                </DIV>
            }
            
        />
    )

}

export default MobileVirtualArtGallery;