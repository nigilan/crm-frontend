import React, { Component, Fragment } from 'react';
import faker from 'faker';
import {
  Image, Menu, Segment, Search, Form, Input,
} from 'semantic-ui-react';

export default class UserMenu extends Component {
  render() {
    return (
      <Fragment>
        <Form>
          <Form.Group widths='equal'>
            <Form.Field
              id='form-input-control-search'
              control={Input}
              placeholder='Search for contact'
            />
          </Form.Group>
        </Form>
        <Menu fluid vertical tabular>
          <Menu.Item as="a" name="New contact" icon="plus" />
          <Menu.Item as="a" name={faker.name.findName()} active />
          <Menu.Item as="a" name={faker.name.findName()} />
          <Menu.Item
            as="a"
            name={faker.name.findName()}
          />
          <Menu.Item
            as="a"
            name={faker.name.findName()}
          />
        </Menu>
      </Fragment>
    );
  }
}
