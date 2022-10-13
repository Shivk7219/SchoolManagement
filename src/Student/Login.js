
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();
    const [UserName, setUserName] = useState("");
    const [Password, setPassword] = useState("");
   
    // const history = useHistory();
    const handleUserName = (value) => {
        
        setUserName(value);
    }
    const handlePassword = (value) => {
        setPassword(value);
    }

    // const navigate = useNavigate();
    const handleUser = (evt) => {
     debugger;
        evt.preventDefault();
        if(UserName==="" && Password === ""){
            alert("User Name and Password required")
        }
     
        // console.log(evt)
    
        axios.post("http://localhost:63561/Api/student/StudentLogin", {
            UserName: UserName,
            Password: Password,
        }).then((response) => {
            if(response.data==="Student is Valid")
                navigate("/dashboard",{state:{UserName:UserName}})
            else
                alert(response.data)

        }).catch((error)=>{
            console.log(error);
        })

    };
    const handleAdmin=(evt)=>{
       
        if(UserName==="" && Password === ""){
            alert("User Name and Password required")
        }
     
        axios.post("http://localhost:63561/Api/admin/AdminLogin",{
            UserName: UserName,
            Password: Password,
        }).then((response)=>{
            if(response.data==="Admin is Valid")
                navigate("/dashboard");
            else
                alert(response.data)
          
            }
            
        )
        evt.preventDefault();
    } ;
    
   

    return (
        <>

            <div className="navbar navbar-light bg-light">
                <h1 className="navbar-brand">
                    Welcome to School
               </h1>
            </div>



            <div className="container login-container">
                <div className="row">
                    <div className="col-md-6 login-form-1">
                        <h3>Login For Student</h3>
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your UserName *" onChange={(e) => handleUserName(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Your Password *" onChange={(e) => handlePassword(e.target.value)} />
                            </div>
                            <div className="form-group">

                                <button className="btnSubmit" onClick={handleUser}>Login</button>
                            </div>

                        </form>
                    </div>
                    <div className="col-md-6 login-form-2">
                        <h3>Login for Admin</h3>
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your UserName *" onChange={(e) => handleUserName(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Your Password *" onChange={(e) => handlePassword(e.target.value)} />
                            </div>
                            <div className="form-group">

                                <button className="btnSubmit" onClick={handleAdmin}>Login</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

            <style>
                {`
            .login-container{
                margin-top: 5%;
                margin-bottom: 5%;
            }
            .login-form-1{
                padding: 5%;
                box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);
            }
            .login-form-1 h3{
                text-align: center;
                color: #333;
            }
            .login-form-2{
                padding: 5%;
                background: #0062cc;
                box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);
            }
            .login-form-2 h3{
                text-align: center;
                color: #fff;
            }
            .login-container form{
                padding: 10%;
            }
            .btnSubmit
            {
                width: 50%;
                border-radius: 1rem;
                padding: 1.5%;
                border: none;
                cursor: pointer;
            }
            .login-form-1 .btnSubmit{
                font-weight: 600;
                color: #fff;
                background-color: #0062cc;
            }
            .login-form-2 .btnSubmit{
                font-weight: 600;
                color: #0062cc;
                background-color: #fff;
            }
            .login-form-2 .ForgetPwd{
                color: #fff;
                font-weight: 600;
                text-decoration: none;
            }
            .login-form-1 .ForgetPwd{
                color: #0062cc;
                font-weight: 600;
                text-decoration: none;
            }
            
            `}
            </style>

        </>
    )


}

export default Login;