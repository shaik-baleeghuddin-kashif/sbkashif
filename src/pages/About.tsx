const About = () => {
  return (
    <div
      className="flex flex-col md:flex-row w-full h-full bg-white bg-opacity-10 backdrop-blur-lg shadow-lg border-white/30 border-2 rounded-lg p-4 md:p-8 text-sm md:text-base justify-between max-h-full overflow-auto"
    >
      {/* Left Section: Image and Info */}
      <div className="flex md:flex-col w-full md:w-[25%] h-[60%] md:h-full items-center gap-3">
        <div className="bg-white bg-opacity-10 backdrop-blur-lg border border-white/30 rounded-lg shadow-lg w-[40%] md:w-[90%] h-full md:h-[80%] p-1 md:p-3 hover:p-1">
          <div
            className="h-full w-full bg-[url('/kashifabout.jpg')] bg-cover bg-center bg-no-repeat rounded-lg border-4 border-white shadow-lg"
          ></div>
        </div>
        <div className="text-center justify-center flex flex-col items-center md:mt-5 w-[70%] md:w-full h-full md:h-[20%]">
          <div className="text-gray-800 font-bold text-xs md:text-lg">SHAIK BALEEGHUDDIN KASHIF</div>
          <div className="text-gray-800 font-bold text-xs md:text-lg">(July 2001 - Present)</div>
          <div className="text-gray-800 font-bold text-xs md:text-lg">Hyderabad, INDIA</div>
        </div>
      </div>

      {/* Right Section: About Content */}
      <div className="flex w-full md:w-[70%] p-5 md:p-10 overflow-y-auto max-h-screen">
        <div>
          <h1 className="font-bold text-md md:text-lg">About me:</h1>
          <br />
          <p className="text-justify text-sm md:text-base">
            Hi, I’m Shaik Baleeghuddin Kashif, a passionate technology enthusiast with a strong foundation in Electronics and Communication Engineering, complemented by hands-on experience in software development, automation, and autonomous systems...
          </p>
          <br />
          <p className="text-justify text-sm md:text-base">
            I graduated from B.V. Raju Institute of Technology with a degree in Electronics and Communication Engineering. During my undergraduate years, I worked on a variety of impactful projects, including object detection using LiDAR for self-driving cars and smart home automation using IoT...
          </p>
          <br />
          <p className="text-justify text-sm md:text-base">
            Currently, I’m a Technology Specialist at D. E. Shaw India, where I build and enhance web applications and automation tools using cutting-edge technologies such as Go Lang, React, and Python...
          </p>
          <br />
          <p className="text-justify text-sm md:text-base">
            I’m also a published researcher, having contributed to the field of autonomous systems with my paper on hybrid object detection methods for self-driving cars, presented at the IEEE International Congress on Human-Computer Interaction...
          </p>
          <br />
          <p className="text-justify text-sm md:text-base">
            As I continue my journey, I’m excited to push the boundaries of what’s possible with technology, with a particular focus on AI, automation, and system optimization...
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;
