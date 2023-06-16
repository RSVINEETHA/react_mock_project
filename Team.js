
import React from 'react';
import TeamCard from './TeamCard';

const Team = () => {
  const teamMembers = [
    {
      name: 'Arthmate1',
      position: 'CEO',
      description:" Manages and directs the company toward its primary goals and objectives. Oversees employment decisions at the executive level of the company. Leads a team of executives to consider major decisions including acquisitions, mergers, joint ventures, or large-scale expansion.",
    },
    {
      name: 'Arthmate2',
      position: 'CTO',
      description:" Developing the company's strategy for using technological resources. Ensuring technologies are used efficiently, profitably and securely. Evaluating and implementing new systems and infrastructure.",

    },
    {
      name: 'Arthmate3',
      position: 'Director',
      description:" Developing and executing the company's business strategies. Providing strategic advice to the board and chairperson. Preparing and implementing comprehensive business plans to facilitate achievement.",
    },
    {
      name: 'Arthmate4',
      position: 'Frontend',
      description:"Responsible for managing the team by providing the mentorship and efficiently delivering tasks on time. Create and enhance work processes and guidelines for team members. in large-scale front-end Infrastructure with coordination of the other involved teams in the project.",
    },
    // Add more team members here
  ];

  return (
    <div className='app-content'>
      <h2>Team</h2>
      <div>
        {teamMembers.map((member, index) => (
          <TeamCard
            key={index}
            name={member.name}
            position={member.position}
            description={member.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;

