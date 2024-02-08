import React from "react";

const Homepage = () => {
  return (
    <div className="relative top-20 w-full m-auto  mx-auto">
      <section className="Interier-container w-[100%] px-2 lg:w-[80%] m-auto py-1  border-yellow-800">
        <div className="flex flex-col-reverse sm:flex-row  gap-10   px-2 border-red-600">
          <div className="w-full  sm:w-[30%] p-2 m-auto border-yellow-400 z-20">
            <div className="flex text-center items-center">
              <div className="mt-[-8rem] text-center sm:text-start sm:mt-[5rem]">
                <h1 className="text-[5em] sm:text-[7em] lg:text-[9.86em] z-10 headitail">
                  INTE<span className="heading">R</span>IOR
                </h1>
                <h1 className="text-[5em] mt-[-3rem] sm:mt-[-6rem] sm:text-[7em] lg:text-[9.86em] z-10 headitail">
                  <span className="heading">D</span>ESIGN{" "}
                </h1>
              </div>
            </div>

            <p className="text-start p-2">
              Nunc luctus tincidunt lobortis. Nulla varius nunc nec tortor
              sagittis, ac ultrices justo maximus. Aliquam libero risus,
              convallis.
            </p>
          </div>

          <div className="w-full  sm:w-[90%] lg:w-[80%] py-4 m-auto border-yellow-400">
            <div className="Image-container border-black w-[100%] md:w-[90%] m-auto">
              <img
                src={`https://assets-global.website-files.com/655b4a03475f25edb9f47c9d/656f158e40a855162b62e498_655b4c151109cbba75f7b0a9_spacejoy-c0JoR_-2x3E-unsplash%201-p-800.jpg`}
                alt="Interior design"
                className="sm:h-[35rem] w-[100%] sm:w-[100%] md:w-[90%] lg:w-[90%] rounded-[2rem] sm:rounded-[4rem] m-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="Creative-container py-4 w-[100%] px-2 lg:w-[90%] 
      m-auto  flex flex-col-reverse sm:flex-row   border-yellow-800"
      >
        <div className="w-[100%] py-6 mt-[-4rem] sm:mt-0 sm:w-[60%] px-4 m-auto  border-black">
          <div className="Image-container border-black w-[100%] md:w-[90%] m-auto">
            <img
              src={`https://assets-global.website-files.com/655b4a03475f25edb9f47c9d/656f1590a43c0e4adb928bb4_655b4c1131e6869bd449702b_spacejoy-io5Tvjh7vCc-unsplash%201-p-800.jpg`}
              alt="Interior design"
              className=" sm:h-[25rem] w-[100%]  sm:w-[100%] md:w-[90%] lg:w-[90%] rounded-[2rem] sm:rounded-[4rem] m-auto"
            />
          </div>
        </div>

        <div className=" w-[100%] py-4 sm:w-[50%] m-auto  border-yellow-500">
          <div className="w-full  sm:w-[100%]  m-auto border-yellow-400 z-20">
            <div className="flex  relative sm:right-[40%]  text-center items-center">
              <div className=" text-center sm:text-start sm:mt-[-2rem]">
                <h1 className="text-[4.5em] sm:text-[7em]  z-10 headitail">
                  C<span className="heading">R</span>EATIVE
                </h1>
                <h1 className="text-[4.5em] mt-[-3rem] sm:mt-[-6rem] sm:text-[7em]  z-10 headitail">
                  SO<span className="heading">L</span>UTION{" "}
                </h1>
              </div>
            </div>

            <p className="w-[80%] hidden sm:block  font-serif m-auto text-start px-8 p-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet.
            </p>
          </div>
        </div>
      </section>

      <section className="Discription w-[100%] py-6 lg:w-[80%] m-auto  flex flex-col sm:flex-row gap-5">
        
        <div className="bg-[#FFFFFF] shadow-lg px-4 py-2 rounded-[2rem]
          w-1/3 border-black">
            <h1 className="font-sans  font-thin text-4xl">REASONA<span className="heading">B</span>LE </h1>
            <h1 className="font-sans  font-thin text-4xl">P<span className="heading">R</span>ICES </h1>
            <p className="text-sm py-2 px-1"> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Magnam nam iste fugit est consectetur quia recusandae. 
                    Asperiores voluptates, accusamus vitae impedit eum eligendi ut
                     </p>
        </div>

        <div className="bg-[#FFFFFF] shadow-lg px-4 py-2 rounded-[2rem]
          w-1/3 border-black">
            <h1 className="font-sans  font-thin text-4xl">MODE<span className="heading">R</span>N</h1>
            <h1 className="font-sans  font-thin text-4xl"><span className="heading">D</span>ESIGN</h1>
            <p className="text-sm py-2 px-1"> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Magnam nam iste fugit est consectetur quia recusandae. 
                    Asperiores voluptates, accusamus vitae impedit eum eligendi ut
                     </p>
        </div>

        <div className="bg-[#FFFFFF] shadow-lg px-4 py-2 rounded-[2rem]
          w-1/3 border-black">
            <h1 className="font-sans  font-thin text-4xl">P<span className="heading">R</span>OFESSIONAL</h1>
            <h1 className="font-sans  font-thin text-4xl">TEA<span className="heading">M</span> </h1>
            <p className="text-sm py-2 px-1"> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Magnam nam iste fugit est consectetur quia recusandae. 
                    Asperiores voluptates, accusamus vitae impedit eum eligendi ut
                     </p>
        </div>

      </section>

      
    </div>
  );
};

export default Homepage;
