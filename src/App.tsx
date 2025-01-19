import { Header } from "./components/Header";
import { HeroBlock } from "./components/HeroBlock";

function App() {
  return (
    <>
      <main className="w-full px-4 py-6 lg:w-4/5 lg:mx-auto flex flex-col gap-5">
        <Header></Header>
        <HeroBlock></HeroBlock>
      </main>
    </>
  );
}

export default App;
