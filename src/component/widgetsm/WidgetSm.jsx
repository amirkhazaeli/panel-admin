import VisibilityIcon from '@mui/icons-material/Visibility';
import { NewJoinMember } from '../../data';
import './WidgetSm.css'
function WidgetSm() {
    return (
        <div className='widgetSm'>
            <div className='widgetWrapper'>
                <h3>New Join Member</h3>
                <ul>
                {
                    NewJoinMember.map((NewJoin)=> (
                        
                        <li className='widgetItem'>
                            <img src={NewJoin.image} alt="" />
                            <div className='userInfo'>
                                <span className='userName'>{NewJoin.name} </span>
                                <span className='userJob'>{NewJoin.job}</span>
                            </div>
                            <VisibilityIcon className='widgeticon' />
                        </li>
                    ))
                }

                </ul>
             
            </div>

        </div>
    );
}

export default WidgetSm;
