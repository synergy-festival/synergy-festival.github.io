import styled          from 'styled-components'
import Cover           from '../../components/Media/cover'
import Title           from '../../components/Media/title'
import Icons           from '../../components/Media/icons'
import Subscribe       from '../../components/Subscribe'

const DivBottom = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;


function  MobileMain() {

    return (
        <>  
            <Cover />
            <Title/>
            <DivBottom>
                <Subscribe />
                <Icons />
            </DivBottom>
        </>
    )
}


export default MobileMain;