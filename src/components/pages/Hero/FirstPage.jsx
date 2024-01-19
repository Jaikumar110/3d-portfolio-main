import React from "react";
import personImg from "../../../assets/person2.png";

const FirstPage = () => {
  return (
    <div className="h-full">
      <main className="h-full w-full bg-secondary page-shadow">
        <div className="p-10  space-y-4">
          {/* image-container */}
          <div>
            <img src={personImg} alt="" className="w-[300px] mx-auto" />
          </div>
          {/* text-container */}
          <div>
            <div className="space-y-3">
              <p className="uppercase">Hello</p>
              <p className="text-4xl md:text-6xl font-bold text-black/80">
                I'm Jai Kumar
              </p>
              <p className="text-black/75 text-left">Full Stack Developer</p>
              <p className="text-black/75">
                As a versatile web designer, I specialize in both frontend and backend development,
                crafting seamless and visually engaging digital experiences.
                With a keen eye for design and a strong command of frontend technologies such as HTML, CSS, and JavaScript,
                I bring websites to life by creating intuitive and responsive user interfaces..
              </p>
              <a
                className="inline-block primary-btn "
                href="mailto:jairamofficail@gmail.com"
              >
                {" "}
                Hire me
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FirstPage;
