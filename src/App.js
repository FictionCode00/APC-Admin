import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import './assets/css/style.css'
import Layout from './components/layout/Layout';
import Routing from './routes/Routing';
import Loader from './components/Loader/loader';
import { useContext } from 'react';
import appContext from './context/globalContext';

function App() {
  const context= useContext(appContext)
  return (
    <>
    <ToastContainer theme='dark'/>
      <Loader load={context.load}/>
      <Layout><Routing></Routing></Layout>
    </>
  );
}

export default App;
