import './App.css';
import Layout from './components/layouts';
import Banner from './components/layouts/banner';

function App() {
  return (
    <Layout>
      <div className='pt-[120px] ml-[200px] w-full max-w-[1300px]'>
        <Banner />
      </div>
      <div className='ml-[200px] w-full  p-3 min-h-screen max-w-[1300px]'>
        contents
      </div>
    </Layout>
  );
}

export default App;
