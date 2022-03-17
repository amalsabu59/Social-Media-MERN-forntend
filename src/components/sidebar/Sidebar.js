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
import IconButton from '@mui/material/IconButton';
import Closefriends from '../closeFriends/Closefriends';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';



function Sidebar() {

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([])
  const {user} = useContext(AuthContext)

  useEffect(() => {
    const getFriends = async () => {
      try{
          const friendList = await axios.get("/users/friends/"+user._id)
          setFriends(friendList.data)
      }catch(err){
          console.log(err)
      }
    }
    getFriends()
  }, [user])



  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <IconButton>
              <RssFeedIcon className='sidebarIcon' />
            </IconButton>
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <IconButton>
              <MarkChatUnreadIcon className='sidebarIcon' />
            </IconButton>
            <span className="sidebarListItemText">Chats</span>

          </li>
          <li className="sidebarListItem">
            <IconButton>
              <OndemandVideoIcon className='sidebarIcon' />
            </IconButton>
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <IconButton>
              <GroupsIcon className='sidebarIcon' />
            </IconButton>
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <IconButton>
              <BookmarksIcon className='sidebarIcon' />
            </IconButton>
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <IconButton>
              <HelpIcon className='sidebarIcon' />
            </IconButton>
            <span className="sidebarListItemText">Questions</span>
          </li>
          {/* <li className="sidebarListItem">
            <IconButton>
              <WorkOutlineIcon className='sidebarIcon' />
            </IconButton>
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <IconButton>
              <EventIcon className='sidebarIcon' />
            </IconButton>
            <span className="sidebarListItemText">Event</span>
          </li>
          <li className="sidebarListItem">
            <IconButton>
              <SchoolIcon className='sidebarIcon' />
            </IconButton>
            <span className="sidebarListItemText">Course</span>
          </li> */}


        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className='sidebarHr'/>
        <ul className="sidebarFriendsList">
        <h4 className='rightbarTitle'>User Friends</h4>
        {friends.map((u)=> (
            <Closefriends key={u.id} friends={u}/>
          ))}
          
        
        </ul>
      </div>
    </div>
  )
}

export default Sidebar