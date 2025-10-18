import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Profile() {
  const [userData, setUserData] = useState({ name: "", url: "", email: "" });
  const location = useLocation();

  useEffect(() => {
    if (location.state?.name && location.state?.url && location.state?.email) {
      localStorage.setItem("userData", JSON.stringify(location.state));
      setUserData(location.state);
    } else {
      const saved = localStorage.getItem("userData");
      if (saved) setUserData(JSON.parse(saved));
    }
  }, [location.state]);
  return (
    <div className="profileContainer">
      <img className="userDataImg" src={userData.url} alt="" />
      <h1 className="userDataName">{userData.name}</h1>
      <h3 className="userDataEmail">{userData.email}</h3>
    </div>
  );
}

export default Profile;
