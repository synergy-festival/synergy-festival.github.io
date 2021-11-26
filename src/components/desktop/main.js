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


function  Main() {

    return (
        <>  
            <Cover/>
            <Div>
                <Header page='main'/>
                <Nav page='main'/>
                <Title />
                <Logo />
                <Subscribe />
            </Div>
        </>
    )
}


export default Main;