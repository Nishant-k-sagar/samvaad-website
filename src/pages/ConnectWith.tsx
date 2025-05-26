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
    <div>
      <section className="bg-gray-200 py-16 mb-12 text-center mt-[-70px] flex justify-center items-center h-70">
        <div className="w-[90%] max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2 text-gray-900">Our PORs</h1>
          <p className="text-lg">Meet the passionate individuals leading the club at the forefront of creativity and cultural exchange</p>
        </div>
      </section>
      
      <section className="py-12">
        <div className="w-[90%] max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Current Position Holders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreTeam.map(member => (
              <div key={member.id} className="flex flex-col h-full bg-white rounded shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-[5px]">
                <div className="h-[250px] overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-500 mb-2">{member.role}</p>
                  <p className="leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="w-[90%] max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Our Previous Position holders</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {volunteers.map(volunteer => (
              <div key={volunteer.id} className="text-center">
                <img 
                  src={volunteer.image} 
                  alt={volunteer.name} 
                  className="w-[120px] h-[120px] rounded-full object-cover mx-auto mb-2" 
                />
                <h3 className="text-lg font-semibold">{volunteer.name}</h3>
                <p className="text-gray-500">{volunteer.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Members;
