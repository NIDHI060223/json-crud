import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [s, setS] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/details")
      .then((res) => {
        return res.json();
		console.log("git check")
      })
      .then((data) => {
        setS(data);
      });
  }, []);

  return (
    <div>
      Home
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div>
              <h1>JSON Crud</h1>
            </div>
            <div>
              <Link to="/add-user" className="btn btn-warning my-2">Add New Students</Link>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                {s && s.map((v) => (
                    <tr key={v.id}>
                      <th scope="row">{v.id}</th>
                      <td>{v.name}</td>
                      <td>{v.email}</td>
                      <td>
                        <button className="btn btn-info">View</button>
                        <button className="btn btn-success mx-3">Edit</button>
                        <button className="btn btn-danger">Delete</button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
