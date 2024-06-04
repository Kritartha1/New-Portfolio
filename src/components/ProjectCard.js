import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl ,url}) => {
  
  return (
    <Col size={12} sm={6} md={4} >
      <div className="proj-imgbx" style={{cursor:"pointer"}} onClick={() => window.open(url, '_blank')}  >
        <img src={imgUrl} style={{ objectFit: "fill", height: "300px" }} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
