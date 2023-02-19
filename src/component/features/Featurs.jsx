import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import './Featurs.css'
function Featurs() {
    return (
        <div className="featurs">
            <div className='featurs-wrapper'>
                <div className='featurs-container'>
                    <div className='featurs-title'>
                        <h3>Revanue</h3>
                    </div>
                    <div className='featurs-range'>
                        <div className='featurs-info'>
                            <i><ArrowDownwardIcon className="featurs-icon-down"/></i>
                            <span>11.4-</span>

                        </div>
                        <span className='featurs-price'>$2,415</span>

                    </div>
                    <span className='featurs-sub'>compread to last month</span>
                </div>

            </div>

            <div className='featurs-wrapper'>
                <div className='featurs-container'>
                    <div className='featurs-title'>
                        <h3>Sales</h3>
                    </div>
                    <div className='featurs-range'>
                        <div className='featurs-info'>
                            <i><ArrowDownwardIcon className="featurs-icon-down"/></i>
                            <span>1.4-</span>

                        </div>
                        <span className='featurs-price'>$2,415</span>

                    </div>
                    <span className='featurs-sub'>compread to last month</span>
                </div>

            </div>

            <div className='featurs-wrapper'>
                <div className='featurs-container'>
                    <div className='featurs-title'>
                        <h3>Cost</h3>
                    </div>
                    <div className='featurs-range'>
                        <div className='featurs-info'>
                            <i><ArrowUpwardIcon  className="featurs-icon-up"/></i>
                            <span>2.4+</span>

                        </div>
                        <span className='featurs-price'>$2,415</span>

                    </div>
                    <span className='featurs-sub'>compread to last month</span>
                </div>

            </div>




        </div>






    );
}

export default Featurs;