// ProfilePage.js

import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const profileData = [
  {
    nama: "Pipin Dien L",
    nim: "21120121120025",
    genre :"Angsat",
    fotoUrl: "https://media.licdn.com/dms/image/D5603AQHLiaoN-mHZww/profile-displayphoto-shrink_800_800/0/1699877895644?e=1705536000&v=beta&t=nmQ1-Uyc7QPxafdlxedpfKFQ_pfkVAJqzRYtv3S7s60",
  },
];

function ProfilePage() {
  return (
    <div>
      <h1>Profile Pengguna</h1>
      <div className="profile-cards">
        {profileData.map((data, index) => (
          <Link to={`/profiledetail/${index}`} key={index}>
            <div className="profile-card">
              <img src={data.fotoUrl} alt={data.nama} />
              <h3>{data.nama}</h3>
              <p>{data.nim}</p>
              <p>{data.genre}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProfilePage;
