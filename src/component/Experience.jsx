import image from "../assets/DSC00354.jpg";
import image1 from "../assets/DSC02712.jpg";
import image2 from "../assets/DSC04611.jpg";
import image3 from "../assets/DSC_0340.jpg";
const Experience = () => {
  return (
    <div className="experience" id="organization">
      <h1 className="text-5xl/tight font-medium text-center pt-5">
        Organization Experience
      </h1>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias,
        dolor.
      </p>
      <div className="container mx-auto">
        <div className="experience-box pt-12 grid grid-cols-3">
          <div className="box px-5 hover:scale-105 transition-all pt-5">
            <img src={image} alt="" className="rounded-3xl shadow-2xl" />
            <h3 className="text-2xl font-medium pt-2 pb-2">
              2024 - Dmall Space Exploration
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              odio, vero obcaecati ex eligendi sint deleniti excepturi dolor
              praesentium eveniet?
            </p>
          </div>
          <div className="box px-5 hover:scale-105 transition-all pt-5">
            <img src={image1} alt="" className="rounded-3xl shadow-2xl" />
            <h3 className="text-2xl font-medium pt-2 pb-2">
              2023 - AEON Tribute to Heroes
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              odio, vero obcaecati ex eligendi sint deleniti excepturi dolor
              praesentium eveniet?
            </p>
          </div>
          <div className="box px-5 hover:scale-105 transition-all pt-5">
            <img src={image2} alt="" className="rounded-3xl shadow-2xl" />
            <h3 className="text-2xl font-medium pt-2 pb-2">
              2024 - Dmall Transpovation
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              odio, vero obcaecati ex eligendi sint deleniti excepturi dolor
              praesentium eveniet?
            </p>
          </div>
          <div className="box px-5 hover:scale-105 transition-all pt-5">
            <img src={image3} alt="" className="rounded-3xl shadow-2xl" />
            <h3 className="text-2xl font-medium pt-2 pb-2">
              2023 - Islamic Youth Festival
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              odio, vero obcaecati ex eligendi sint deleniti excepturi dolor
              praesentium eveniet?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
