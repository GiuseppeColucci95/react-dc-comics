import Header from './components/Header';
import Main from './components/Main';
import Banner from './components/Banner';
import Footer from './components/Footer';

import comics from './data/comics';
import links from './data/links';

function App() {

  return (
    <>
      <Header content={links}></Header>
      <Main></Main>
      <Banner></Banner>
      <Footer></Footer>
    </>
  );
}

export default App;
