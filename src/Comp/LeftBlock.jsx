import React from 'react'

const LeftBlock = () => {
    return (
        <div className="lg:w-1/2 md:w-full md:h-full w-screen px-7 h-fit  py-5 rounded-lg bg-blue-500  flex flex-col  justify-center items-center lg:h-screen ">
            <div className=" md:mr-32 md:w-96 w-60  py-7 md:space-y-6 space-y-8">
                <h1 className="text-6xl  font-semibold text-white">Proin  facilisis  risus mus a.</h1>

                <p className="mt-7  text-sm font-light text-white ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, laudantium sapiente
                    aliquid consectetur ea ipsam velit illum. Vitae, minima maiores? </p>

                <div className=" w-96   space-y-6">
                    <div className="flex justify-start items-center  space-x-3 ">
                        <div className='bg-white p-2 rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <h1 className=" serch text-sm font-light  w-fit text-white">Lorem ipsum, dolor sit consectetur<span className="hidden md:inline-block">amet consectetur adipisicing.</span></h1>
                    </div>
                    <div className="flex justify-start items-center     space-x-3 ">
                        <div className='bg-white p-2 rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                            </svg>
                        </div>

                        <h1 className=" serch text-sm  font-light  w-fit text-white">Lorem ipsum, dolor sit <span className="hidden md:inline-block">amet consectetur adipi.</span> </h1>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default LeftBlock