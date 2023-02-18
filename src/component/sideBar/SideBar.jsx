import HomeIcon from '@mui/icons-material/Home';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import PaidIcon from '@mui/icons-material/Paid';
import ReportIcon from '@mui/icons-material/Report';
import EmailIcon from '@mui/icons-material/Email';
import CommentIcon from '@mui/icons-material/Comment';
import './SideBar.css';
function SideBar() {
    return (
        <div className="sidebar">
            <div className='sidebar-wrapper'>
                <div className='sidebar-menu'>
                    <h3>داشبورد</h3>
                    <ul>
                        <li className='active'>
                            <i><HomeIcon /></i>
                            <span>خانه</span>
                        </li>
                        <li>
                            <i><EqualizerIcon /></i>
                            <span>آنالیز</span>
                        </li>
                        <li>
                            <i><ShowChartIcon /></i>
                            <span>فروش</span>
                        </li>
                    </ul>
                </div>

                <div className='sidebar-menu'>
                    <h3>لیست</h3>
                    <ul>
                        <li>
                            <i><PersonIcon /></i>
                            <span>کاربر</span>
                        </li>
                        <li>
                            <i><PersonAddIcon /></i>
                            <span>کاربر جدید</span>
                        </li>
                        <li>
                            <i><ProductionQuantityLimitsIcon /></i>
                            <span>محصولات</span>
                        </li>
                        <li>
                            <i><PaidIcon /></i>
                            <span>تراکنش ها</span>
                        </li>
                        <li>
                            <i><ReportIcon /></i>
                            <span>گزارش</span>
                        </li>
                    </ul>
                </div>

                <div className='sidebar-menu'>
                    <h3>اعلانات</h3>
                    <ul>
                        <li>
                            <i><EmailIcon /></i>
                            <span>ایمیل</span>
                        </li>
                        <li>
                            <i><CommentIcon /></i>
                            <span>نظرات</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SideBar;