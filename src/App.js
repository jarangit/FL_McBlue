import './App.css';
import Layout from './components/layouts';
import Banner from './components/layouts/banner';
import SportGame from './components/sections/sportGame';
import CasinoGame from './components/sections/casinoGame';
import Welcome from './components/sections/welcome';
import HotGame from './components/sections/hotGame';

function App() {
  return (
    <Layout>
      <div className='pt-[120px] ml-[200px] w-full max-w-[1300px]'>
        <Banner />
      </div>
      <div className='myContainer'>
        <Welcome />
        <SportGame />
        <CasinoGame />
        <HotGame />
      </div>
    </Layout>
  );
}

export default App;
