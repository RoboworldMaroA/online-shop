import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { registerUser } from "../../features/authSlice";

const  Register = () => {

    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    console.log(auth);

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })

    // console.log("user:",user);
    const handleSubmit = (e) =>{
        e.preventDefault();
        // console.log("welcome in submit function");
        dispatch(registerUser(user));
    }

    return (<>
    <form onSubmit = {handleSubmit}> 
        <h2>Register</h2>
        <input type="text" placeholder="name"
        onChange={(e) => setUser({...user, name: e.target.value})}
        /> 
        <input type="email" placeholder="email"
          onChange={(e) => setUser({...user, email: e.target.value})}
        /> 
        <input type="password" placeholder="password"
          onChange={(e) => setUser({...user, password: e.target.value})}
        />
        <button>
        {auth.registerStatus === "pending" ? (
        <p>"Submitting"</p>) :
        "Register"}
        </button>
        {/* Display if error */}
        {auth.registerStatus === "rejected" ? (
        <p>{auth.registerError}</p>) :
        null}
    </form>
    
    
    </>  );
}
 
export default Register ;