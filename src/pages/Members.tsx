import type { TeamMember } from '../types';

const Members: React.FC = () => {
  // Mock data for team members
  const coreTeam: TeamMember[] = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'President',
      image: '/images/team/member1.jpg',
      bio: 'Priya is a passionate cultural advocate with 5 years of experience in organizing cultural events.'
    },
    {
      id: 2,
      name: 'Rahul Verma',
      role: 'Vice President',
      image: '/images/team/member2.jpg',
      bio: 'Rahul is a literature enthusiast who brings creative ideas to our events and activities.'
    },
    {
      id: 3,
      name: 'Ananya Patel',
      role: 'Cultural Secretary',
      image: '/images/team/member3.jpg',
      bio: 'Ananya is a classical dancer who manages our performance events and workshops.'
    },
    {
      id: 4,
      name: 'Vikram Singh',
      role: 'Treasurer',
      image: '/images/team/member4.jpg',
      bio: 'Vikram handles the financial aspects of our club and ensures smooth operations.'
    }
  ];
  
  const volunteers: TeamMember[] = [
    {
      id: 5,
      name: 'Neha Gupta',
      role: 'Event Coordinator',
      image: '/images/team/member5.jpg'
    },
    {
      id: 6,
      name: 'Arjun Kumar',
      role: 'Media Manager',
      image: '/images/team/member6.jpg'
    },
    {
      id: 7,
      name: 'Meera Joshi',
      role: 'Outreach Coordinator',
      image: '/images/team/member7.jpg'
    },
    {
      id: 8,
      name: 'Ravi Desai',
      role: 'Technical Support',
      image: '/images/team/member8.jpg'
    }
  ];

  return (
    <div className="members-page">
      <section className="page-header">
        <div className="container">
          <h1>Our Team</h1>
          <p>Meet the passionate individuals behind Samvaad Cultural Club</p>
        </div>
      </section>
      
      <section className="core-team">
        <div className="container">
          <h2>Core Team</h2>
          <div className="team-grid">
            {coreTeam.map(member => (
              <div key={member.id} className="team-member">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="volunteers">
        <div className="container">
          <h2>Our Volunteers</h2>
          <div className="volunteers-grid">
            {volunteers.map(volunteer => (
              <div key={volunteer.id} className="volunteer-card">
                <img src={volunteer.image} alt={volunteer.name} />
                <h3>{volunteer.name}</h3>
                <p>{volunteer.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="join-team">
        <div className="container">
          <h2>Join Our Team</h2>
          <p>Interested in volunteering with Samvaad? We're always looking for passionate individuals to join our team.</p>
          <button className="cta-button">Apply to Volunteer</button>
        </div>
      </section>
    </div>
  );
};

export default Members;
