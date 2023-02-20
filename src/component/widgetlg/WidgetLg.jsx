import './WidgetLg.css'
import { TransActions } from '../../data';
import Fade from 'react-reveal/Fade';
function WidgetLg() {
    let num= 0;
    const Button = ({ type }) => {
        return <button className={'widgetLgButton' + type}>{type}</button>
    }
    return (
        <div className='widgetLg'>
            <div className="widgetLgWrapper">
                <h3 className='widgetLgTitle'>Latest TransActions</h3>
                <table className='widgetLgTable'>
                    <tr className="widgetLgtr">
                        <th className="widgetLgth">Customer</th>
                        <th className="widgetLgth">Date</th>
                        <th className="widgetLgth">Amount</th>
                        <th className="widgetLgth">Status</th>
                    </tr>
                    {
                        TransActions.map((transAction) => {
                          num= num + 1;
                          return  (
                                <Fade bottom delay={num * 500}>
                                    <tr className="widgetLgtr" key={transAction.id}>
                                        <td className="widgetuser widgetLgtd">
                                            <img src='images/top-image.jpg' alt="" />
                                            <span>{transAction.name}</span>
                                        </td>
                                        <td className="widgetLgtd">
                                            {TransActions.date}
                                        </td>
                                        <td className="widgetLgtd">
                                            {transAction.amount}
                                        </td>
                                        <td className="widgetLgtd">
                                            <Button type={transAction.status}></Button>
                                        </td>
                                    </tr>
                                </Fade>
                            )
                        }
                      )
                        
                       
                    }
                </table>
            </div>
        </div>
    );
}

export default WidgetLg;