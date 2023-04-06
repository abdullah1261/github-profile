import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div>
      <h2>{user.login}</h2>
      <a href={user.html_url} target="_blank" rel="noreferrer">
        <img src={user.avatar_url} alt={`Avatar for ${user.login}`} />
      </a>
    </div>
  );
};

export default UserProfile;
