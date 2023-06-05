import react from "react";
import googlelogo from "./fruits/google.png"
import Navbar from './Navbar'
import {useNavigate} from "react-router-dom"
import {useDispatch } from "react-redux"
import {GoogleAuthProvider,getAuth,signInWithPopup,signOut} from "firebase/auth"
import { ToastContainer, toast } from "react-toastify";
import { addUser, removerUser } from "./redux/bazarSlice";

const Login = () => {
    const dispatch = useDispatch ()
    const navigate = useNavigate()
    const auth =getAuth()
    const provider = new GoogleAuthProvider();
    const handleGoogleLogin = (e) => {
        e.preventDefault()
        console.log(auth)
        signInWithPopup(auth,provider).then((result)=>{
            const user = result.user;
            dispatch(addUser({
                _id:user.uid,
                name:user.displayName,
                email: user.email,
                image: user.photoURL,

            })
            );
            setTimeout(()=>{
                navigate("/")

            },1500)
        })
      
    };
    const handleSignOut =() =>{
        signOut(auth).then(()=>{
            toast.success("Log Out Successfully")
            dispatch(removerUser())
        }).catch((error) =>{
            console.log(error)

        })
    }

    
    return(
       
        <>
        
        <Navbar/>
        <div className="w-full flex flex-col items-center justify-center gap-10 py-20">
            <div className="w-full flex items-center justify-center gap-10">
            <div onClick={handleGoogleLogin} className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300">
                <img className="w-8" src={googlelogo} alt="googleLogo"/>
                <span className="text-sm text-gray-900">Sign in with Google</span>
                </div>
                <button onClick={handleSignOut} className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300">Sign Out</button>
            </div>
            <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnclick
        rtl={false}
        pauseOnFocusloss
        draggable
        theme="dark"
      />
        </div>
        </>
    );
};

export default Login;