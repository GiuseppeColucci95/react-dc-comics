import CardList from './CardList';
import Jumbotron from './Jumbotron';

export default function Main({ array }) {

  return (
    <main>

      <section id="series">

        <Jumbotron></Jumbotron>
        {/* /Jumbotron */}

        <div className="container">
          <div id="button">CURRENT SERIES</div>

          <CardList array={array}></CardList>
          {/* /Cardlist */}

          <div className="button">
            <a href="">LOAD MORE</a>
          </div>
        </div>
        {/* /container */}

      </section>
      {/* /section */}

    </main >
  );
}