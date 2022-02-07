import styled       from 'styled-components'
import { wrapping } from '../../helpers';
import Logo         from '../../components/Media/logo'
import Cover        from '../../components/Media/cover'
import Title        from '../../components/Media/title'
import Subscribe    from '../../components/Subscribe'



const StyledLogo = styled(wrapping(<Logo />))`
    position: absolute;
    left: max(5%, 5px);
    bottom: max(20%, 20px);
    z-index: -1;
    width: max(15%, 30px);
    height: auto;
`


function  DesktopMain() {

    return (
            <>
                <Cover/>
                <Title />
                <StyledLogo />
                <Subscribe />
            </>
    )
}


export default DesktopMain;