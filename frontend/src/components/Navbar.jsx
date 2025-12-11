import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header
      style={{
        background: "#ffffff",
        borderBottom: "1px solid #e0e4f0",
        position: "sticky",
        top: 0,
        zIndex: 9999,
      }}
    >
      <div
        className="container"
        style={{
          padding: "14px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 32,
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          className="brand-logo">
          Whitecircle Group
        </Link>

        {/* Main navigation */}
        <nav>
          <ul className="nav-menu">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>

            {/* Services dropdown */}
            <li className="nav-item dropdown">
              <span className="dropdown-toggle">Services ▾</span>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/services/software-development">Software Development</Link>
                </li>
                <li>
                  <Link to="/services/analytics">Analytics</Link>
                </li>
                <li>
                  <Link to="/services/industrial-automation">Industrial Automation</Link>
                </li>
                <li>
                  <Link to="/services/iot">Internet Of Things (IOT)</Link>
                </li>
                <li>
                  <Link to="/services/artificial-intelligence">
                    Artificial Intelligence (AI)
                  </Link>
                </li>
                <li>
                  <Link to="/services/database-design">Database Design</Link>
                </li>
                <li>
                  <Link to="/services/consulting">Consulting</Link>
                </li>
                <li>
                  <Link to="/services/digital-marketing">Digital Marketing</Link>
                </li>
                <li>
                  <Link to="/services/software-testing">Software Testing</Link>
                </li>
                <li>
                  <Link to="/services/cloud-hosting">Cloud &amp; Hosting Service</Link>
                </li>
              </ul>
            </li>

            {/* WEB3 dropdown */}
            <li className="nav-item dropdown">
              <span className="dropdown-toggle">WEB3 ▾</span>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/web3/ico-development">ICO Development</Link>
                </li>
                <li>
                  <Link to="/web3/token-development">Token Development</Link>
                </li>
                <li>
                  <Link to="/web3/web3-development">Web3 Development</Link>
                </li>
                <li>
                  <Link to="/web3/dapp-development">DApp Development</Link>
                </li>
                <li>
                  <Link to="/web3/wallet-development">Wallet Development</Link>
                </li>
                <li>
                  <Link to="/web3/exchange-development">Exchange Development</Link>
                </li>
                <li>
                  <Link to="/web3/mlm-development">MLM Software Development</Link>
                </li>
                <li>
                  <Link to="/web3/decentralized-exchange">
                    Decentralized Exchange
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/careers">Careers</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>

            {/* Book Consultation as a nav-style link */}
            <li>
              <NavLink to="/contact" className="nav-btn-link">
                Book Consultation
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
