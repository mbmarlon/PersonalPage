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
            the entertainment and advertising industries, as well as on user
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
              <h3>3D Generalist</h3>
              <span className="fontThin">June 2024 (1 year 6 months)</span>
            </div>
            <div className="WorkCont">
              <h2>Red Point Producciones</h2>
              <h3>3D Generalist and VFX</h3>
              <span className="fontThin">February 2023 (1 year 4 months)</span>
            </div>
            <div className="WorkCont">
              <h2>Kabato Lab</h2>
              <h3>3D Animator</h3>
              <span className="fontThin">December 2022 (6 months)</span>
            </div>
            <div className="WorkCont">
              <h2>CACUMEN creative studio</h2>
              <h3> 2D and 3D Animator</h3>
              <span className="fontThin">2022 (6 months)</span>
            </div>
            <div className="WorkCont">
              <h2>BTI Laboratory of prototyping</h2>
              <h3>UV/UI Designer</h3>
              <span className="fontThin">March 2022 (7 months)</span>
            </div>
            <div className="WorkCont">
              <h2>Universidad Autónoma de Occidente</h2>
              <h3>Production Assistant</h3>
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
              <h1 className="white">Marlon Marin Barco</h1>
              <p className="text-gray-300 text-sm mb-4">
                Multimedia engineering, UX/UI, 3D animator, 3D generalist, VFX
                artist and web developer.
              </p>
            </div>
            <a href="https://www.instagram.com/media_arte/" className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                class="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/marlon-marin-barco-3841a9190/"
              className="icon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                class="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
            </a>
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
