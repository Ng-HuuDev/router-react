import axios from "axios";
import React, { useEffect, useState } from "react";

export default function HomePage() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    // goi api lay danh sach phim khi load trang
    axios({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      method: "GET",
      headers: {
        TokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlanMgNDYiLCJIZXRIYW5TdHJpbmciOiIxOS8wNi8yMDI1IiwiSGV0SGFuVGltZSI6IjE3NTAyOTEyMDAwMDAiLCJuYmYiOjE3MzE3NzY0MDAsImV4cCI6MTc1MDQzODgwMH0.NiwsCoM24UhVKeefzKjIbEhJLvBmH4qP9b124je1Ux8",
      },
    })
      .then((result) => {
        setMovie(result.data.content);
        console.log("result", result);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);
  console.log("movie", movie);
  return (
    <div className="row">
      {movie.map((movie) => (
        <div key={movie.maPhim} className="col-2">
          <img src={movie.hinhAnh} className="w-100" />
          <p> {movie.tenPhim} </p>
        </div>
      ))}
    </div>
  );
}
