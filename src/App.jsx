import { Dock } from "@components/Dock";
import { Home } from "@components/Home";
import { Navbar } from "@components/Navbar";
import { Welcome } from "@components/Welcome";
import { ContactWindow } from "@windows/Contact";
import { FinderWindow } from "@windows/Finder";
import { ImageWindow } from "@windows/Image";
import { ResumeWindow } from "@windows/Resume";
import TerminalWindow from "@windows/Terminal";
import { TextWindow } from "@windows/Text";
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
      <TextWindow />
      <ImageWindow />
      <ContactWindow />
      <Home />
    </main>
  )
};

export default App;