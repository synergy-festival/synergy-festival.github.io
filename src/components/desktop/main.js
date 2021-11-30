import styled    from 'styled-components'
import Cover     from '../desktop/cover'
import Header    from '../desktop/header'
import Nav       from '../desktop/nav'
import Title     from '../desktop/title'
import Logo      from '../desktop/logo'
import Subscribe from '../desktop/subscribe'

const Div = styled.div`
    width: 100%;
    height: 100%;
    padding: 2%;
    display: flex;
    flex-direction: column;
`;


function  Main(props) {
    const {lang, setLang} = props
    return (
        <>  
            <Cover/>
            <Div>
                <Header page='main' lang={lang} setLang={setLang} />
                <Nav page='main'/>
                <Title />
                <Logo />
                <Subscribe lang={lang}/>
            </Div>
        </>
    )
}


export default Main;