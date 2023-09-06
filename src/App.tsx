import Contact from "./Contact";
import Intro from "./Intro";
import Motto from "./Motto";
import Skills from "./Skills";

export default function App() {
  return (
    <>
      <div id="top-section-container">
        <img src="https://avatars.githubusercontent.com/u/144150574?v=4" />
        <div>
          <Motto />
          <Intro />
        </div>
      </div>
      <Contact />
      <Skills />
    </>
  );
}
