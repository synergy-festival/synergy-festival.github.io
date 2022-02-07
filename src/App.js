import { useEffect } from 'react'
import { isMobile }   from 'react-device-detect';
import styled, { css } from 'styled-components'
import { Routes, Route, useLocation }       from 'react-router-dom';
import { GlobalStyle, pagePixel, getTheme } from './helpers'
import { ThemeProvider } from 'styled-components'
import Main   from './pages/Main'
import About  from './pages/About'
import Ticket from './pages/Ticket'
import News   from './pages/News'
import Artist from './pages/Artist'
import ArtistDetail from './pages/ArtistDetail'
import VirtualArtGallery from './pages/VirtualArtGallery';

import Header from './components/Header'
import Footer from './components/Footer'
import Tab    from './components/tab'


const Div = styled.div`
    width  : 100%;
    display: flex;
    flex-direction: column;
    height: ${(props) => props.isMobile ? '95%' : '100%'};
    ${props => props.isMobile && css`
        position: relative;
    `}
    ${props => !props.isMobile && css`
        padding: 2%;
    `}
`;



function App() {  

  useEffect(() => {
    pagePixel()
  }, []);

  const theme    = getTheme()
  const location = useLocation();
  const page     = location.pathname;

  
  return (
    <ThemeProvider theme={theme}>
      <Tab />
      <GlobalStyle />
      <Div isMobile={isMobile}>
         <Header page={page}/>
         <Routes>
             <Route path='/'       element={<Main page={page} />} exact/>
             <Route path='/news'   element={<News />} />
             <Route path='/about'  element={<About />} />
             <Route path='/artist' element={<Artist />} />
             <Route path="/artist/:artistId" element={<ArtistDetail />} />
             <Route path='/ticket' element={<Ticket />} />
             <Route path='/virtual-art-gallery' element={<VirtualArtGallery />} />
             <Route element={<Main page={page} />} />
         </Routes>
         <Footer page={page}/>
      </Div>
    </ThemeProvider>
  );
}

export default App;
