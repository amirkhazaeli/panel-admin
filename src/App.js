import { useRoutes } from 'react-router-dom';
import './App.css';
import SideBar from './component/sideBar/SideBar';
import TopHeader from './component/topHeader/TopHeader';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Routes from './routes';
import { useState } from 'react';


function App() {
  let router = useRoutes(Routes)
 
  const [showScroll,setShowScroll] = useState(false)
  const checkScroll = () => {
    if ( window.pageYOffset > 100){
      setShowScroll(true)
    } else if ( window.pageYOffset < 100){
      setShowScroll(false)
    }
  }
  const scrollTop = () => {
    window.scrollTo({top: 0 , behavior: 'smooth'})
  }

  window.addEventListener('scroll', checkScroll)
  return (
    <>
      <TopHeader />
      <div className='container'>
        <SideBar />
        {router}
      </div>

      
     {
      showScroll ? (
        <button onClick={scrollTop} className='button'>
        <i><KeyboardArrowUpIcon /></i>
      </button>
      ): null
     }
    </>
  );
}

export default App;
