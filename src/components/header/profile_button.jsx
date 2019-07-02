import faker from 'faker';
import React from 'react';
import { Dropdown, Image } from 'semantic-ui-react';

const trigger = (
  <span>
    <Image avatar src={faker.internet.avatar()} />
  </span>
);

const options = [
  { key: 'settings', text: 'Settings' },
  { key: 'sign-out', text: 'Sign Out' },
];

const ProfileButton = () => (
  <Dropdown trigger={trigger} options={options} pointing="top right" icon={null} />
);

export default ProfileButton;
