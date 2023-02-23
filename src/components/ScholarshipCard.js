import React from "react";
import Image from "next/image";
import { SVGIcons } from "public/SVG";

const ScholarshipCard = () => {
  return (
    <div className="w-[300px] h-[450px] rounded-2xl bg-white shadow-lg flex flex-col justify-around">
      <div className="w-full h-[200px] relative">
        <Image
          src="/Job.jpg"
          alt="Image"
          width={300}
          height={200}
          className="w-full h-full object-cover aspect-[3/2] rounded-tl-2xl rounded-tr-2xl"
        />

        <div className="w-full h-[50px] bg-gray-500 bg-opacity-70 absolute bottom-0 flex items-center justify-center text-white uppercase">
          Until 24 March 2023
        </div>

        <Image
          src="/avatar.jpg"
          alt="avatar"
          width={50}
          height={50}
          className="absolute bottom-[25px] left-[10px] rounded-full border-2 border-primary"
        />
      </div>

      <div className="p-2 flex flex-col gap-2">
        <p className="uppercase text-sm font-semibold text-primary tracking-wide">
          fullstack web development bootcamp 2.0
        </p>
        <p className="text-gray font-semibold">SabaiCode</p>
      </div>

      <div className="flex flex-col justify-between p-2">
        <div className="p-2 rounded-lg flex items-center">
          <span>{SVGIcons.DollarIcon()}</span>
          <span>
            &nbsp;100% <b>Scholarship</b>
          </span>
        </div>
        <div className="p-2 rounded-lg flex items-center">
          <span>{SVGIcons.TimeIcon()}</span>
          <span>&nbsp;6 months</span>
        </div>
        <div className="p-2 rounded-lg flex items-center">
          <span>{SVGIcons.LocationIcon()}</span>
          <span>&nbsp;Phnom Penh</span>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipCard;
