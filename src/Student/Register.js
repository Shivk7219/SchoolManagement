
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Register = () => {
  

  const [FName, setFirstName] = useState("");
  const [LName, setLastName] = useState("");
  const [standard, setClass] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNo1, setPhoneNo1] = useState("");
  const [phoneNo2, setPhoneNo2] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDOB] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  const handleSubmit = (e) => {
    
    e.preventDefault();
    axios.post("http://localhost:63561/Api/student/Register", {
      
      FirstName: FName,
      LastName: LName,
      Class: standard,
      Gender: gender,
      MobileNo1: phoneNo1,
      MobileNo2: phoneNo2,
      Adress: address,
      DOB: dob,
      Password: password,

    }).then(() => {
      history("/dashboard");
    })

  };

  return (
    <>
      <div className="container-fluid1">

        <div className="row justify-content-md-center">
          <div className="col col-md-2"></div>

          <div className="col-md-6">

            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setFirstName(e.target.value)}
            />


            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setLastName(e.target.value)}
            />


            <label className="form-label">Class</label>
            <input
              type="text" 
              className="form-control"
              onChange={(e) => setClass(e.target.value)}
            />


            <label className="form-label">Gender</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setGender(e.target.value)}
            />


            <label className="form-label">PhoneNo1</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setPhoneNo1(e.target.value)}
            />

            <label className="form-label">PhoneNo2</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setPhoneNo2(e.target.value)}
            />

            <label className="form-label">Address</label>
            <input
              type="text"
              className="form-control"

              onChange={(e) => setAddress(e.target.value)}
            />

            <label className="form-label">Date of Birth</label>
            <input
              type="text"
              className="form-control" placeholder={"yyyy-mm-dd"}
              onChange={(e) => setDOB(e.target.value)}
            />

            <label className="form-label">Pasword</label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />


            <center>
              <br></br>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Submit
            </button>
            </center>
           

          </div>
          <div className="col col-md-3"></div>



        </div>

      </div >


    </>
  );
};
export default Register;