import React from 'react';
import { useParams } from 'react-router-dom';
const profileData = {
  velopert: {
    name: 'John',
    description: 'Front end Engineer',
  },
  homer: {
    name: 'Homer Simpson',
    description: 'the main character of the animation The Simpsons',
  },
};
const Profile = () => {
  const { username } = useParams();
  const profile = profileData[username];
  if (!profile) {
    return <div>존재하지 않는 유저입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
