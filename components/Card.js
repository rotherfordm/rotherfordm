import React from "react";
import Image from "next/image";

const Card = (props) => {
  return (
    <div className="rounded-xl shadow-lg bg-white m-4">
      <div className="p-5 flex flex-col">
        <h5 className="text-2xl md:text-3xl font-roboto_medium mt-3">
          {props.title}
        </h5>
        <p className="text-slate-500 font-roboto text-lg mt-3">
          {props.description}
        </p>
        <p className="text-slate-500 font-roboto_light text-sm mt-3">
          {props.technologies.map((i, index) => {
            if (index === props.technologies.length - 1) {
              return i;
            } else {
              return <>{i} • </>;
            }
          })}
        </p>
      </div>
    </div>
  );
};

export default Card;
