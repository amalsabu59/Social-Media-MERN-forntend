import './profile.css'
import Topbar from "../../../components/topbar/Topbar"
import Sidebar from "../../../components/sidebar/Sidebar"
import Feed from "../../../components/feed/Feed"
import Rightbar from "../../../components/rightbar/Rightbar"

function Profile() {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profilecover">
                        <img className='profileCoverImg' src="https://wallpaperaccess.com/full/2667331.jpg" alt="" />
                        <img className='profileUserImg' src="assets/person/1.jpg" alt="" />   
                        </div>
                        <div className="profileInfo">
                            <h4 className='profileInfoname'>Elon Musk</h4>
                            <span className="profileInfoDesc">hello hai I am Elon </span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile