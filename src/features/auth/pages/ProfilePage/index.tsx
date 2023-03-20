import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileWrapper from "./styled";

const ProfilePage = () => {
  const [userProfile, setUserProfile] = useState<any>();
  const navigate = useNavigate();
  const getProfileUser = () => {
    let userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      setUserProfile(JSON.parse(userInfo));
    }
  };
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  useEffect(() => {
    getProfileUser();
  }, []);
  return (
    <ProfileWrapper>
      <div className="profile-container">
        <div className="profile-title">Profile</div>
        <div className="profile-content">
          <div className="profile-col">
            <div className="profile-label">username:</div>
            <div className="profile-info">{userProfile?.username}</div>
          </div>
          <div className="profile-col">
            <div className="profile-label">gender:</div>
            <div className="profile-info">{userProfile?.gender}</div>
          </div>
          <div className="profile-col">
            <div className="profile-label">role:</div>
            <div className="profile-info">{userProfile?.role}</div>
          </div>
          <div className="profile-col">
            <div className="profile-label">area:</div>
            <div className="profile-info">{userProfile?.area}</div>
          </div>
        </div>
        <div className="profile-line"></div>
        <div className="profile-functions">
          <Button>Edit Info</Button>
          <Button onClick={logout}>Logout</Button>
        </div>
      </div>
    </ProfileWrapper>
  );
};

export default ProfilePage;
