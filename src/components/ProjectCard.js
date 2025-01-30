import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl ,link}) => {
  return (
    <Col size={12} sm={6} md={4}onClick={()=>{window.open(link,"_blank")}}>
      <div className="proj-imgbx" style={{ width: "100%", height: "250px", overflow: "hidden", borderRadius: "10px" }}>
      <img 
          src={imgUrl} 
          alt={title} 
          style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}