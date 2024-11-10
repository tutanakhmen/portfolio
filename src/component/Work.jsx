import image from "../assets/about.jpg"
import image1 from "../assets/bangkit2.png"
import image2 from "../assets/bangkit1.png"
const Work = () => {
  return (
    <div className="work" id="experience">
       <h1 className="text-5xl/tight font-medium text-center pt-5">
        Experience
      </h1>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias,
        dolor.
      </p>
      <div className="container mx-auto pt-3">
        <div className="work-box grid grid-cols-2">
          <div className="box p-4 hover:scale-105 transition-all">
            <img src={image} alt="" className="rounded-3xl shadow-2xl"/>
            <h3 className="text-center font-medium text-2xl pt-3">Robotics Instructor (2023 - now)</h3>
          </div>
          <div className="box p-4 hover:scale-105 transition-all">
            <img src={image1} alt="" className="rounded-3xl shadow-2xl"/>
            <img src={image2} alt="" className="rounded-3xl shadow-2xl pt-5"/>
            <h3 className="text-center font-medium text-2xl pt-3">Bangkit Mobile Dev 2023 cohort</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work