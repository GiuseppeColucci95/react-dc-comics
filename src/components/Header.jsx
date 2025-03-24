export default function Header({ links }) {


  return (
    <header>
      <div className="container">

        <div className="row">
          <img src="/dc-logo.png" alt="dc logo" />
          <ul>

            {
              links.map(link =>
                (<li key={link.id}><a href={link.href}>{link.title}</a></li>))
            }

          </ul>
        </div>

      </div>
    </header>
  );
}