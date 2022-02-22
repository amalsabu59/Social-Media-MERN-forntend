import './share.css'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

function Share() {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img className='shareProfileImg' src="assets/person/1.jpg" alt="" /> 
                <input placeholder='Whats in your mind' className='shareInput' />
            </div>
            <hr className='shareHr' />
            <div className="shareBottom">
                <div className="shareOptions">
                <div className="shareoption">
                    <PermMediaIcon htmlColor='tomato' className='shareIcon'/>
                    <span className='shareOptionText'>Photo or Video</span>
                </div>
                <div className="shareoption">
                    <LabelIcon htmlColor='blue' className='shareIcon'/>
                    <span className='shareOptionText'>Tags</span>
                </div>
                <div className="shareoption">
                    <RoomIcon htmlColor='green' className='shareIcon'/>
                    <span className='shareOptionText'>Location</span>
                </div>
                <div className="shareoption">
                    <EmojiEmotionsIcon htmlColor='goldenrod' className='shareIcon'/>
                    <span className='shareOptionText'>Feelings</span>
                </div>
            </div>
            <button className="shareButton" >Share</button>
        </div>
        </div>
    </div>
  )
}

export default Share