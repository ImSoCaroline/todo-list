import React from "react";
import style from "./profile.css";

const Profile = ({ items }) => {
  return (
    <div className={style.profile}>
      {/* <h3 className={style.user}>User: {items.data}</h3>
      <img src={items.img} alt="gatito" className={style.img} /> */}
    </div>
  );
};

export default Profile;
