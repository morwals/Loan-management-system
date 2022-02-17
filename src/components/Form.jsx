import React, { useState } from 'react'
import { Button, TextField } from "@mui/material";
const axios = require("axios");


export default function Form() {
    const [formData, setFormData] = useState({
        id:"",
        user_name: "",
        user_passward: "",
        email:"",
        address:""
      });
    const [gender,setGender]=useState("");

      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
        console.log(formData);
      };


  return (
    <div>
        <form
             onSubmit={(event) => {
                event.preventDefault();
                var data={
                    user_id:parseInt(formData.id),
                    user_name:formData.user_name,
                    user_passward:formData.user_passward,
                    email:formData.email,
                    gender:gender,
                    address:formData.address,
                    isAdmin:false
                }
                console.log(JSON.stringify(data));
                axios({
                  method: "post",
                  url: "http://localhost:8080/addUser",
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                  },
                  data: JSON.stringify(data),
                  success: window.alert("Added Successfully"),
                });
                window.location.href="http://localhost:3000/getUsers"
             }}
        >
                <TextField
                id="outlined-basic"
                label="Id"
                variant="outlined"
                name="id"
                value={formData.id}
                onChange={handleChange}
                required
                />
                <br></br>
                <hr></hr>
              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                required
                />
                <br></br>
                <hr></hr>
                 <TextField
                id="outlined-basic"
                label="Passward"
                variant="outlined"
                name="user_passward"
                value={formData.user_passward}
                onChange={handleChange}
                required
                />               
                 <br></br>
                 <hr></hr>

                 <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                />               
                 <br></br>
                 <hr></hr>
                <input type="radio" name="gender" value="Male" onClick={(e)=>{
                    setGender(e.target.value)
                }}/>
                <label htmlFor="gender">Male</label>
                <input type="radio" name="gender" value="Female" onClick={(e)=>{
                    setGender(e.target.value)
                }}/>
                <label htmlFor="gender">Female</label>
                <br></br>
                <hr></hr>
                <TextField
                id="outlined-basic"
                label="address"
                variant="outlined"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                />               
                 <br></br>
                 <hr></hr>
                 <Button
                variant="contained"
                color="success"
                style={{ width: "60%" }}
                type="submit"
              >
                SUBMIT
              </Button>
        </form>
    </div>
  )
}
