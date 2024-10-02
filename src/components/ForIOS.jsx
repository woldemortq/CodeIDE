import JohnImg from './images/johnDOe.svg'
import code from './images/code.svg'

function forIos() {
  return (
    <>
      <img className="john" src={JohnImg} alt="" />
      <img className="code" src={code} alt="" />
      <div className="forIos">
        <ul>
          <li className="ios-item">CodeSandbox for iOS</li>
          <li className="ios-item">
            Anywhere, <br />
            anytime.
          </li>
          <li className="ios-item">
            Experience the future of web development and <br />
            build projects with the first cloud IDE for IOS.
          </li>
          <li className="ios-item">Learn more</li>
        </ul>
      </div>
    </>
  );
}

export default forIos;
