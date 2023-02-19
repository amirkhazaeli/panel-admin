import Chart from "../../component/chart/Chart";
import Featurs from "../../component/features/Featurs";
import './Home.css'
import xAxisData from "../../data";
function Home() {
    return ( 
    <div className="home">
    <Featurs />
    <Chart title="Sales analysis" data={xAxisData} dataKey='sale' />
    </div> 
    );
}

export default Home;