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
import { Link } from 'react-router-dom';
function SideBar() {
    return (
        <div className="sidebar">
            <div className='sidebar-wrapper'>
                <div className='sidebar-menu'>
                    <h3>داشبورد</h3>
                    <ul>
                        <Link to='/' className='link'>
                            <li className='active'>
                                <i><HomeIcon /></i>
                                <span>خانه</span>
                            </li>
                        </Link>
                        <Link className='link'>
                            <li>
                                <i><EqualizerIcon /></i>
                                <span>آنالیز</span>
                            </li>
                        </Link>
                        <Link className='link'>
                            <li>
                                <i><ShowChartIcon /></i>
                                <span>فروش</span>
                            </li>
                        </Link>

                    </ul>
                </div>

                <div className='sidebar-menu'>
                    <h3>لیست</h3>
                    <ul>
                        <Link to='/users' className='link'>
                            <li>
                                <i><PersonIcon /></i>
                                <span>کاربرها</span>
                            </li>
                        </Link>
                        <Link to='/newUser' className='link'>
                            <li>
                                <i><PersonAddIcon /></i>
                                <span>کاربر جدید</span>
                            </li>
                        </Link>
                        <Link className='link'>
                            <li>
                                <i><ProductionQuantityLimitsIcon /></i>
                                <span>محصولات</span>
                            </li>
                        </Link>

                        <Link className='link'>
                            <li>
                                <i><PaidIcon /></i>
                                <span>تراکنش ها</span>
                            </li>
                        </Link>
                        <Link className='link'>
                            <li>
                                <i><ReportIcon /></i>
                                <span>گزارش</span>
                            </li>
                        </Link>

                    </ul>
                </div>

                <div className='sidebar-menu'>
                    <h3>اعلانات</h3>
                    <ul>
                        <Link className='link'>
                            <li>
                                <i><EmailIcon /></i>
                                <span>ایمیل</span>
                            </li>
                        </Link>
                        <Link className='link'>
                            <li>
                                <i><CommentIcon /></i>
                                <span>نظرات</span>
                            </li>
                        </Link>

                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SideBar;