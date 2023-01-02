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
import Step2Section from './components/sections/step2';
import WhySection from './components/sections/why';
import BlogSection from './components/sections/blog';
import Question from './components/sections/question';
import Sponsor from './components/sections/sponsor';
import SideMenuMB from './components/layouts/sideMenuMB';

function App() {
  const styled = {
    fullWidth: `
    ml-0 md:ml-[200px] w-full max-w-[1320px]
    `
  }
  return (
    <Layout>
      <div className={`${styled.fullWidth}  pt-[120px]`}>
        <Banner />
      </div>
      <div className='myContainerTop lg:ml-[200px] hidden md:block'>
        <Welcome />
        <SportGame />
        <CasinoGame />
        <SlotGame />
        <SlotGame2 />
      </div>
      <div className='myContainerTop lg:ml-[200px] md:hidden'>
        <div className='grid grid-cols-3 gap-2'>
          <div>
            <SideMenuMB/>
          </div>
          <div className='col-span-2 max-h-screen overflow-scroll'>
            <div className='myContainerTop lg:ml-[200px] !px-0'>
              <Welcome />
              <SportGame />
              <CasinoGame />
              <SlotGame />
              <SlotGame2 />
            </div>
          </div>
        </div>
      </div>
      <div className={`${styled.fullWidth}`}>
        <StepSection />
        <PromotionsSection />
        <Step2Section />
        <WhySection />
        <BlogSection />
        <Question />
        <Sponsor />
      </div>
    </Layout>
  );
}

export default App;
