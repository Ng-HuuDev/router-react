import React, { useCallback, useEffect, useState } from "react";
import Card from "./Card";

/**
 * UseEffect: thay the cho cac lifeCircle method cua class component gom 3 chuc nang: componentDidMount, componentWillMount
 *
 * UseEffect(() = {}, [])
 *  // Tham so 1: callback function se duoc chay 1 hoac nhieu lan le thuoc vao tham so thu 2
 *  // Tham so 2: mang dependency, neu array rong => componentDidMount, neu array co gia tri thi khi gia tri thay doi thi  callback function se chay lai
 */
export default function UseEffect() {
  const [like, setLike] = useState(0);
  const [share, setShare] = useState(100);

  // uef
  useEffect(() => {
    console.log("useEffect");
  }, [like]);
  console.log("render");

  let handleUpLike = () => {
    setLike(like + 1);
  };

  let handleUpShare = useCallback(() => {
    setShare(share + 1);
  }, [share]);

  // useMemo
  // shallow compare / deep compare
  // shallow copy / deep copy
  return (
    <div>
      <h2>UseEffect</h2>
      <h3> {like} Like </h3>
      <button onClick={handleUpLike} className="btn btn-primary">
        Up Like
      </button>
      {<Card share={share} handleUpShare={handleUpShare} />}
    </div>
  );
}
