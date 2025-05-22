import React, { useEffect, useState } from "react";
import './Editprof.css';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function EditProfile() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({username: '', email: '', age: '', contact: '' });

  useEffect(() => {
    axios.post(`http://localhost:4001/viewuserbyid/${id}`)
      .then(res => {
        const user = res.data.data;
        setData({
          name: user.username,
          email: user.email,
          age: user.age,
          contact: user.contact
        });
      })
      .catch(err => {
        console.error(err);
      });
  }, [id]);

  const updatedata = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleupdate = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:4001/updatedata/${id}`, data)
      .then(() => {
        alert("Profile updated successfully.");
        navigate("/viewprofile");
      })
      .catch(err => {
        console.error("Update failed:", err);
        alert("Failed to update profile.");
      });
  };

  return (
    <div className="Edit-prof">
      <div className="edit-main">
        <div className="Edit-box">
        <h2>Edit Profile</h2><br/><br/>
          <form onSubmit={handleupdate}>
            <table>
              <tb>
                <tr>
                  <td><label>Name</label></td>
                  <td><input type="text" name="username" value={data.name} onChange={updatedata} /><br/><br/></td>
                </tr>
                <tr>
                  <td><label>Email</label></td>
                  <td><input type="email" name="email" value={data.email} onChange={updatedata} /><br/><br/></td>
                </tr>
                <tr>
                  <td><label>Age</label></td>
                  <td><input type="number" name="age" value={data.age} onChange={updatedata} /><br/><br/></td>
                </tr>
                <tr>
                  <td><label>Contact</label></td>
                  <td><input type="text" name="contact" value={data.contact} onChange={updatedata} /><br/><br/></td>
                </tr>
              </tb>
            </table>
            <div className="button-group">
              <button type="button" className="edit-btn" onClick={() => navigate(-1)}>Cancel</button>
              <button type="submit" className="edit-btn1">Save Changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
