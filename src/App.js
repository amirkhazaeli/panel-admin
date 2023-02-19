import { useRoutes } from 'react-router-dom';
import './App.css';
import SideBar from './component/sideBar/SideBar';
import TopHeader from './component/topHeader/TopHeader';
import Routes from './routes';


function App() {
  let router = useRoutes(Routes)
  return (
  <>
  <TopHeader />
  <div className='container'>
     <SideBar />
     {router}
  </div>
 
  </>
  );
}

export default App;
