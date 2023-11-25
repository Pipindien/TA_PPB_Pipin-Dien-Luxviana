// ProfileDetail.js

import React from "react";
import { useParams } from "react-router-dom";
import "./index.css";

const profileData = [
  {
    nama: "Pipin Dien L",
    nim: "21120121120025",
    bio: "Adalah seorang mahasiswa yang sedang menempuh pendidikan di Universitas Diponegoro tepatnya di Fakultas Teknik Komputer angkatan 2021, dia sosok yang menyenangi belajar dan mencoba hal baru. Hobinya adalah menonton Drama Korea dan membaca novel. Pipin juga memiliki 2 ekor kucing yang sanagt lucu dan nakal yang bernama Ruby dan Ruci ",
    fotoUrl: "https://media.licdn.com/dms/image/D5603AQHLiaoN-mHZww/profile-displayphoto-shrink_800_800/0/1699877895644?e=1705536000&v=beta&t=nmQ1-Uyc7QPxafdlxedpfKFQ_pfkVAJqzRYtv3S7s60",
  },
];

function ProfileDetail() {
  const { id } = useParams();
  const profile = profileData[id];

  if (!profile) {
    return <p>Profile not found</p>;
  }

  return (
    <div>
      <h1>Profile Detail</h1>
      <div className="profile-card">
        <img src={profile.fotoUrl} alt={profile.nama} />
        <h3>{profile.nama}</h3>
        <p>{profile.nim}</p>
        <p>{profile.bio}</p>

      </div>
    </div>
  );
}

export default ProfileDetail;
