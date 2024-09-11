export default function About({ name, bio, profilePicture }) {
    return (
      <section className="about" id="about">
        <img src={profilePicture} alt={`${name}'s profile`} className="profile-picture" />
        <h2>About Me</h2>
        <p>{bio}</p>
      </section>
    );
  }
  