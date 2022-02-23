import './rightbar.css'
import { Users } from '../../dummyData';
import Online from '../online/Online';
function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className='birthdayImg' src="https://www.downloadclipart.net/large/birthday-gift-png-clipart.png" alt="" />
          <span className="birthdayText">
            <b>Jeff</b> and<b> 3 others</b> have birthday today
          </span>
        </div>
        {/* <img className='rightbarAd' src="https://i.pinimg.com/564x/11/66/38/116638d3f142cbd7cff7cab15c53045c.jpg" alt="" /> */}
        <img className='rightbarAd' src="https://edge.zivost.com/wp-content/uploads/2021/09/Cover.jpg" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ui className="rightbarFriendList">
         { Users.map((u)=> (
           < Online key={u.id} user={u} />
         ))}
        </ui>

      </div>
    </div>
  )
}

export default Rightbar