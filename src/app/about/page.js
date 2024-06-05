import Image from "next/image";
import granddad from "../../../public/images/granddad.jpg";

const About = () => {
  return (
    <div className="mt-20 p-6 container mx-auto flex flex-col md:flex-row items-center">
      <h1 className="text-5xl font-semibold">
        Hi! I am Rassul
        <br />
        <br />
        This is my first blog website
        <br />
        <br />
        And you are lucky to see it ;D
      </h1>
      <Image
        className="mt-10 md:ml-auto object-cover object-bottom w-96 rounded-xl max-w-full h-auto"
        src={granddad}
        alt="photo of granddad"
      />
    </div>
  );
};

export default About;
