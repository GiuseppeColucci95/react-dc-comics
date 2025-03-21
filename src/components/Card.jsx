export default function Card({ image, title }) {

  return (
    <div className="col-2">
      <div className="card">
        <div className="img-container">
          <img src={image} alt={`${title} image`} />
        </div>
        <div className="title">{title.toUpperCase()}</div>
      </div>
    </div>
  );
}