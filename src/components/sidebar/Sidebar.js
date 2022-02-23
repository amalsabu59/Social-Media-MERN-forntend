import './sidebar.css'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HelpIcon from '@mui/icons-material/Help';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import { Users } from '../../dummyData';
import Closefriends from '../closeFriends/Closefriends';



function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
              <RssFeedIcon className='sidebarIcon'/>
              <span className="sidebarListItemText">feed</span>
          </li>
          <li className="sidebarListItem">
              <MarkChatUnreadIcon className='sidebarIcon'/>
              <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
              <OndemandVideoIcon className='sidebarIcon'/>
              <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
              <GroupsIcon className='sidebarIcon'/>
              <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
              <BookmarksIcon className='sidebarIcon'/>
              <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
              <HelpIcon className='sidebarIcon'/>
              <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
              <WorkOutlineIcon className='sidebarIcon'/>
              <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
              <EventIcon className='sidebarIcon'/>
              <span className="sidebarListItemText">Event</span>
          </li>
          <li className="sidebarListItem">
              <SchoolIcon className='sidebarIcon'/>
              <span className="sidebarListItemText">Course</span>
          </li>
        

        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className='sidebarHr'/>
        <ul className="sidebarFriendsList">
        {Users.map((u)=> (
            <Closefriends key={u.id} user={u}/>
          ))}
          

        </ul>
      </div>
    </div>
  )
}

export default Sidebar