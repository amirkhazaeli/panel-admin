import './WidgetLg.css'
import { TransActions } from '../../data';
function WidgetLg() {

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
                        TransActions.map((transAction) => (
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
                        ))
                    }
                </table>
            </div>
        </div>
    );
}

export default WidgetLg;