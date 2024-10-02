import gitFrame from "./images/git_frame.svg";
import twitter from "./images/twitter.svg";
import discord from "./images/discord.svg";

function Footer() {
  return (
    <>
      <hr />
      <div className="footer">
        <div className="class">
          <p>Products</p>
          <ul>
            <li>Coding</li>
            <li>Prototyping</li>
            <li>Knowledge sharing</li>
            <li>Feedback</li>
            <li>What's new</li>
          </ul>
        </div>
        <div className="class">
          <p>Explore</p>
          <ul>
            <li>Featured sandboxes</li>
            <li>Search sandboxes</li>
          </ul>
        </div>
        <div className="class">
          <p>For</p>
          <ul>
            <li>Individuals</li>
            <li>Teams</li>
            <li>Enterprise</li>
          </ul>
        </div>
        <div className="class">
          <p>About</p>
          <ul>
            <li>Pricing</li>
            <li>Company</li>
            <li>Blog</li>
            <li>Podcasts</li>
            <li>Jobs</li>
            <li>Terms of use</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="class">
          <p>Support</p>
          <ul>
            <li>Documentation</li>
            <li>Contact support</li>
            <li>Status</li>
          </ul>
        </div>
      </div>
      <div className="links">
        <div className="social">
          <img src={gitFrame} alt="" className="git" />
          <img src={discord} alt="" className="discord" />
          <img src={twitter} alt="" className="twitter" />
        </div>
        <span>Copyright © 2022 CodeSandbox BV.</span>
      </div>
    </>
  );
}

export default Footer;
