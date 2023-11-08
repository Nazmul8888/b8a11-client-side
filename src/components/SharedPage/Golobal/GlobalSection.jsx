

const GlobalSection = () => {
    return (
        <div className=" h-[70vh] flex justify-between justify-items-center bg-green-700">
           <div>
            <img className="w-[650px] mx-auto ml-10 mt-20" src="https://i.ibb.co/DpQXMqb/140144.webp" alt="" />
            </div> 
            <div className="mr-20 mt-20">
                <h1 className="text-center font-bold text-5xl text-white">Our global reach</h1>
                <br />
                <br />
                <p className="text-white  text-1xl">We are experts in international education because we ourselves are <br />international. The Study Group network spans offices across the globe, as <br /> well as partnerships with universities all over the world. We also partner <br /> with over 3000 agents worldwide – increasing our global reach even <br /> further.</p>
                <br />
                <button className="btn btn-info hover:bg-red-500">find more</button>
            </div>
        </div>
    );
};

export default GlobalSection;