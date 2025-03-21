import { useState, useEffect } from "react";
import profileImg from "./Profile.jpeg";
const Curriculum = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    // Renderizado en Modo Móvil
    return (
      <>
        <section id="about" className="CvSection" Section>
          <h2 className="orange">About</h2>
          <p>
            Multimedia engineer with experience in content production, animation
            and 3D modeling, user interface design and web development. My main
            focus is on creating high-quality content that engages and retains
            audiences. I have worked on animation and 3D modeling projects for
            the entertainment and advertising indusdivies, as well as on user
            interface design and website development for companies. I am
            passionate about digital art and new technologies, which drives me
            to constantly stay updated and seek new opportunities for
            professional growth.
          </p>
        </section>
        <section id="resume" className="CvSection">
          <h2 className="orange">Resume PDF</h2>
          <a
            href="https://drive.google.com/file/d/1IehKE1PrvAyW_GlKtuqq7c0j2W3L8mMT/view?usp=drive_link"
            download
            className="active"
          >
            Download
          </a>
        </section>
        <section id="skills" className="CvSection">
          <h2 className="orange">Skills</h2>
          <div className="CvItems">
            <div>
              <span>3D Animation</span>
              <span>3D Modeling</span>
              <span>Texturing</span>
              <span>VFX</span>
            </div>
            <div>
              <span>UV/UI designer</span>
              <span>Web developer</span>
            </div>
            <div>
              <span>Video Editor</span>
            </div>
          </div>
        </section>
        <section id="software" className="CvSection">
          <h2 className="orange">Software proficiency</h2>
          <div className="CvItems2">
            <span className="CVitem">Blender</span>
            <span className="CVitem">Substance painter</span>
            <span className="CVitem">ZBrush</span>
            <span className="CVitem">After Effects</span>
            <span className="CVitem">Premiere pro</span>
            <span className="CVitem">Illusdivator</span>
            <span className="CVitem">Figma </span>
            <span className="CVitem">HTML </span>
            <span className="CVitem">CSS </span>
            <span className="CVitem">Javascript </span>
            <span className="CVitem">React </span>
          </div>
        </section>
        <section id="departures" className="CvSection">
          <h2 className="orange">Experience</h2>
          <div className="ExpCont">
            <div className="WorkCont">
              <h2>Kabato Lab </h2>
              <h3>3D Modeling 3D Animation</h3>
              <span className="fontThin">August 2024 - Present (7 months)</span>
            </div>
            <div className="WorkCont">
              <h2>SmartBeemo</h2>
              <h3>Video Editor</h3>
              <span className="fontThin">June 2024 (1 year 6 months)</span>
            </div>
            <div className="WorkCont">
              <h2>Kabato Lab</h2>
              <h3>3D Generals</h3>
              <span className="fontThin">June 2024 (1 year 6 months)</span>
            </div>
            <div className="WorkCont">
              <h2>Freeforce</h2>
              <h3>3D Generals and VFX</h3>
              <span className="fontThin">February 2023 (1 year 4 months)</span>
            </div>
            <div className="WorkCont">
              <h2>Kabato Lab</h2>
              <h3>3D Animator</h3>
              <span className="fontThin">December 2022 (6 months)</span>
            </div>
            <div className="WorkCont">
              <h2>CACUMEN creative studio</h2>
              <h3>Animator 2D y 3D</h3>
              <span className="fontThin">2022 (6 months)</span>
            </div>
            <div className="WorkCont">
              <h2>BT1 Laboratoire de Prototipado</h2>
              <h3>UV/UI Designer</h3>
              <span className="fontThin">March 2022 (7 months)</span>
            </div>
            <div className="WorkCont">
              <h2>Universidad Autónoma de Occidente</h2>
              <h3>Auxiliar de producción</h3>
              <span className="fontThin">2021 (1 year 9 months)</span>
            </div>
          </div>
        </section>
      </>
    );
  }

  // Renderizado en Modo Escritorio (cuatro columnas)
  return (
    <>
      <div className="CvRow">
        <div>
          <section id="profile" className="CvSection">
            <div className="JCCenter">
              <img
                src={profileImg}
                alt="profile image"
                className="imgProfile"
              />
              <h1>Marlon Marin Barco</h1>
              <p className="text-gray-300 text-sm mb-4">
                Multimedia engineering, UX/UI, 3D animator, 3D generalist, VFX
                artist and web developer.
              </p>
            </div>
            <div className="flex space-x-4 mt-4">
              <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
              <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
            </div>
          </section>
          <section id="resume" className="CvSection">
            <h2 className="orange">Resume PDF</h2>
            <a
              href="https://drive.google.com/file/d/1IehKE1PrvAyW_GlKtuqq7c0j2W3L8mMT/view?usp=drive_link"
              download
              className="active"
            >
              Download
            </a>
          </section>
          <section id="skills" className="CvSection">
            <h2 className="orange">Skills</h2>
            <div className="CvItems">
              <div>
                <span>3D Animation</span>
                <span>3D Modeling</span>
                <span>Texturing</span>
                <span>VFX</span>
              </div>
              <div>
                <span>UV/UI designer</span>
                <span>Web developer</span>
              </div>
              <div>
                <span>Video Editor</span>
              </div>
            </div>
          </section>
          <section id="software" className="CvSection">
            <h2 className="orange">Software proficiency</h2>
            <div className="CvItems2">
              <span className="CVitem">Blender</span>
              <span className="CVitem">Substance painter</span>
              <span className="CVitem">ZBrush</span>
              <span className="CVitem">After Effects</span>
              <span className="CVitem">Premiere pro</span>
              <span className="CVitem">Illusdivator</span>
              <span className="CVitem">Figma </span>
              <span className="CVitem">HTML </span>
              <span className="CVitem">CSS </span>
              <span className="CVitem">Javascript </span>
              <span className="CVitem">React </span>
            </div>
          </section>
        </div>
        <div>
          <section id="about" className="CvSection" Section>
            <h2 className="orange">About</h2>
            <p>
              Multimedia engineer with experience in content production,
              animation and 3D modeling, user interface design and web
              development. My main focus is on creating high-quality content
              that engages and retains audiences. I have worked on animation and
              3D modeling projects for the entertainment and advertising
              indusdivies, as well as on user interface design and website
              development for companies. I am passionate about digital art and
              new technologies, which drives me to constantly stay updated and
              seek new opportunities for professional growth.
            </p>
          </section>
          <section id="departures" className="CvSection">
            <h2 className="orange">Experience</h2>
            <div className="ExpCont">
              <div className="WorkCont">
                <h2>Kabato Lab </h2>
                <h3>3D Modeling 3D Animation</h3>
                <span className="fontThin">
                  August 2024 - Present (7 months)
                </span>
              </div>
              <div className="WorkCont">
                <h2>SmartBeemo</h2>
                <h3>Video Editor</h3>
                <span className="fontThin">June 2024 (1 year 6 months)</span>
              </div>
              <div className="WorkCont">
                <h2>Kabato Lab</h2>
                <h3>3D Generals</h3>
                <span className="fontThin">June 2024 (1 year 6 months)</span>
              </div>
              <div className="WorkCont">
                <h2>Freeforce</h2>
                <h3>3D Generals and VFX</h3>
                <span className="fontThin">
                  February 2023 (1 year 4 months)
                </span>
              </div>
              <div className="WorkCont">
                <h2>Kabato Lab</h2>
                <h3>3D Animator</h3>
                <span className="fontThin">December 2022 (6 months)</span>
              </div>
              <div className="WorkCont">
                <h2>CACUMEN creative studio</h2>
                <h3>Animator 2D y 3D</h3>
                <span className="fontThin">2022 (6 months)</span>
              </div>
              <div className="WorkCont">
                <h2>BT1 Laboratoire de Prototipado</h2>
                <h3>UV/UI Designer</h3>
                <span className="fontThin">March 2022 (7 months)</span>
              </div>
              <div className="WorkCont">
                <h2>Universidad Autónoma de Occidente</h2>
                <h3>Auxiliar de producción</h3>
                <span className="fontThin">2021 (1 year 9 months)</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
export default Curriculum;
