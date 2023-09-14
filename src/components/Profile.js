import styled from "../css/Profile.module.css";
import PropTypes from "prop-types";

function Profile({ name, src }) {
  return (
    <div>
      <h1>{`Character Name: ${name}`}</h1>
      <div className={styled.imgbox}>
        <img className={styled.img} src={src} alt="" />
      </div>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};

export default Profile;
