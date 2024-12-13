import employees from './employees';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
    const navigate = useNavigate();

    const handleRedirect = (employee) => {
        navigate('/resume', { state: employee });
    };

    return (
        <>
            <div className="company-profile">
                <div className="company-structure">
                    <h2>Our Team</h2>
                    <p>Meet the talented individuals that make Keystaxx a unique place to work and grow.</p>

                    <div className="employee-list">
                        {employees.map((employee) => (
                            <button
                                key={employee.id}
                                className="position"
                                onClick={() => handleRedirect(employee)}
                            >
                                {employee.position} - {employee.name}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="contact-info">
                    <h2>Contact Us</h2>
                    <p>Want to learn more about our company or reach out to us? Get in touch:</p>
                    <ul>
                        <li>Email: <a href="mailto:info@keystaxx.com">keystaxx@gmail.com</a></li>
                        <li>LinkedIn: <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">Keystaxx</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}
