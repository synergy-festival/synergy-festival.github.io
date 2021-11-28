import { useRef, useEffect }  from 'react'
import styled from 'styled-components'
import logoWebm from '../../assests/video/logo.webm'
import logoMov  from '../../assests/video/output.mov'
import { useNavigate } from "react-router-dom";
import logoGif from '../../assests/img/output.gif'




const Video = styled.video`
    position: fixed;
    left: 1%;
    bottom: 15%;
    z-index: -1;
    width: 20%;
    height: auto;
    z-index: 10
`

const Img = styled.img`
    position: fixed;
    left: 1%;
    bottom: 15%;
    z-index: -1;
    width: 20%;
    height: auto;
    z-index: 10
`

const Div = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0%;
    top: 0%;
    z-index: 10;
`


function Logo() {
    const vidRef  = useRef(null);
    const navigate = useNavigate()



    function handleClick() {
        navigate('/')
    }


    return (
        <>
            <Img src={logoGif} onClick={handleClick}    />
        </>
        // <Div onClick={handlePlayVideo} >  
        //     <Video ref={vidRef} 
        //            onClick={handleClick} 
        //            playsInline 
        //            muted 
        //            loop>
        //         <source src={logoMov}  type='video/mp4' codecs='hvc1' />
        //         <source src={logoWebm} type='video/webm' />
        //     </Video>
        // </Div>
    )
}

// function Logo() {
//     const videoRef = useRef(undefined);
//     useEffect(() => {
//         videoRef.current.defaultMuted = true;
//     })
//     return (
//         <>
//             <Video
//                 ref={videoRef}
//                 loop
//                 autoPlay
//                 muted
//                 playsInline>
//                 <source src={logoMov}  type='video/mp4' codecs='hvc1' />
//                 <source src={logoWebm} type='video/webm' />
//             </Video>        
//         </>
//     )
// }

export default Logo;