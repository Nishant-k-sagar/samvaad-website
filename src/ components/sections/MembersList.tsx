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
    <section className="members-list-section">
      <div className="container">
        <h2>{title}</h2>
        
        <div className={`members-${layout}`}>
          {members.map(member => (
            <div key={member.id} className="member-item">
              <div className="member-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <p className="member-role">{member.role}</p>
                {member.bio && <p className="member-bio">{member.bio}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembersList;
