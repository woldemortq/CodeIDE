import collaboration from './images/collaboration.svg'
import man1 from './images/man1.svg'
import man2 from './images/man2.svg'
import man3 from './images/man3.svg'
import man4 from './images/man4.svg'
import man5 from './images/man5.svg'
import man6 from './images/man6.svg'

function codeContainer(){
    return(
        <>
        <div className="code-container">
      <img
             className="collaboration"
        src={collaboration}
        alt=""
      />
      <img   className="man" src={man2} alt="" />
      <img   className="man" src={man1} alt="" />
      <img   className="man" src={man3} alt="" />
      <img   className="man" src={man4} alt="" />
      <img   className="man" src={man5} alt="" />
      <img   className="man" src={man6} alt="" />
      <h2>
        Code collaboration <br />
        made easy.
      </h2>
      <h3>
        A link is all you need to hop into a sandbox <br />
        and keep development work flowing.
      </h3>
    </div>
        </>
    )
}

export default codeContainer;