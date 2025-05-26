import React from 'react';
import type { TeamMember } from '../../types';

interface MembersListProps {
  members: TeamMember[];
  title: string;
  layout?: 'grid' | 'list';
}

const MembersList: React.FC<MembersListProps> = ({ 
  members, 
  title, 
  layout = 'grid' 
}) => {
  return (
    <section className="py-12">
      <div className="w-[90%] max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">{title}</h2>
        
        <div className={`${layout === 'grid' 
          ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
          : 'space-y-6'}`}
        >
          {members.map(member => (
            <div key={member.id} className="bg-white rounded shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
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
                {member.bio && <p className="leading-relaxed">{member.bio}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembersList;
