import { useRoutes } from 'react-router-dom';
import './App.css';
import TopHeader from './component/topHeader/TopHeader';
import Routes from './routes';


function App() {
  let router = useRoutes(Routes)
  return (
  <>
  <TopHeader />
  {router}
  </>
  );
}

export default App;
