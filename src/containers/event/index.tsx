import React, { useEffect } from "react";
import "./index.scss";

const Event = () => {
  // useEffect(() => {
  //   const parentClick = e => {
  //     console.log("parent");
  //   };
  //   const ducomentClick = e => {
  //     console.log("ducomentClick");
  //   };
  //   const childrenClick = e => {
  //     console.log("childrenClick");
  //   };
  //   document.getElementById("parent").addEventListener("click", parentClick);
  //   document
  //     .getElementById("children")
  //     .addEventListener("click", childrenClick);
  //   document.addEventListener("click", ducomentClick);
  //   document.body.addEventListener("click", ducomentClick);
  //   return () => {
  //     document
  //       .getElementById("parent")
  //       .removeEventListener("click", parentClick);
  //     document.removeEventListener("click", ducomentClick);
  //     document
  //       .getElementById("children")
  //       .removeEventListener("click", childrenClick);
  //     document.body.removeEventListener("click", () => {
  //       console.log("body click");
  //     });
  //   };
  // }, []);
  return (
    <div
      onClick={() => {
        // console.log("react parent click");
      }}
      id="parent"
      className="parent"
    >
      <div
        id="children"
        onClick={() => {
          // console.log("react children click");
        }}
      >
        test
      </div>
    </div>
  );
};

export default Event;
