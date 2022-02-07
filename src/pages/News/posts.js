import styled        from 'styled-components'
import { isMobile }  from 'react-device-detect';
import { getNews }   from '../../data'
import DesktopPost   from './post.desktop'
import MobilePost    from './post.mobile'



const List = styled.div`
    display: flex;
    flex-direction: column;
    &::selection {
        color      : #FFFFFF;
        background : #AE69FF;
    }
    &::-moz-selection {
        color: #FFFFFF;
        background : #AE69FF;
    }
`


function Posts() {
    const news = getNews()['data'];
    const sortedNews = news.sort((a, b) => a['date'].localeCompare(b['date'])).reverse()
    return (
        <List>
            {
                sortedNews.map(({ date, image, title, content }, index) => {
                    return (
                        isMobile
                        ? <MobilePost  key={index} date={date} image={image} title={title} content={content} /> 
                        : <DesktopPost key={index} date={date} image={image} title={title} content={content} />
                    )
                })
            }
        </List>
    )
}

export default Posts