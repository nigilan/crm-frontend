import React, { Component, Fragment } from 'react';
import faker from 'faker';
import { Card, Icon } from 'semantic-ui-react';

export default class UserInfo extends Component {
  render() {
    return (
      <Fragment>
        <Card>
          <Card.Content>
            <Card.Header>About {faker.name.findName()}</Card.Header>
            <Card.Description>{faker.lorem.sentence()}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name="phone" />
            {faker.phone.phoneNumber()}
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Card.Header>Follow up on</Card.Header>
            <Card.Description>
              <p>A <a href="/interaction">sale interaction</a> by {faker.date.future().toISOString()}</p>
              <p>A <a href="/interaction">proposal interaction</a> by {faker.date.future().toISOString()}</p>
            </Card.Description>
          </Card.Content>
        </Card>
      </Fragment>
    );
  }
}
