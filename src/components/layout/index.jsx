import React, { Component } from 'react';
import faker from 'faker';
import {
  Container, Divider, Grid, Header, Icon
} from 'semantic-ui-react';

import UserMenu from '../user_menu';
import UserInfo from '../user_info';

export default class Layout extends Component {
  render() {
    return (
      <Container>
        <Grid>
          <Grid.Row columns={16}>
            <Grid.Column width={3}>
              <UserMenu />
            </Grid.Column>
            <Grid.Column stretched width={9}>
              {faker.lorem.paragraph()}
              {faker.lorem.paragraph()}
              {faker.lorem.paragraph()}
              {faker.lorem.paragraph()}
              {faker.lorem.paragraph()}
              {faker.lorem.paragraph()}
              {faker.lorem.paragraph()}
              {faker.lorem.paragraph()}
            </Grid.Column>
            <Grid.Column width={4}>
              <UserInfo />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
