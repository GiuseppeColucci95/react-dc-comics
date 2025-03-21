import Card from './Card';
import comics from '../data/comics';

export default function CardList() {

  return (
    <div className="row">

      {comics.map(comic => <Card image={comic.thumb} title={comic.series.toUpperCase()}></Card>)}

    </div>
  );
}