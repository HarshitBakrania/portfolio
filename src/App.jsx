import { Dock } from "@components/Dock";
import { Navbar } from "@components/Navbar";
import { Welcome } from "@components/Welcome";
import { FinderWindow } from "@windows/Finder";
import { ResumeWindow } from "@windows/Resume";
import TerminalWindow from "@windows/Terminal";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

const App = () =>{
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <TerminalWindow />
      <ResumeWindow />
      <FinderWindow />
    </main>
  )
};

export default App;