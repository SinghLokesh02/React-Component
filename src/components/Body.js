import React from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import Table from "./Table";

const Body = () => {
  const arr = [18, 132, 12, "76%"];
  const name = ["Projects", "Active Task", "Teams", "Productivity"];
  const para = [2, 28, 1, "5%"];

  return (
    <div>
      <Navbar />
      <div className="bg-purple-700 h-[300px] hidden md:block"></div>

      <div className="md:absolute md:top-14 w-full relative top-5">
        <div className="flex flex-col md:flex-row justify-between align-middle md:m-20 m-0 mx-10 md:relative bottom-7 static">
          <h1 className="text-black text-2xl font-bold">Projects</h1>
        </div>
        <div className="cards-div flex flex-col md:flex-row md:justify-center md:gap-5 relative gap-5">
          {arr.map((num, index) => {
            return (
              <Card
                key={index}
                num={num}
                name={name[index]}
                para={para[index]}
              />
            );
          })}
        </div>
      </div>
      <div className="w-full md:my-20 my-10 md:flex md:justify-center"> 
        <Table />
      </div>
    </div>
  );
};

export default Body;
