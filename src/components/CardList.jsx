import Card from './Card/Card';

export default function CardList({ array }) {

  return (
    <div className="row">

      {
        array.map(comic =>
          (<Card key={comic.id} image={comic.thumb} title={comic.series.toUpperCase()}></Card>))
      }

    </div>
  );
}