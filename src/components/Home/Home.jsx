import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import CourseServices from "./CourseServices";
import GlobalSection from "../SharedPage/Golobal/GlobalSection";


const Home = () => {

  const services = useLoaderData()
    return (
        <div>
        <Banner></Banner>
        


        <div className="grid grid-cols-3 md:grid-cols-3 gap-6 py-10">

        {
        services.map(course=><CourseServices key={services._id} course={course}></CourseServices>)
         }

        </div>
        <GlobalSection></GlobalSection>






        </div>
    );
};

export default Home;