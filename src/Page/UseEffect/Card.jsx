import React, { memo, useEffect } from "react";

function Card({ share, handleUpShare }) {
  useEffect(() => {
    console.log("Card did Mount");
    return () => {
      // function nay se chay khi component bi unmount
      console.log("Card will Mount");
    };
  }, []);
  console.log("Component con render");
  return (
    <div className="bg-warning text-white p-3">
      <h2>Card</h2>
      <h3> {share} Share </h3>
      <button onClick={handleUpShare} className=" btn btn-primary">
        {" "}
        Up Share{" "}
      </button>
    </div>
  );
}

export default memo(Card);
// memo ~ PureComponent
