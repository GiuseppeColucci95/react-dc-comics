import CardList from './CardList';


export default function Main() {

  return (
    <main>

      <section id="jumbotron">
      </section>

      <section id="series">

        <div className="container">

          <div id="button">CURRENT SERIES</div>

          <CardList></CardList>

          <div className="button">
            <a href="">LOAD MORE</a>
          </div>

        </div>


      </section>

    </main >
  );
}