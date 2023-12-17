'use client'
import { AuthContext } from "@/providers/authContext";
import { redirect, useRouter } from "next/navigation";
import { useContext, useState } from "react";


const Login = () => {

  const [logins, setLogins] = useState({username: "", password: ""})
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  const router = useRouter()

  const onSubmittingData = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:300/login', {
      mode: "cors",
      method: "POST",
       body: JSON.stringify(logins),
      headers: {
        withCredentials: true,
        "Content-Type": "application/json",
      },
    });
    const user = await response.json();
    if(user.token){
      setCurrentUser(user);
      router.push('/patchjson')

    }

  };
  return (
    <div className="container">
      <div className="text">Login</div>
      <form onSubmit={onSubmittingData}>
        <div className="form-row">
          <div className="input-data">
            <input
              type="text"
              name="username"
              required
              onChange={(e) =>
                setLogins({ ...logins, username: e.target.value })
              }
            />
            <div className="underline"></div>
            <label for="">UserName</label>
          </div>
          <div className="input-data">
            <input
              type="password"
              name="password"
              onChange={(e) =>
                setLogins({ ...logins, password: e.target.value })
              }
              required
            />
            <div className="underline"></div>
            <label for="">password</label>
          </div>
        </div>
        <div className="form-row submit-btn">
          <div className="input-data">
            <div className="inner"></div>
            <input type="submit" value="submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
