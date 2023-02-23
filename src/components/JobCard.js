import Image from "next/image";
import React from "react";
import { SVGIcons } from "public/SVG";

const JobCard = () => {
  return (
    <div className="w-[350px] h-[350px] bg-white rounded-2xl shadow-lg p-2 flex flex-col justify-between gap-2 group relative">
      <div className="w-full h-[200px] relative">
        <Image
          src="/job.jpg"
          alt="Job"
          width={400}
          height={150}
          className="w-full h-full object-cover aspect-[3/2] rounded-2xl"
        />
        <Image
          src="/avatar.jpg"
          alt="avatar"
          width={50}
          height={50}
          className="absolute bottom-[10px] left-[10px] rounded-full border-2 border-primary"
        />
      </div>
      <p className="uppercase text-sm font-semibold text-primary tracking-wide">
        fullstack web developer
      </p>
      <p className="text-gray font-semibold">SabaiCode</p>
      <div className="flex gap-2 justify-between">
        <div className="p-2 bg-white-500 rounded-lg flex justify-center items-center">
          <span>{SVGIcons.DollarIcon()}</span>
          <span>&nbsp;500$</span>
        </div>
        <div className="p-2 bg-white-500 rounded-lg flex justify-center items-center">
          <span>{SVGIcons.TimeIcon()}</span>
          <span>&nbsp;Full-Time</span>
        </div>
        <div className="p-2 bg-white-500 rounded-lg flex justify-center items-center">
          <span>{SVGIcons.LocationIcon()}</span>
          <span>&nbsp;Phnom Penh</span>
        </div>
      </div>
      <div className="absolute left-0 top-0 right-0 bottom-0 rounded-2xl hidden group-hover:flex bg-white flex-col justify-center items-center gap-4 bg-opacity-50 transition-all duration-200 ease-linear">
        <button className="bg-primary p-2 rounded-lg text-white flex gap-4 justify-center items-center">
          <span>{SVGIcons.ProfileIcon()}</span>
          <span>View Profile</span>
        </button>
        <button className="bg-primary p-2 rounded-lg text-white flex gap-4 justify-center items-center">
          <span>{SVGIcons.EyeIcon()}</span>
          <span>View Detail</span>
        </button>
      </div>
    </div>
  );
};

export default JobCard;
