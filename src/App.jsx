import axios from "axios";
import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [data2, setData2] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    DOB: "",
    maritalStatus: "",
  });
  async function submit() {
    console.log(data);
    try {
      const resp = await axios.post(
        "https://cmpb-backend.onrender.com/api/v1/user/login",
        data,
        { withCredentials: true }
      );
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  }
  async function submit2() {
    console.log(data2);
    try {
      const resp = await axios.post(
        "http://localhost:4000/api/v1/profile/basic-details/create",
        data2,
        { withCredentials: true }
      );
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <div className="div1">
        <label htmlFor="">email</label>
        <input
          type="text"
          placeholder="email"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <label htmlFor="">password</label>
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button onClick={submit} type="submit">
          submit
        </button>
      </div>
      <div className="div2">
        <label htmlFor="">firstName</label>
        <input
          type="text"
          placeholder="firstName"
          onChange={(e) => setData2({ ...data, firstName: e.target.value })}
        />
        <label htmlFor="">lastName</label>
        <input
          type="text"
          placeholder="lastName"
          onChange={(e) => setData({ ...data, lastName: e.target.value })}
        />
        <label htmlFor="">gender</label>
        <input
          type="text"
          placeholder="gender"
          onChange={(e) => setData({ ...data, gender: e.target.value })}
        />
        <label htmlFor="">DOB</label>
        <input
          type="text"
          placeholder="DOB"
          onChange={(e) => setData({ ...data, DOB: e.target.value })}
        />
        <label htmlFor="">maritalStatus</label>
        <input
          type="text"
          placeholder="maritalStatus"
          onChange={(e) => setData({ ...data, maritalStatus: e.target.value })}
        />
        <button onClick={submit2} type="submit">
          submit
        </button>
      </div>
    </div>
  );
}

export default App;
