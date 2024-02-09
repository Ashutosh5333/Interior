import Image from "next/image";
import React from "react";

const Latestblog = () => {
  return (
    <div className=" w-[100%] lg:w-[80%]   m-auto border-green-600">
      <h1 className="headitail text-[3em] sm:text-[7.6em]">
        {" "}
        OUR LAT
        <span className="heading ">E</span>ST
      </h1>
      <h1 className="headitail mt-[-2rem] sm:mt-[-5rem] text-[3em] sm:text-[7.6em]">
        <span className="heading">B</span>LOGS
      </h1>

      <section className=" w-[100%] py-6 flex flex-col sm:flex-row gap-10 border-red-700">
       
        <div className="w-1/2 shadow-lg  hover:blur-sm px-4 py-4 rounded-large border-green-600 relative">
          <Image
            width={500}
            height={100}
            alt="Image"
            className="w-[100%] rounded-large"
            src={`https://assets-global.website-files.com/655c30d0504f0d191fb4756e/656f1a0d5ac0b0761becf8b8_655c38783df6294e6e52513f_spacejoy-KX4I6tJ87sU-unsplash%201-p-800.jpg`}
          />
          <h1 className="text-2xl w-[70%] py-2 font-sans px-2 font-light">
            {" "}
            HOW TO CHOOSE THE PERFECT PALETTE{" "}
          </h1>
          <h1 className="text-lg w-[90%]  font-sans px-2 font-normal">
            Palllentesque eros neque , semper sed dui et, lorbtis secelred
            dolar.
          </h1>
        </div>

        <div className="w-1/2 shadow-lg px-4 py-4 hover:blur-sm rounded-large border-green-600">
          <Image
            width={400}
            height={100}
            alt="Image"
            className="w-[100%] rounded-large"
            src={`https://assets-global.website-files.com/655c30d0504f0d191fb4756e/656f1a0d5ac0b0761becf8b8_655c38783df6294e6e52513f_spacejoy-KX4I6tJ87sU-unsplash%201-p-800.jpg`}
          />
          <h1 className="text-2xl w-[70%] py-2 font-sans px-2 font-light">
            BEDROOM CREATIVE SOLUTIONS{" "}
          </h1>

          <h1 className="text-lg w-[90%]  font-sans px-2 font-normal">
            Palllentesque eros neque , semper sed dui et, lorbtis secelred
            dolar.
          </h1>
        </div>

      </section>
    </div>
  );
};

export default Latestblog;
