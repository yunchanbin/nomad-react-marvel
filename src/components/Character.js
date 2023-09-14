import { Link } from "react-router-dom";
import styled from "../css/Character.module.css";
import PropTypes from "prop-types";

function Character({ id, name, img }) {
  return (
    <div className={styled.div}>
      <Link to={`/character/${id}`}>
        <img
          className={styled.img}
          src={`${img.path}.${img.extension}`}
          alt=""
        />
        <span className={styled.characterName}>{name}</span>
      </Link>
    </div>
  );
}

Character.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.objectOf(PropTypes.string).isRequired
};

export default Character;
