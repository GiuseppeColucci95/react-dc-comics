//import components to use
import Header from './components/Header';
import Main from './components/Main';
import Banner from './components/Banner';
import Footer from './components/Footer';

//import datas to use or drill
import comics from './data/comics';
import navLinks from './data/navLinks';
import footerLinks from './data/footerLinks';

//function to start everything
function App() {

  return (
    <>
      <Header links={navLinks}></Header>
      <Main array={comics}></Main>
      <Banner></Banner>
      <Footer links={footerLinks}></Footer>
    </>
  );
}

export default App;
