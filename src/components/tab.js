import logo from '../assests/img/logo-purple.png';
import { Helmet } from "react-helmet";

function Tab() {

    return (
        <Helmet> 
            <meta name="description" 
                  content="Synergy Festival Shape The Future With Music, Art and Technology" 
            />
            <title>Synergy Festival</title> 
            <link rel="icon" type="image/png" href={logo} sizes="16x16" />
        </Helmet>
    )
}


export default Tab;