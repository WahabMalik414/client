import React from "react";

type propType = {
    text: string;
    isActive: boolean;
    onShow: ()=>void;
}

export default function Button(props: propType) {
  
  return (
    <button
      className={`${
        props.isActive ? "bg-purple-900 border-black border-2" : "bg-gray-400"
      } text-white w-28 h-14 p-4 border-2 border-transparent rounded-2xl tracking-wide font-semibold  hover:bg-purple-800 hover:border-10 shadow-lg cursor-pointer transition ease-in duration-200`}
      onClick={props.onShow}
    >
      {props.text}
    </button>
  );
}
