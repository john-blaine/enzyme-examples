// Libs
import React, { PropTypes } from 'react';

// Components
import UserInformation from './UserInformation';
import UserImage from './UserImage';

const UserDetails = ({ imageUrl = '', username = '', name = '', bio = '', location = '' }) => ((
  <div className="gh-widget-container">
    <UserImage
      imageSource={imageUrl}
      altText={`${username} avatar`}
    />
    <UserInformation
      name={name}
      bio={bio}
      location={location}
    />
  </div>
));

export default UserDetails;
