import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="min-h-screen relative top-20 w-full m-auto  mx-auto  border-black">
        <div className="w-[100%] px-8 sm:px-4 border-red-600 sm:w-[80%] m-auto">
          <h1 className="text-[4em] text-start sm:text-[7em] lg:text-[9.86em] z-10 headitail">
            CONT<span className="heading">A</span>CTUS
          </h1>
        </div>

        {/* Lets  Make  your Project  */}
        <section
          className="Contactus-container   mt-[-2rem] py-2 w-[100%] px-4 sm:px-2 lg:w-[80%] 
                    m-auto   border-red-800"
        >
          <section className="Contact-container w-[100%] px-2  m-auto py-1  border-yellow-800">
            <div className="flex flex-col sm:flex-row  gap-2  px-2 border-red-600">

            <div className="Right-side   w-full  sm:w-[90%] lg:w-[70%] py-2 m-auto border-yellow-400">
                <div className="Image-container  border-black w-[100%]  m-auto">
                  <Image
                    src={`https://assets-global.website-files.com/655b4a03475f25edb9f47c9d/6583bf3a0811f7701ca4421c_655b4c0c893524f6d018ac2c_r-architecture-wDDfbanbhl8-unsplash(1)-p-800.jpg`}
                    alt="Interior design"
                    width={500}
                    height={50}
                    className="w-[100%]  rounded-[2rem] sm:rounded-[4rem] m-auto"
                  />
                </div>
              </div>

              {/*  -----------------------------------------------------------------------  */}

              <div className="w-full mt-[6rem] sm:mt-0   py-6 sm:w-[30%] p-1  border-yellow-400 z-20">
                <div className="flex  border-red-800 text-center items-center">
                  <div className="m-auto text-start mt-[-8rem]   sm:mt-[1rem]">
                    <h2 className="underline text-2xl font-extralight border-black">
                      + 123 456 4789{" "}
                    </h2>
                    <h2 className="underline text-2xl  font-extralight border-black">
                      Info@example.com{" "}
                    </h2>
                    <h2 className="text-md py-1 border-black">
                      202 Queen Street East, Unit, Toronto, ON{" "}
                    </h2>
                    <h2 className="text-md border-black">M1A AS2, Canada </h2>
                  </div>
                </div>
              </div>
              
              {/*  */}

            </div>
          </section>
        </section>
      </div>
    </>
  );
};

export default page;
