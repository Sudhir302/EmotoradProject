import "./Navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';


function Navbar(){
    return(
        <div id="navbar">
            <h3>Dashboard</h3>
            <div id="search-notification">
                <input type="search" name="search" id="search" placeholder="search"/>
                <SearchIcon />
                <NotificationsNoneIcon />
                <div id="img">
                    <img src="/image/profile.jpg" alt="img"/>
                </div>
            </div>
            
        </div>
    )
}

export default Navbar;