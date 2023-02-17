import PublicIcon from '@mui/icons-material/Public';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import './TopHeader.css'
function TopHeader() {
    return (
        <div className="Top-header">


            <div className="top-header-left">
                <h1 className='text-logo'>
                     برند لوگو ❤
                </h1>
            </div>

            <div className="top-header-right">
                <div className='icon-container'>
                    <NotificationsIcon />
                    <span className='icon-badge'>2</span>
                </div>
                <div className='icon-container'>
                    <PublicIcon />
                    <span className='icon-badge'>2</span>
                </div>
                <div className='icon-container'>
                    <SettingsIcon />
                </div>
                <img src='images/top-image.jpg' className='top-image' />
            </div>
        </div>
    );
}

export default TopHeader;