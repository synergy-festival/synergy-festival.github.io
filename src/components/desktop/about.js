import styled  from 'styled-components'
import Header  from '../desktop/header'
import Nav     from '../desktop/nav'
import Content from '../desktop/content'
import Slogan  from '../desktop/slogan'


const Div = styled.div`
    width: 100%;
    height: 100%;
    padding: 2%;
    padding-bottom: 0;
    display: flex;
    flex-direction: column;
`;


function  About(props) {
    const { lang } = props

    return (
        <>  
            <Div>
                <Header page='about'/>
                <Nav page='about' active={true}/>
                <Content lang={lang}/>
                <Slogan />
            </Div>
        </>
    )
}


export default About;