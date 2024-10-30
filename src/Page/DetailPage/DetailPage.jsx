import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function DetailPage() {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState(undefined);
  console.log("🚀 ~ DetailPage ~ movieId:", movieId);

  useEffect(() => {
    axios({
      url: `https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${movieId}`,
      method: "GET",
      headers: {
        TokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlanMgNDYiLCJIZXRIYW5TdHJpbmciOiIxOS8wNi8yMDI1IiwiSGV0SGFuVGltZSI6IjE3NTAyOTEyMDAwMDAiLCJuYmYiOjE3MzE3NzY0MDAsImV4cCI6MTc1MDQzODgwMH0.NiwsCoM24UhVKeefzKjIbEhJLvBmH4qP9b124je1Ux8",
      },
    })
      .then((response) => {
        const result = response.data.content;
        setMovieDetail(result);
        console.log("🚀 ~ useEffect ~ response:", response);
      })
      .catch((err) => {
        console.log("🚀 ~ useEffect ~ err:", err);
        return {};
      });
  }, []);
  return (
    <div>
      DetailPage
      <h1> {movieDetail.tenPhim} </h1>
      <img
        src={movieDetail.biDanh}
        style={{ width: 300, height: 400, objectFit: "cover" }}
      />
    </div>
  );
}
