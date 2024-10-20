import propTypes from 'prop-types'
export default function About({ name, bio, profilePicture }) {
    return (
      <section className="about" id="about">
        <img src={'/pfp1.png'} alt= "profile" className="profile-picture" />
        <h2>About Me</h2>
        <p>{bio}</p>
      </section>
    );
  }

About.propTypes = {
    name: propTypes.string,
    bio: propTypes.string,
}