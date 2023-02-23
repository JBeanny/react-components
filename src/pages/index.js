import React from "react";
import JobCard from "@/components/JobCard";
import ScholarshipCard from "@/components/ScholarshipCard";

const index = () => {
  return (
    <div className="w-screen h-screen flex gap-8 justify-center items-center">
      <JobCard />
      <ScholarshipCard />
    </div>
  );
};

export default index;
