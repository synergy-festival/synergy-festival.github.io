import logo from '../assests/img/logo-purple.png';
import { Helmet } from "react-helmet";


function Tab() {
    return (
        <Helmet> 
            <title>Synergy Festival</title> 
            <meta name="description" content="Synergy Festival" />
            <link rel="icon" type="image/png" href={logo} sizes="16x16" />
        </Helmet>
    )
}


export default Tab;