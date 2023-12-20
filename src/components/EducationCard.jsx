import PropTypes from "prop-types";

import { FaExternalLinkAlt } from "react-icons/fa";
// import { motion } from "framer-motion";

const EducationCard = (props) => {
  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: { opacity: 1, transition: { duration: 0.8 } },
  // };
  const post = props.post;
  return (
    <div className="project-card post-card">
      <div className="project-title">
        <h2 className="post-title">{post.name}</h2>
      </div>
      <div className="project-description">
        <p className="post-desc">{post.address}</p>
        <p className="post-desc">{post.degree}</p>
        <p className="post-desc">{post.duration}</p>
        <p>{post.result}</p>
        
      </div>
    </div>
  );
};

EducationCard.propTypes = {
  post: PropTypes.object.isRequired,
};

export default EducationCard;
