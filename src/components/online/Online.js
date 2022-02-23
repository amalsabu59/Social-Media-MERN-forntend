import './onine.css'

function Online( {user} ) {
  return (
    <li className="rightbarFriend">
    <div className="rightbarProfileContainer">
      <img className='rightbarProfileImg' src={user.ProfilePicture} alt="" />
      <span className="rightbarOnline"></span>
    </div>
    <span  className='rightbarUsername'>{user.username}</span>
  </li>
  )
}

export default Online