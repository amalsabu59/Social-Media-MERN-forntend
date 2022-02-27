import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from "react-router-dom"
import { useContext } from "react";
import {AuthContext} from '../../context/AuthContext'
function Topbar() {
    const {user} = useContext(AuthContext)
  return (
    <div className="topBarContainer">
        <div className="topbarLeft">
            <Link to="/" style={{textDecoration:"none"}}>
            <span className="logo">HelloClub</span>
            </Link>
        </div>
        <div className="topbarCenter">
            <div className="searchBar">
                    <SearchIcon className="searchIcon"/>
                <input placeholder="search" className="searchInput" />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarLinks">Homepage</span>
                <span className="topbarLinks">timeline</span>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <PersonIcon/>
                <span className="topbarIconBadge">1</span>

                </div>
                <div className="topbarIconItem">
                    <ForumIcon/>
                <span className="topbarIconBadge">2</span>

                </div>
                <div className="topbarIconItem">
                    <NotificationsIcon/>
                <span className="topbarIconBadge">1</span>

                </div>
            </div>
            <Link to={`/profile/${user.username}`}>
            <img src={user.profilePicture} alt="" className="topbarImage"/>
            </Link>
        </div>
    </div>
  )
}

export default Topbar