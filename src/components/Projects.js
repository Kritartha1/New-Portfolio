import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import vidChat from "../assets/img/vidChat.png";
import interview2 from "../assets/img/interview2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import azure from "../assets/img/azure.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const backend=[
    {
      title: "Aadhaar verification site",
      description:
        "Backend done with DOTNet core including MSSQL database",
      imgUrl: "https://fabric.inc/wp-content/uploads/2021/08/frontend-backend.png",
      url:"https://github.com/Kritartha1/AdhaarApi",

    },
    {
      title: "Doctor Appointment system",
      description:
      "Can book a slot with doctor. Backend done with DOTNet core including MSSQL database",
      imgUrl: "https://fabric.inc/wp-content/uploads/2021/08/frontend-backend.png",
      url:"https://github.com/Kritartha1/DocPatientAppointment",

    }
    ,
    {
      title: "Face Recognition system",
      description:
      "Used Python and OpenCV",
      imgUrl: "https://fabric.inc/wp-content/uploads/2021/08/frontend-backend.png",
      url:"https://github.com/Kritartha1/OPEN-CV",

    }
  ]
  const projects = [
    {
      title: "Discord Clone",
      description:
        "Tried to implement the responsiveness of Discord with the help of Angular",
      imgUrl: projImg6,
      url:"https://github.com/Kritartha1/HexusUI",
    },
    {
      title: "IdentifyMe",
      description: "Address verification site with the help of Aadhaar card",
      imgUrl: projImg7,
      url:"https://github.com/Kritartha1/AdhaarApi",
    },
    {
      title: "Virtual Painter",
      description:
        "Can virtualy draw with the help o hand gestures in front of camera",
      imgUrl: "https://i.ytimg.com/vi/ZiwZaAVbXQo/maxresdefault.jpg",
      url:"https://github.com/Kritartha1/VirtualAI_painter",
    },
    
    {
      title: "Video chatting site",
      description: "Made with the help of WebRTC and React",
      imgUrl: vidChat,
      url:"https://github.com/Kritartha1/Video-chat-app",
    },
    {
      title: "InterviewAI",
      description: "Mock interview site with AI with the help of Python, React and OpenAI",
      imgUrl: interview2,
      url:"https://github.com/Kritartha1/64bit",
    },
    
  ];

  const certificates=[
    {
      title: " Build ASP.NET Core Web API - Scratch To Finish (.NET8 API)  ",
      description: "Course",
      imgUrl: 'https://udemy-certificate.s3.amazonaws.com/image/UC-78e5f5f9-13f5-4809-b56b-03b1c25fc374.jpg?v=1717351780000',
      url:"https://www.udemy.com/certificate/UC-78e5f5f9-13f5-4809-b56b-03b1c25fc374/",
      //udemy dot net

    },
    {
      title: "AZ-900",
      description: "Microsoft Certified: Azure Fundamentals",
      imgUrl: azure,
      url:"https://learn.microsoft.com/en-us/users/kritarthanath-6017/credentials/78a354a5215246ec?ref=https%3A%2F%2Fwww.linkedin.com%2F",
      //azure
    }
  ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                  
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">BackEnd</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Courses/Certificates</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      <Row>
                          {backend.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      <Row>
                          {certificates.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
