import './rightbar.css'

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
          <li className="rightbarFriend">
            <div className="rightbarProfileContainer">
              <img className='rightbarProfileImg' src="assets/person/3.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className=''>Jeff</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileContainer">
              <img className='rightbarProfileImg' src="http://localhost:3000/assets/person/4.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className=''>Vitalic</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileContainer">
              <img className='rightbarProfileImg' src="assets/person/1.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className=''>Musk</span>
          </li>
        </ui>

      </div>
    </div>
  )
}

export default Rightbar