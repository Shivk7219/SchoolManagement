import React from 'react';

import axios from "axios";
import { useState,useEffect } from "react";
import { Link,useLocation} from "react-router-dom";

const Dashboard=()=>
{
    const [appstudent, setAppStudent] = useState({});
    const location = useLocation();



    useEffect(() => {
        axios.get(`http://localhost:63561/Api/student//GetStudent/${location.state.UserName}`)
            .then((res) => {
                setAppStudent(res.data);
                console.log(res.data);

            })
            .catch((err) => {
                alert("Data not found")
                console.log(err.message)
            })

    }, [])


    //setuserName("mayur")
    const { id, FirstName, LastName, Class, DOB, Age, Gender, MobileNo1, MobileNo2 ,Adress} = appstudent;
    return(
        <>
        <div class="navbar navbar-light bg-light justify-content-between">
            <a class="navbar-brand"></a>
            <form class="form-inline">
                <Link to="/">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Home</button>
                </Link>
            </form>
        </div>



        <div className="container bootstrap snippets bootdey">
            <div className="panel-body inf-content">
                <div className="row">
                    <div className="col-md-4">
                        <img alt="" swidth="600px;" title="" className="img-circle img-thumbnail isTooltip" src="https://bootdey.com/img/Content/avatar/avatar7.png" data-original-title="Usuario" />

                    </div>
                    <div className="col-md-6">
                        <strong>Information</strong>
                        <div className="table-responsive">
                            <table className="table table-user-information">
                                <tbody>
                                    <tr>
                                        <td>
                                            <strong>
                                                <span className="glyphicon glyphicon-asterisk text-primary"></span>
                                                Student ID
                       </strong>
                                        </td>
                                        <td className="text-primary">
                                            {id}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>
                                                <span className="glyphicon glyphicon-user  text-primary"></span>
                                                FirstName
                       </strong>
                                        </td>
                                        <td className="text-primary">
                                            {FirstName}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>
                                                <span className="glyphicon glyphicon-cloud text-primary"></span>
                                                LastName
                       </strong>
                                        </td>
                                        <td className="text-primary">
                                            {LastName}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <strong>
                                                <span className="glyphicon glyphicon-bookmark text-primary"></span>
                                                Class
                       </strong>
                                        </td>
                                        <td className="text-primary">
                                            {Class}
                                        </td>
                                    </tr>


                                    <tr>
                                        <td>
                                            <strong>
                                                <span className="glyphicon glyphicon-eye-open text-primary"></span>
                                                DOB
                       </strong>
                                        </td>
                                        <td className="text-primary">
                                            {DOB}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>
                                                <span className="glyphicon glyphicon-envelope text-primary"></span>
                                                Age
                       </strong>
                                        </td>
                                        <td className="text-primary">
                                            {Age}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>
                                                <span className="glyphicon glyphicon-calendar text-primary"></span>
                                                Gender
                       </strong>
                                        </td>
                                        <td className="text-primary">
                                            {Gender}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>
                                                <span className="glyphicon glyphicon-calendar text-primary"></span>
                                                MobileNo1
                       </strong>
                                        </td>
                                        <td className="text-primary">
                                            {MobileNo1}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>
                                                <span className="glyphicon glyphicon-calendar text-primary"></span>
                                                MobileNo2
                       </strong>
                                        </td>
                                        <td className="text-primary">
                                            {MobileNo2}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>
                                                <span className="glyphicon glyphicon-calendar text-primary"></span>
                                                Adress
                       </strong>
                                        </td>
                                        <td className="text-primary">
                                            {Adress}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <style>
            {`
   .inf-content{
       border:1px solid #DDDDDD;
       -webkit-border-radius:10px;
       -moz-border-radius:10px;
       border-radius:10px;
       box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.3);
       margin-top: 50px;
   }		
   `}
        </style>

        <div className="col-4">
            <form className="form form-group form-danger">
                {/* <input className="form-control mt-3" type="number" id="uid" name="uid" 
                       onChange={handleInput} placeholder="Enter your uid"></input> */}

                {/* <input type="text"  ></input> */}
                {/* <input className="form-control mt-3" type="submit" id="submit" name="submit" value="submit"
                       onClick={submitGetUserById}></input> */}
            </form></div>
    </>
    )
};
export default Dashboard