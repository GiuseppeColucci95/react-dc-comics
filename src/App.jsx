import Header from './components/Header';
import Main from './components/Main';
import Banner from './components/Banner';
import Footer from './components/Footer';

import comics from './data/comics';
import links from './data/links';


function App() {

  return (
    <>
      <Header links={links.navLinks}></Header>
      <Main array={comics}></Main>
      <Banner></Banner>
      <Footer links={links.footerLinksDcComics}></Footer>
    </>
  );
}

export default App;
