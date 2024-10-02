import Ball from './images/ball.svg'
import Spectr from './images/spectr.svg'
import Plum from './images/plum.svg'
import Hoverboard from './images/hoverboard.svg'

function FooterText() {

  return (
    <>
      <div className="footer-text">
        <li className="text1-footer">Free for personal use.</li>
        <li className="text2-footer">
          Create static sites, components, or full-stack web <br />
          apps with a community who've crafted 17,581,604 public <br />
          sandboxes and counting.
        </li>
        <button className="footer-start">Get started, it's free</button>
      </div>
      <div className="footer-icons">
        <img className='Ball' src={Ball} alt="" />
        <img className='spectr' src={Spectr} alt="" />
        <img className='plum' src={Plum} alt="" />
        <img className='hoverboard' src={Hoverboard} alt="" />
      </div>
    </>
  );
}
export default FooterText;
