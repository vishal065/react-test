import axios from "axios";
import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [signup, setsignup] = useState({ email: "", phone: "", password: "" });
  async function submit() {
    console.log(data);
    try {
      const resp = await axios.post(
        "https://test-backend-wcw7.onrender.com/api/v1/user/login",
        data,
        { withCredentials: true }
      );
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  }
  async function submit2() {
    console.log(signup);
    try {
      const resp = await axios.post(
        "http://localhost:3000/api/v1/user/signup",
        signup,
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
        <h1>login </h1>
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
      {/* // */}
      <div className="div2">
        <h1>sign up</h1>
        <label htmlFor="">email</label>
        <input
          type="text"
          placeholder="email"
          onChange={(e) => setsignup({ ...signup, email: e.target.value })}
        />
        <label htmlFor="">phone</label>
        <input
          type="text"
          placeholder="phone"
          onChange={(e) => setsignup({ ...signup, phone: e.target.value })}
        />

        <label htmlFor="">password</label>
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setsignup({ ...signup, password: e.target.value })}
        />
        <button onClick={submit2} type="submit">
          submit
        </button>
      </div>
    </div>
  );
}

export default App;
