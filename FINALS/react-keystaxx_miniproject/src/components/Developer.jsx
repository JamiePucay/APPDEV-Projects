import pfp from '../assets/pfp.png';

export default function Developer() {
    return (
        <>
            <div className="developer-container">
                <div className="developer-profiles">
                    <h2>Developer</h2>
                    <div className="developer-profile">
                        <h3>Jamie Amor Pucay</h3>
                        <img src={pfp} className="developer-photo"/>
                        <p>
                            Jamie is a creative web designer with a keen eye for detail and a strong background in front-end development. 
                            She works closely with both designers and developers to ensure that web applications are not only functional but also visually captivating and user-friendly. Jamie enjoys the challenge of turning complex ideas into elegant, intuitive designs.
                        </p>
                        <p>
                            <strong>Design Philosophy:</strong> The developer believes that design should serve the user. She focuses on creating clean, responsive, and accessible designs that enhance the overall user experience. When she's not designing, she's diving into typography, and animation.
                        </p>
                    </div>
                </div>

                <div className="skills-technologies">
                    <h2>Skills and Technologies</h2>
                    <ul>
                        <li><strong>Front-end:</strong> HTML5, CSS, JavaScript, React.js</li>
                        <li><strong>Back-end:</strong> Node.js, Php</li>
                        <li><strong>Version Control:</strong> Git, GitHub</li>
                        <li><strong>Design:</strong> Figma, Adobe XD, Photoshop</li>
                    </ul>
                </div>

                <div className="contact-info">
                    <h2>Contact Me</h2>
                    <p>I'd love to hear from you! Whether you're interested in collaborating, have a project idea, or just want to chat about tech, feel free to contact me:</p>
                    <ul>
                        <li>Email: <a href="mailto:info@keystaxx.com">jamie@gmail.com</a></li>
                        <li>LinkedIn: <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">Jamie Amor Pucay</a></li>
                    </ul>
                    <p>Follow me on social media for the latest updates:</p>
                    <ul>
                        <li>Twitter: <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">@Jamie</a></li>
                        <li>Instagram: <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">@Amor</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}
