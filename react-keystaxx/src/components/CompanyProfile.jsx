import { Link } from 'react-router-dom';

const CompanyProfile = () => {
  const employees = [
    { id: 1, name: 'Pepito Manaloto', position: 'CEO' },
    { id: 2, name: 'Lenny Robredo', position: 'Founder' },
    { id: 2, name: 'Jamie Amor Pucay', position: 'Developer' },
  ];

  return (
    <div>
      <h1>Company Profile</h1>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            <Link to={`/employee/${employee.id}`}>{employee.name}</Link> - {employee.position}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyProfile;
