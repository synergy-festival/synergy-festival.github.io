import { isMobile } from 'react-device-detect';
import TwoCol       from "../../components/Layout/twoCol";
import TwoRow       from "../../components/Layout/twoRow";
import Posts         from './posts'


function News() {
    return (
        isMobile 
        ? <TwoCol top ='News' bottom={<Posts />} />
        : <TwoRow decoration={true} left='News' right ={<Posts />} />
    )

}


export default News