import Vector from "./images/Vector.svg";

function Head() {
  return (
    <>
      <header>
        <nav>
          <div className="colorHead"></div>
          <ul className="menu">
            <li className="logo">
              <img src={Vector} alt="" />
              <span>CodeSandbox</span>
            </li>
            <li className="menu-item">Product</li>
            <li className="menu-item">Explore</li>
            <li className="menu-item">Resources</li>
            <li className="menu-item">Support</li>
            <li className="menu-item">Pricing</li>
            <li className="menu-item">Jobs</li>
            <li className="menu-item">Sign In</li>
            <button className="create-sand">Create Sandbox</button>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default Head;
