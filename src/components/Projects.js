import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import project1 from "../assets/Projects/Screenshot 2025-01-30 210044.png";
import projImg2 from "../assets/Projects/Screenshot 2025-02-10 163932.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    { 
      title: "WD Compiler",
      description: "A React-based live code editor that lets users instantly preview HTML, CSS, and JavaScript in real-time, perfect for testing and learning web development.",
      imgUrl: project1,
      link:"https://github.com/himavarshini28/WD-compiler",
    },
    {
      title: "Quizzy",
      description: "A dynamic web-based quiz app with gamification features, including a timer, progress animations, and a global leaderboard. Integrated API-based quiz fetching, real-time scoring, and smooth UI/UX using React, Tailwind CSS, and Framer Motion." ,
      imgUrl: projImg2,
      link:"https://github.com/himavarshini28/Quiz-assignment",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Row>
                  {
                    projects.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          {...project}
                        />
                      )
                    })
                  }
                </Row>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background"></img>
    </section>
  )
}
