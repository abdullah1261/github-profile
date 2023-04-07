import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div className="user-card">
      <div className="user-avatar">
        <a href={user.html_url} target="_blank" rel="noreferrer">
          <img src={user.avatar_url} alt={user.login} />
        </a>
      </div>
      <div className="user-info">
        <h2>{user.login}</h2>
        <a href={user.html_url} target="_blank" rel="noreferrer">
          {user.html_url}
        </a>
      </div>
    </div>
  );
};

export default UserProfile;
