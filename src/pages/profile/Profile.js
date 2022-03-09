import './profile.css'
import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom"
import { AuthContext } from '../../context/AuthContext'
import UploadFileIcon from '@mui/icons-material/UploadFile';
import IconButton from '@mui/material/IconButton';




function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const{user: currentUser, dispatch} = useContext(AuthContext)
    const [update, setUpdate] = useState(null)
    const [file, setFile] = useState(null)
    const [cover, setCover] = useState(null)
    // const userId = useParams().UserId
    console.log(cover);
    const submitHandler = async (e) => {
         e.preventDefault()
         const Updated = {
            userId :user._id,
        //    profilePicture: profilePicture.current.value
        }
        if(file){
            const data = new FormData();
            const fileName = Date.now() + file.name
            data.append("name", fileName)
            data.append("file", file)
            Updated.profilePicture = fileName
            // console.log(newPost)

            try{
                await axios.post("/uploaddp",data)
            }catch(err) {
                console.log(err)
            }
        

        }else {
            const data = new FormData();
            const fileName = Date.now() + cover.name
            data.append("name", fileName)
            data.append("file", cover)
            Updated.coverPicture = fileName
            // console.log(newPost)

            try{
                await axios.post("/uploaddp",data)
            }catch(err) {
                console.log(err)
            }
        }

        try {
           await axios.put("/users/"+currentUser._id, Updated)
          window.location.reload()
        } catch(err){

        }
    }

  console.log(file);
    
    const [user, setUser] = useState({})
     const username = useParams().username

  
     

    useEffect(() => {
        const fetchUser = async () => {
          const res = await axios.get(`/users?username=${username}`)
          setUser(res.data)
            
        }
       fetchUser()
      }, [username])
       
console.log(PF + user.profilePicture,"aaaaaa");
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profilecover">
                        <img className='profileCoverImg'   src={user.coverPicture? PF + user.coverPicture: PF + "noCover.png"}  alt="" />
                       
                        {user.username === currentUser.username && (
                               <IconButton> <UploadFileIcon fontSize='small' className='upload_icon' onClick={setUpdate} /> </IconButton >  
                             )}
                      
                        
                        {update ?  
                        <>
                        <form onSubmit={submitHandler} >
                        <hr/>
                        <label for="avatar">Choose a Cover picture:</label>
                        <input  type="file" name="" id="file" accept='.png,.jpeg,.jpg' onChange={e=>setCover(e.target.files[0])}/>
                        <hr/>
                        <label for="avatar">Choose a Profile picture:</label>
                        <input  type="file" name="" id="file" accept='.png,.jpeg,.jpg' onChange={e=>setFile(e.target.files[0])}/>
                        <button  type='submit' >update</button>
                        </form>
                         </>: <h1> </h1>}
                        

                        <img className='profileUserImg'   src={user.profilePicture ? PF + user.profilePicture : PF + "noAvatar.png" } alt="" />   
                        </div>
                        <div className="profileInfo">
                            <h4 className='profileInfoname'>{user.username}</h4>
                            <span className="profileInfoDesc">{user.desc} </span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed username ={username}/>
                        <Rightbar user={user} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile