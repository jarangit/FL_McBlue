import './App.css';
import Layout from './components/layouts';
import Banner from './components/layouts/banner';
import SportGame from './components/sections/sportGame';
import CasinoGame from './components/sections/casinoGame';
import Welcome from './components/sections/welcome';
import SlotGame from './components/sections/slotGame';
import SlotGame2 from './components/sections/slotGame2';
import StepSection from './components/sections/step';
import PromotionsSection from './components/sections/promotions';

function App() {
  const styled = {
    fullWidth: `
    ml-[200px] w-full max-w-[1320px]
    `
  }
  return (
    <Layout>
      <div className={`${styled.fullWidth}  pt-[120px]`}>
        <Banner />
      </div>
      <div className='myContainerTop'>
        <Welcome />
        <SportGame />
        <CasinoGame />
        <SlotGame />
        <SlotGame2 />
      </div>
      <div className={`${styled.fullWidth}`}>
        <StepSection />
        <PromotionsSection />
      </div>
    </Layout>
  );
}

export default App;
