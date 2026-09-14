import { useState, useEffect, useRef } from "react";
import profileImg from "./Profile.jpeg";
import { TAGLINE, socialLinks } from "./profileData";

const Curriculum = () => {
  /* Responsive */
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  // Handle resize for mobile detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* Animation */
  const sectionsRef = useRef([]);
  const skillItemsRef = useRef([]);
  const workItemsRef = useRef([]);

  // Intersection Observer for animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    // Section observer
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    }, observerOptions);

    // Work items observer (for timeline)
    const workObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          entry.target.style.transitionDelay = `${index * 0.1}s`;
        }
      });
    }, observerOptions);

    // Skill items observer
    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          entry.target.style.transitionDelay = `${index * 0.05}s`;
        }
      });
    }, observerOptions);

    // Observe all elements
    sectionsRef.current.forEach(
      (section) => section && sectionObserver.observe(section)
    );
    workItemsRef.current.forEach((item) => item && workObserver.observe(item));
    skillItemsRef.current.forEach((item) => item && skillObserver.observe(item));

    return () => {
      sectionObserver.disconnect();
      workObserver.disconnect();
      skillObserver.disconnect();
    };
  }, [isMobile]);

  /* The sections below are shared by the mobile and the desktop render.
     Each one receives the slot it occupies in sectionsRef so the observer
     keeps animating them in reading order. */

  const renderProfile = (i) => (
    <section
      id="profile"
      className="CvSection"
      ref={(el) => (sectionsRef.current[i] = el)}
    >
      <div className="JCCenter">
        <img src={profileImg} alt="Marlon Marin Barco" className="imgProfile" />
        <h1 className="white">Marlon Marin Barco</h1>
        <p className="TxCenter">{TAGLINE}</p>
      </div>
      {socialLinks.map(({ href, label, path }) => (
        <a
          key={label}
          href={href}
          className="icon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d={path} />
          </svg>
        </a>
      ))}
    </section>
  );

  const renderAbout = (i) => (
    <section
      id="about"
      className="CvSection"
      ref={(el) => (sectionsRef.current[i] = el)}
    >
      <h2 className="orange">About</h2>
      <p>{ABOUT}</p>
    </section>
  );

  const renderResume = (i) => (
    <section
      id="resume"
      className="CvSection"
      ref={(el) => (sectionsRef.current[i] = el)}
    >
      <h2 className="orange">Resume PDF</h2>
      <a
        href={RESUME_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="active"
      >
        Download
      </a>
    </section>
  );

  const renderSkills = (i) => {
    // Running index so every chip across every group gets its own ref slot.
    let chip = 0;

    return (
      <section
        id="skills"
        className="CvSection"
        ref={(el) => (sectionsRef.current[i] = el)}
      >
        <h2 className="orange">Skills</h2>
        {skillGroups.map((group) => (
          <div key={group.title} className="SkillGroup">
            <h3 className="SkillGroupTitle">{group.title}</h3>
            <div className="CvItems2">
              {group.items.map((item) => {
                const slot = chip++;
                return (
                  <span
                    key={item}
                    ref={(el) => (skillItemsRef.current[slot] = el)}
                    className="CVitem"
                  >
                    {item}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </section>
    );
  };

  const renderExperience = (i) => (
    <section
      id="experience"
      className="CvSection"
      ref={(el) => (sectionsRef.current[i] = el)}
    >
      <h2 className="orange">Experience</h2>
      <div className="ExpCont">
        {experienceData.map((exp, index) => (
          <div
            key={`${exp.company}-${exp.duration}`}
            className="WorkCont"
            ref={(el) => (workItemsRef.current[index] = el)}
          >
            <h2>{exp.company}</h2>
            <h3>{exp.position}</h3>
            <span className="fontThin">{exp.duration}</span>
            <ul className="WorkHighlights">
              {exp.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );

  const renderProjects = (i) => (
    <section
      id="featured"
      className="CvSection"
      ref={(el) => (sectionsRef.current[i] = el)}
    >
      <h2 className="orange">Featured Projects</h2>
      {projectsData.map((project) => (
        <div key={project.title} className="ListCont">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </section>
  );

  const renderEducation = (i) => (
    <section
      id="education"
      className="CvSection"
      ref={(el) => (sectionsRef.current[i] = el)}
    >
      <h2 className="orange">Education &amp; Certifications</h2>
      {educationData.map((item) => (
        <div key={item.title} className="ListCont">
          <h3>{item.title}</h3>
          {item.org && <span className="fontThin">{item.org}</span>}
          {item.duration && <span className="fontThin">{item.duration}</span>}
        </div>
      ))}
    </section>
  );

  // Mobile render
  if (isMobile) {
    return (
      <>
        {renderAbout(0)}
        {renderResume(1)}
        {renderSkills(2)}
        {renderExperience(3)}
        {renderProjects(4)}
        {renderEducation(5)}
      </>
    );
  }

  // Desktop render
  return (
    <div className="CvRow">
      <div>
        {renderProfile(0)}
        {renderResume(1)}
        {renderSkills(2)}
      </div>
      <div>
        {renderAbout(3)}
        {renderExperience(4)}
        {renderProjects(5)}
        {renderEducation(6)}
      </div>
    </div>
  );
};

const ABOUT =
  "Multimedia Engineer, UX/UI Designer and Front-End Developer working at the intersection of interactive design, programming and 3D art. I specialise in agile methodologies, user research, React.js component development and immersive experiences (WebGL/Unity). I was part of the post-production team on a Latin Grammy winning project, and I have a solid track record of streamlining workflows between creative and technical teams.";

const RESUME_URL =
  "https://drive.google.com/file/d/1IehKE1PrvAyW_GlKtuqq7c0j2W3L8mMT/view?usp=drive_link";

const skillGroups = [
  {
    title: "UX/UI & Product Design",
    items: [
      "Figma",
      "Adobe XD",
      "Design Systems",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
      "Diegetic UI",
      "User Research",
    ],
  },
  {
    title: "Front-End Development",
    items: [
      "JavaScript (ES6+)",
      "React.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Web Animation",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "3D, VFX & Visual Experiences",
    items: [
      "Blender",
      "Unity",
      "WebGL (learning)",
      "Modeling",
      "Digital Sculpting",
      "Low-Poly Optimization",
      "Motion Graphics",
      "Rigging",
      "After Effects",
    ],
  },
  {
    title: "Integration & Hardware",
    items: [
      "Arduino",
      "IoT",
      "Java",
      "Python",
      "Databases",
      "Cross-functional teamwork",
    ],
  },
];

const experienceData = [
  {
    company: "Alta Elite",
    position: "UX/UI Designer & Multimedia Designer",
    duration: "March 2025 - Present · Remote",
    highlights: [
      "Lead the UX/UI design of innovation apps and digital wallets.",
      "Build and maintain scalable design systems, keeping hand-off and communication with the front-end team smooth.",
      "Integrate dynamic visuals and marketing narratives that enrich the interactive experience.",
    ],
  },
  {
    company: "Redpoint Producciones",
    position: "VFX & 3D Artist",
    duration: "September 2024 · Remote",
    highlights: [
      "Part of the post-production and VFX team for Alejandro Sanz’s “Palmeras en el jardín”, winner of the Latin Grammy for Record of the Year.",
      "Worked closely with the direction and editing teams to integrate high-fidelity 3D elements and visual effects under international music industry standards.",
    ],
  },
  {
    company: "Kaleido Lab",
    position: "Multimedia Engineer (UX/UI & 3D)",
    duration: "August 2022 - December 2022 · Colombia",
    highlights: [
      "Led diegetic UI design for video games, pairing usability principles with narrative immersion and 3D rendering.",
      "Owned rendering, optimization and cinematic assembly in game engines, connecting gameplay with intuitive interactive design.",
    ],
  },
  {
    company: "Cacumen Post S.A.S",
    position: "2D/3D Animator, VFX Artist & UI Designer",
    duration: "March 2022 - October 2022 · Colombia",
    highlights: [
      "Ran full 3D production pipelines, character animation and high-end visual effects.",
      "Designed user interfaces for informational platforms and digital experiences at government and institutional events.",
    ],
  },
  {
    company: "BTiLab - Rebus Technology S.A.S",
    position: "Project Manager & UX Designer",
    duration: "July 2021 - May 2022 · Colombia",
    highlights: [
      "Managed the lifecycle of digital projects from discovery through delivery, aligning client needs with business goals.",
      "Designed digital products and validated their usability through user testing and semi-structured interviews, reducing interaction friction.",
    ],
  },
  {
    company: "Universidad Autónoma de Occidente",
    position: "Multimedia Production Assistant",
    duration: "January 2020 - September 2021 · Cali, Colombia",
    highlights: [
      "Produced animation, motion graphics and visual effects supporting the digitisation of more than a hundred courses during the shift to remote education.",
    ],
  },
];

const projectsData = [
  {
    title: "Local IoT System with Web Interface",
    description:
      "End-to-end local network connecting Arduino hardware to a custom Java web server and database, unifying physical data collection with digital visualisation across front-end, back-end and hardware.",
  },
  {
    title: "Interactive Front-End Portfolio",
    description:
      "Responsive single page application built with React and advanced CSS animation, designed to showcase UX/UI and 3D work at high fidelity with optimised performance.",
  },
];

const educationData = [
  {
    title: "Multimedia Engineering",
    org: "Universidad Autónoma de Occidente",
    duration: "2015 - 2021",
  },
  {
    title: "3D Animation Specialisation",
    org: "AnimationGym",
    duration: "Nov 2021 - Jun 2022",
  },
  {
    title: "Professional Blender & Game Production Course",
    org: "",
    duration: "",
  },
  {
    title: "Asynchronous JavaScript · Professional Scrum",
    org: "Platzi",
    duration: "2023",
  },
];

export default Curriculum;
