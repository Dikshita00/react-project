import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginDemo() {
  const navigate = useNavigate();
  const [uname, setUname] = useState("default");
  const [pass, setPass] = useState("");
  const [msg, setMsg] = useState("");

  function check(e) {
    e.preventDefault();
    if (validate()) {
      navigate("/home");
    } else {
      setMsg("❌ Invalid credentials");
    }
  }

  useEffect(() => {
    console.log("Login page loaded");
  }, []);

  function validate() {
    return uname === "a" && pass === "a";
  }

  return (
    <div style={{ padding: 150, backgroundColor: "cyan" }}>
      <form onSubmit={check}>
        <label>
          Enter UserName:
          <input
            type="text"
            value={uname}
            onChange={(e) => setUname(e.target.value)}
          />
        </label>
        <br />
        <label>
          Enter Password:
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
        <br />
        <span>{msg}</span>
      </form>
    </div>
  );
}
