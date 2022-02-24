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
                        <img className='profileCoverImg' src="https://newwallpapershd.com/wp-content/uploads/2014/04/BMW-Cars-facebook-cover-photos-2014-Collection-4.jpg" alt="" />
                        <img className='profileUserImg' src="https://m.economictimes.com/thumb/msid-80095660,width-1200,height-900,resizemode-4,imgsize-601228/elon-musk-is-the-worlds-second-richest-person-with-an-estimated-net-worth-of-158-billion-.jpg" alt="" />   
                        </div>
                        <div className="profileInfo">
                            <h4 className='profileInfoname'>Elon Musk</h4>
                            <span className="profileInfoDesc">hello hai I am Elon </span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile