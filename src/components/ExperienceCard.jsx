import PropTypes from "prop-types";

import { FaExternalLinkAlt } from "react-icons/fa";
// import { motion } from "framer-motion";

const ExperienceCard = (props) => {
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
        <p>Duration: {post.duration}</p>
        <p className="post-desc">{post.description}</p>
        <h4>My Duties</h4>
        <ul>
          {post.duty.map((duty, index) => (
            <li key={index}>{duty}</li>
          ))}
        </ul>
      </div>
      <div className="project-links">
        <a href={post.website}>
          <FaExternalLinkAlt />
        </a>
      </div>
    </div>
  );
};

ExperienceCard.propTypes = {
  post: PropTypes.object.isRequired,
};

export default ExperienceCard;
