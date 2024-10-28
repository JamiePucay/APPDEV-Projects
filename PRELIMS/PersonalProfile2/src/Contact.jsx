export default function Contact({ email, socialLinks }) {
    return (
      <section className="contact" id="contact">
        <h2>Contact Me</h2>
        <p>Email me at: <a href={`mailto:${email}`}>{email}</a></p>
        <ul>
          {socialLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">{link.platform}</a>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  