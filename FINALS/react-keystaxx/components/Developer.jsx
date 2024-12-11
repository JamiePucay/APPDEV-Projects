import pfp from '../assets/pfp.png';

export default function Developer() {
    return (
        <>
            <div className="developer-container">
                <div className="company-info">
                    <h1>Keystaxx</h1>
                    <p>
                    Redefining the Art of Typing: At Keystaxx, we create premium mechanical and traditional keyboards that combine cutting-edge technology with personal flair. Our mission is to deliver meticulously designed, customizable typing experiences that cater to both passionate hobbyists and professionals. We believe in the power of precision, creativity, and comfort to elevate every keystroke.
                    </p>
                </div>

                <div className="developer-profiles">
                    <h2>Developer</h2>
                    <div className="developer-profile">
                        <h3>Jamie Amor Pucay</h3>
                        <img src={pfp}  alt="Jamie" className="developer-photo"/>
                        <p>
                            Jamie is a creative web designer with a keen eye for detail and a strong background in front-end development. 
                            She works closely with both designers and developers to ensure that web applications are not only functional but also visually captivating and user-friendly. Jamie enjoys the challenge of turning complex ideas into elegant, intuitive designs.
                        </p>
                        <p>
                            <strong>Key Skills:</strong> HTML5, CSS3, JavaScript, React, Responsive Design, Adobe XD, Figma
                        </p>
                        <p>
                            <strong>Design Philosophy:</strong> The developer believes that design should serve the user. She focuses on creating clean, responsive, and accessible designs that enhance the overall user experience. When she's not designing, she's diving into typography, animation, and web accessibility best practices.
                        </p>
                    </div>
                </div>

                <div className="skills-technologies">
                    <h2>Our Skills and Technologies</h2>
                    <p>At Keystaxx, we are constantly evolving with the latest technologies and best practices to ensure we deliver the best results. Our tech stack includes:</p>
                    <ul>
                        <li><strong>Front-end:</strong> HTML5, CSS3, JavaScript, React.js</li>
                        <li><strong>Back-end:</strong> Node.js, Express, MongoDB</li>
                        <li><strong>Version Control:</strong> Git, GitHub</li>
                        <li><strong>Design:</strong> Figma, Adobe XD, Photoshop</li>
                        <li><strong>APIs:</strong> RESTful APIs, GraphQL</li>
                        <li><strong>Testing:</strong> Jest, Mocha, Cypress</li>
                        <li><strong>DevOps:</strong> Docker, Kubernetes</li>
                    </ul>
                </div>

                <div className="contact-info">
                    <h2>Contact Us</h2>
                    <p>We'd love to hear from you! Whether you're interested in collaborating, have a project idea, or just want to chat about tech, feel free to contact us:</p>
                    <ul>
                        <li>Email: <a href="mailto:info@keystaxx.com">info@keystaxx.com</a></li>
                        <li>LinkedIn: <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">Jamie Amor Pucay</a></li>
                    </ul>
                    <p>Follow us on social media for the latest updates:</p>
                    <ul>
                        <li>Twitter: <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">@Keystaxx</a></li>
                        <li>Instagram: <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">@Keystaxx</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}
