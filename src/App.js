import "./App.css";
import Head from "./components/Header";
import Prev from "./components/Preview";
import Prop from "./components/Properties";
import ForIOS from "./components/ForIOS";
import CodeContainter from "./components/CodeContainter";
import Blocks from "./components/Blocks";
import figures from "./components/images/figures.svg";
import people from "./components/images/peoples.svg";
import comms from "./components/images/comms.svg";
import JsDev from "./components/JsDev";
import npm from './components/images/npm.svg'
import charge from './components/images/charge.svg'
import git from './components/images/git.svg'
import reactMan from  './components/images/man_react.svg'
import reactLogo from './components/images/react_lg.svg'
import womanApollo from './components/images/woman_apollo.svg'
import apolloLogo from './components/images/Apollo_lg.svg'
import stripeLogo from './components/images/strip_lg.svg'
import stripeMan from './components/images/man_stripe.svg'
import FooterText from "./components/FooterText";
import Footer from './components/Footer'


function App() {
  return (
    <>
      <Head />
      <Prev />
      <Prop />
      <ForIOS />
      <CodeContainter />
      <div className="blocks-container"><Blocks
          image={figures}
          title="Rapid prototyping"
          text={
            <>
              Quickly create real, working
              <br />
              prototypes. Test ideas
              <br />
              earlier and iterate more.
            </>
          }
        />
        <Blocks
          image={people}
          title={
            <>
              Knowledge <br />
              sharing
            </>
          }
          text={
            <>
              Use code, apps, and <br />
              templates collectively. <br />
              Learn from each other and <br />
              bake-in best practice.
            </>
          }
        />
        <Blocks
          image={comms}
          title="Better Feedback"
          text={
            <>
              Give and get feedback, on
              <br />
              code or visuals, right in
              <br />
              the editor. Take action <br />
              and move forward faster.
            </>
          
          }
        />
        </div>
        
        <JsDev/>
        <div className="blocks-container">
        <Blocks
          image={npm}
          title={
            <>
              Supercharged <br/>
              with npm
            </>
          }
          text={
            <>
              Use private packages, or <br/>
              any of the 1M+ public <br/>
              ones, to build powerful <br/>
              apps quickly.
            </>
          }
        />
        <Blocks
          image={charge}
          title={
            <>
              Optimized for <br/>
              frameworks
            </>
          }
          text={
            <>
              Custom environments built <br/>
              specifically for React, Vue, <br/>
              Angular, and many more.
            </>
          }
        />
        <Blocks
          image={git}
          title={<>
          Integrated <br/>
          with GitHub
          </>}
          text={
            <>
              Import and run repos direct <br/>
              from GitHub. Or export <br/>
              your sandbox to a repo.
            </>
          }
        />
        </div>
        <div className="others">
      <p>What are others saying?</p>
      <div className="blocks-container">
        <Blocks
          image={reactMan}
          iconImg={reactLogo}
          title={
            <>
              “It's dramatically <br />
            improved my experience <br />
            of sharing ideas”
            </>
          }
          addictionalText={
            <>
              Brian Vaughn
            </>
          }
          text={
            <>
              Software Engineer, React Core <br />
              Team
            </>
          }
        />
        <Blocks
          image={womanApollo}
          iconImg={apolloLogo}
          title={
            <>
              “CodeSandbox continues <br/>
               to amaze me every day”
            </>
          }
          text={
            <>
            Engineering Manager, Apollo <br/>
             GraphQL
            </>
          }
          addictionalText="Peggy Rayzis"
        />
         <Blocks
          image={stripeMan}
          iconImg={stripeLogo}
          title={
          <>
          It feels much more like <br/>
           my local environment”
          </>
          }            
          text="Designer Developer, Stripe"
          addictionalText="Jonnie Hallman"
        />
        </div>
        </div>
        <FooterText/>
        <Footer/>
    </>
  );
}

export default App;
