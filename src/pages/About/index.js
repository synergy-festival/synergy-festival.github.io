import { isMobile } from 'react-device-detect';
import TwoCol       from "../../components/Layout/twoCol";
import TwoRow       from "../../components/Layout/twoRow";
import Description  from './description'

function About() {

    if (isMobile) {
        return (
            <TwoCol top='About' bottom={<Description/>} />
        )
    } else {
        return (
            <TwoRow decoration={true} left='About' right={<Description/>} />
        )
    }

}


export default About