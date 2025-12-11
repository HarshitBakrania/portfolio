import { Dock } from "@components/Dock";
import { Navbar } from "@components/Navbar";
import { Welcome } from "@components/Welcome";

const App = () =>{
  return (
    <>
      <Navbar />
      <Welcome />
      <Dock />
    </>
  )
};

export default App;