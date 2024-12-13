import { useLocation } from 'react-router-dom';

export default function Resume() {
    const location = useLocation();
    const employee = location.state;

    return (
        <>
            <div className="resume-container">
                <div className="resume-profiles">
                    <h2>{employee.position}</h2>
                    <div className="resume-profile">
                        <h3>{employee.name}</h3>
                        <img
                            src={employee.photo || 'https://via.placeholder.com/150'} 
                            alt={employee.name}
                            className="employee-photo"
                        />
                        <p>{employee.description}</p>
                        <p>
                            <strong>Philosophy:</strong> {employee.philosophy}
                        </p>
                    </div>
                </div>

                <div className="skills-technologies">
                    <h2>Skills and Expertise</h2>
                    <ul>
                        {employee.skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>

                <div className="contact-info">
                    <h2>Contact Info</h2>
                    <p>You can reach out to {employee.name} through the following channels:</p>
                    <ul>
                        <li>Email: <a href={`mailto:${employee.contactInfo.email}`}>{employee.contactInfo.email}</a></li>
                        <li>LinkedIn: <a href={employee.contactInfo.linkedIn} target="_blank" rel="noopener noreferrer">Visit LinkedIn</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}
