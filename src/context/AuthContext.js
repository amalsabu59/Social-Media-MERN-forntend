import { Children, createContext, useEffect, useReducer } from "react"
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {

    user: {


       _id: "621babb2b297db1758b5bac0",
        username : "Modi",
        email:"modi@modi.com",
        profilePicture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV9KimbujxWT0F3yYuvzT61PcYYg27QMRq5g&usqp=CAU",
        coverPicture: "",
        isAdmin:false,
        followers:[],
        followings:[]

},
    //  user:JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error:false
}

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer,INITIAL_STATE)

//  useEffect(()=>{
//         localStorage.setItem("user", JSON.stringify(state.user))
//       },[state.user])
    
    return (
        <AuthContext.Provider
        value={{
            user:state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}