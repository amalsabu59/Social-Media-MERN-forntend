import './closefriends.css'

function Closefriends( {user} ) {
  return (
    <li className="sidebarFriend">
    <img className='sidebarFriendImg' src={user.ProfilePicture} alt="" />
    <span className="sidebarFriendName">{user.username}</span>
  </li> 
  )
}

export default Closefriends