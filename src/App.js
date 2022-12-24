import './App.css';
import Layout from './components/layouts';
import Banner from './components/layouts/banner';
import Welcome from './components/sections/welcome';

function App() {
  return (
    <Layout>
      <div className='pt-[120px] ml-[200px] w-full max-w-[1300px]'>
        <Banner />
      </div>
      <div className='myContainer'>
        <Welcome />
      </div>
    </Layout>
  );
}

export default App;
