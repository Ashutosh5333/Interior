import Image from "next/image";
import React from "react";
import { Interier } from "../../context/index";

const page = () => {
  return (
    <>
      <div className="min-h-screen relative top-20 w-full m-auto  mx-auto  border-black">
       
        <div className="w-[100%] px-8 sm:px-4 border-red-600 sm:w-[80%] m-auto">
          <h1 className="text-[4em] text-start sm:text-[7em] lg:text-[9.86em] z-10 headitail">
            P<span className="heading">R</span>OJECTS
          </h1>
        </div>

        <section
          className="Creative-container  mt-[-2rem] py-2 w-[100%] px-4 sm:px-2 lg:w-[80%] 
    m-auto  grid grid-flow-col-1   border-yellow-800"
        >
          {Interier.length > 0 &&
            Interier.map((el) => {
              return (
                <section className=" w-[100%]  border-yellow-500 m-auto py-6 gap-2">
                  <div
                    data-aos="fade-up"
                    className="  shadow-lg  hover:blur-[.1rem] px-4 py-4 rounded-large border-green-600 relative"
                  >
                    <div className="py-2 px-2 border-red-700 flex flex-col sm:flex-row">
                      <h1 className="text-2xl sm:w-[70%] py-2 font-sans sm:px-4 font-light">
                        {" "}
                        {el.Title}
                      </h1>
                      <h1 className="text-sm sm:text-lg sm:w-[50%]  font-sans sm:px-4 font-normal">
                        {el.description}
                      </h1>
                    </div>

                    <Image
                      data-aos="zoom-in"
                      width={500}
                      height={100}
                      alt="Image"
                      className="w-[100%] sm:h-[30rem] rounded-large"
                      src={el.Image}
                    />
                  </div>
                </section>
              );
            })}
        </section>
      </div>
    </>
  );
};

export default page;
