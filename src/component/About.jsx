import image1 from "../assets/edit.JPG";
const About = () => {
  return (
    <div className="about pt-20" id="About">
      <h1 className="text-5xl font-medium flex justify-center ">About Me</h1>
      <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, totam!</p>
      <div className="container grid grid-cols-2 items-center mx-auto p-7 shadow-2xl hover:scale-105 transition-all">
        <div className="about-box">
          <img src={image1} alt="" className="rounded-3xl shadow-2xl" />
        </div>
        <div className="about-box">
          <h1 className="text-5xl font-medium p-7 ">Programmer Junior</h1>
          <p className="pl-7">
            Programmer junior yang tertarik dengan IoT & AI serta game Developer
            untuk kemajuan teknologi. saat ini sedang menempuh jurusan S1 Teknik
            Informatika di STT Terpadu Nurul Fikri. yang mana saat ini sedang menempuh semester 7.
            menurut saya, kemampuan frontend merupaakan kemampuan wajib bagi
            masing-masing developer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
