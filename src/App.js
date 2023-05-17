import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import './assets/css/style.css'
import Layout from './components/layout/Layout';
import Routing from './routes/Routing';

function App() {
  return (
    <>
    <ToastContainer theme='dark'/>
      <Layout><Routing></Routing></Layout>
    </>
  );
}

export default App;
