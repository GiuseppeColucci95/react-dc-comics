import Card from './Card/Card';
import comics from '../data/comics';

export default function CardList() {

  return (
    <div className="row">

      {comics.map(comic => <Card key={comic.id} image={comic.thumb} title={comic.series.toUpperCase()}></Card>)}

    </div>
  );
}