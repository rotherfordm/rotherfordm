import React from "react";
import Image from "next/image";

const Card = (props) => {
  return (
    <div className="rounded-xl shadow-lg dark:bg-white m-4">
      <div className="p-5 flex flex-col">
        <div className="rounded-xl overflow-hidden">
          <Image src={props.image} alt="" />
        </div>
        <h5 className="text-2xl md:text-3xl font-roboto_medium mt-3">
          {props.title}
        </h5>
        <p className="text-slate-500 text-lg mt-3">{props.description}</p>
        <a
          href={props.link}
          className="text-center bg-blue-400 text-zinc-50 py-2 
            rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all"
        >
          Explore
        </a>
      </div>
    </div>
  );
};

export default Card;
