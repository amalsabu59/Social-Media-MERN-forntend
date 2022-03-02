import './share.css'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import CancelIcon from '@mui/icons-material/Cancel';

function Share() {
    const {user} = useContext(AuthContext)
    const desc = useRef()
    const [file, setFile] = useState(null)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const submitHandler = async (e) => {
        e.preventDefault()
        const newPost = {
            userId :user._id,
            desc: desc.current.value
        }

        if(file){
            const data = new FormData();
            const fileName = Date.now() + file.name
            data.append("name", fileName)
            data.append("file", file)
            newPost.img = fileName
            console.log(newPost)

            try{
                await axios.post("./upload",data)
            }catch(err) {
                console.log(err)
            }
        

        }

        try {
           await axios.post("/posts",newPost)
           window.location.reload()
        } catch(err){

        }
    }


  return (
      <div className='share'>
          <div className="shareWrapper">
              <div className="shareTop">
                  <img className='shareProfileImg' src={user ? user.profilePicture : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"} alt="" />
                  <input placeholder={'Whats in your mind ' + user.username + " ?"} className='shareInput' ref={desc}/>
              </div>
              <hr className='shareHr' />
              {file && (
          <div className="shareImgContainer">
            <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
            <CancelIcon className="shareCancelImg" onClick={() => setFile(null)} />
          </div>
        )}
              <div className="shareBottom">
                    <form className="shareOptions" onSubmit={submitHandler}>
                        <label htmlFor='file' className="shareoption">
                            <PermMediaIcon htmlColor='tomato' className='shareIcon' />
                            <span className='shareOptionText'>Photo or Video</span>
                            <input style={ { display:"none"} } type="file" name="" id="file" accept='.png,.jpeg,.jpg' onChange={e=>setFile(e.target.files[0])}/>
                        </label>
                        <div className="shareoption">
                            <LabelIcon htmlColor='blue' className='shareIcon' />
                            <span className='shareOptionText'>Tags</span>
                        </div>
                        <div className="shareoption">
                            <RoomIcon htmlColor='green' className='shareIcon' />
                            <span className='shareOptionText'>Location</span>
                        </div>
                        <div className="shareoption">
                            <EmojiEmotionsIcon htmlColor='goldenrod' className='shareIcon' />
                            <span className='shareOptionText'>Feelings</span>
                        </div>

                        <button className="shareButton" type='submit'>Share</button>
                </form>
                


            </div>
        </div>
      </div >
  )
}

export default Share;