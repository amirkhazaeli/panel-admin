import Chart from "../../component/chart/Chart";
import Featurs from "../../component/features/Featurs";
import './Home.css'
import { xAxisData } from "../../data";
import WidgetSm from "../../component/widgetsm/WidgetSm";
import WidgetLg from "../../component/widgetlg/WidgetLg";

function Home() {
    return ( 
    <div className="home">
    <Featurs />
    <Chart title="Sales analysis" data={xAxisData} dataKey='sale' />
    <div className="widget">
     <WidgetSm />
     <WidgetLg />
    </div>
    </div> 
    );
}

export default Home;