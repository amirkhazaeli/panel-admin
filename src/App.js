import { useRoutes } from 'react-router-dom';
import './App.css';
import Routes from './routes';


function App() {
  let router = useRoutes(Routes)
  return (
  <>
  {router}
  </>
  );
}

export default App;
