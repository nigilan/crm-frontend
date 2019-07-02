import React, { Component, Fragment } from 'react';
import faker from 'faker';
import { Card, Icon } from 'semantic-ui-react';

export default class UserInfo extends Component {
  render() {
    return (
      <Card>
        <Card.Content header={`About ${faker.name.findName()}`} />
        <Card.Content description={faker.lorem.sentence()} />
        <Card.Content extra>
          <Icon name="phone" />{faker.phone.phoneNumber()}
        </Card.Content>
      </Card>
    );
  }
}
