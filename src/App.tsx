import { AboutWork } from "./components/AboutWork";
import { Advantages } from "./components/Advantages";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroBlock } from "./components/HeroBlock";
import { Services } from "./components/Services";
import { Warranty } from "./components/Warranty";

function App() {
  return (
    <>
      <main className="w-full px-4 py-6 xl:w-4/5 lg:mx-auto flex flex-col gap-5">
        <Header></Header>
        <HeroBlock></HeroBlock>
        <Advantages></Advantages>
        <Services></Services>
        <AboutWork></AboutWork>
        <Warranty></Warranty>
        <Footer></Footer>
      </main>
    </>
  );
}

export default App;
