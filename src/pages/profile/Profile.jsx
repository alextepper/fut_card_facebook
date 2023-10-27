import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import FutCard from "../../components/futCard/FutCard";
import Footer from "../../components/footer/Footer";

export default function Profile() {
  const [user, setUser] = useState({});
  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_GENERAL_URI}/api/users?username=${username}`
      );
      setUser(res.data);
    };
    fetchUser();
  }, [username]);

  return (
    <div className="profileBody">
      <Topbar />
      <div className="profileWrapper">
        {/* <div className="profileSidebar">
          <UsersList />
        </div> */}
        <div className="profile">
          <FutCard user={user} />
        </div>
      </div>

      <Footer />
    </div>
  );
}
