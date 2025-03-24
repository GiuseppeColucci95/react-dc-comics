export default function Footer({ links }) {

  return (
    <footer>

      <section id="upper">

        <div className="container">
          <div className="row">
            <div className="col-1">
              <h3>
                DC COMICS
              </h3>
              <ul>
                {
                  links.dcComics.map(comic =>
                    (<li key={comic.id}><a href={comic.href}>{comic.title}</a></li>))
                }
              </ul>

              <h3>
                SHOP
              </h3>
              <ul>
                {
                  links.shop.map(link =>
                  (<li key={link.id}><a href={link.href}>{link.title}</a></li>
                  ))
                }
              </ul>
            </div>
            <div className="col-1">
              <h3>
                DC
              </h3>
              <ul>

                {
                  links.dc.map(link =>
                  (<li key={link.id}><a href={link.href}>{link.title}</a></li>
                  ))
                }

              </ul>
            </div>
            <div className="col-1">
              <h3>
                SITES
              </h3>
              <ul>
                {
                  links.sites.map(link =>
                  (<li key={link.id}><a href={link.href}>{link.title}</a></li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>

      </section>

      <section id="lower">
        <div className="container">
          <div className="row">
            <a id="sign-up" href="">SIGN-UP NOW!</a>
            <ul>
              <li><span>FOLLOW US</span></li>
              <li><a href=""><img src="/footer-facebook.png" alt="facebook img" /></a></li>
              <li><a href=""><img src="/footer-twitter.png" alt="twitter img" /></a></li>
              <li><a href=""><img src="/footer-youtube.png" alt="youtube img" /></a></li>
              <li><a href=""><img src="/footer-pinterest.png" alt="pinterest img" /></a></li>
              <li><a href=""><img src="/footer-periscope.png" alt="periscope img" /></a></li>
            </ul>
          </div>
        </div>
      </section>

    </footer >
  );
}