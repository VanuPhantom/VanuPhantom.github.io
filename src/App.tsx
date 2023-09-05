import Contact from "./Contact";
import Intro from "./Intro";
import Motto from "./Motto";

export default function App() {
  return (
    <>
      <div id="top-section-container">
        <div>
          <Motto />
          <Intro />
        </div>
        <Contact />
      </div>
    </>
  );
}
