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
                        <span className='featurs-price'>$2,415</span>
                        <div className='featurs-info'>
                            <span>-11.4</span>
                            <i><ArrowDownwardIcon className="featurs-icon-down" /></i>


                        </div>


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
                        <span className='featurs-price'>$2,415</span>

                        <div className='featurs-info'>
                            <span>-1.4</span>
                            <i><ArrowDownwardIcon className="featurs-icon-down" /></i>


                        </div>

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
                        <span className='featurs-price'>$2,415</span>
                        <div className='featurs-info'>
                            <span>+2.4</span>
                            <i><ArrowUpwardIcon className="featurs-icon-up" /></i>


                        </div>


                    </div>
                    <span className='featurs-sub'>compread to last month</span>
                </div>

            </div>




        </div>






    );
}

export default Featurs;