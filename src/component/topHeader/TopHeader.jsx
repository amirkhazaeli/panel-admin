import PublicIcon from '@mui/icons-material/Public';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import './TopHeader.css'
function TopHeader() {
    return (
        <div className='Top-header'>
            <div className="Top-header-wrapper">
                <div className="top-header-right">
                    <h1 className='text-logo'>
                     سبز لرن ❤
                    </h1>
                </div>

                <div className="top-header-left">
                    <div className='icon-container'>
                        <i><NotificationsIcon style={{ fontSize: '35px' }} /></i>
                        <span className='icon-badge'>2</span>
                    </div>
                    <div className='icon-container'>
                        <i><PublicIcon style={{ fontSize: '35px' }} /></i>
                        <span className='icon-badge'>2</span>
                    </div>
                    <div className='icon-container'>
                        <i><SettingsIcon style={{ fontSize: '35px' }} /></i>
                    </div>
                    <img src='images/top-image.jpg' className='top-image' />
                </div>
            </div>
        </div>

    );
}

export default TopHeader;