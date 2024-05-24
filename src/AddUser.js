import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        console.log(name, email);
        const obj ={name, email};
        e.preventDefault();

        fetch('http://localhost:4000/details', {
            method:"post",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(obj)
        })
        .then((res)=>{
            if(res){
                alert("student added..!");
                navigate('/');
            }
        })

        
    }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div>
              <h1>JSON Crud</h1>
            </div>
            <div>
              <Link to="/add-user" className="btn btn-warning my-2">
                Add New Students
              </Link>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e)=>{setName(e.target.value)}}
                  className="form-control"
                  id=""
                  placeholder="Enter Name"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  value={email}
                  onChange={(e)=>{setEmail(e.target.value)}}
                  className="form-control"
                  id=""
                  placeholder="Enter Email"
                />
              </div>

              <div className="mb-3">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
