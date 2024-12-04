import { useState } from 'react';

const DeveloperPage = () => {
  const [vouchCount, setVouchCount] = useState(0);

  return (
    <div>
      <h1>Developer Profile</h1>
      <p>Name: Jamie Amor Pucay</p>
      <p>Web Developer</p>
      <button onClick={() => setVouchCount(vouchCount + 1)}>Vouch</button>
      <p>Vouch Points: {vouchCount}</p>
    </div>
  );
};

export default DeveloperPage;
