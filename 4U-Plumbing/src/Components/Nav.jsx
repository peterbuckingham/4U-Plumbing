import Logo from "../images/logo-transparent.png";
import '../styles/index.css'

function Nav() {
  return (
    <div>
      <div className="top-nav">
        <div className="topNavShape"></div>
        <div>
          <img className="fouruPlumbingLogo" src={Logo} alt="4U-PlumbingLogo" />
          <p className="fouruPlumbingLogo-text">4U Plumbing</p>
        </div>
        <span className="top-nav-emailUs">
          <p className="email-Us">E-mail us:</p><p>4U-Plumbing.co.za</p>
        </span>
        <span>
          <div>
            <img src="" alt="clockIcon" />
          </div>
          <p>Monday - Friday</p>
        </span>
        <span className="top-nav-socialMedia">
          <p className="Follow-us">Follow us:</p>
          <img src="" alt="FacebookLogo" />
          <img src="" alt="instagramLogo" />
          <img src="" alt="tiktokLogo" />
        </span>
      </div>

      <div className="main-Nav">
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Services</a></li>
          <li><a href="">About</a></li>
          <li><a href="">FAQ</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
