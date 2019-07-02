import React, { Component } from 'react';
import faker from 'faker';
import {
  Container, Form, Feed, TextArea, Button, Segment, Header,
} from 'semantic-ui-react';
import Autocomplete from 'react-autocomplete';

const interactionTypes = ['sale', 'proposal', 'introduction'];
export default class Interactions extends Component {
  render() {
    return (
      <Container>
        <Header as="h3" attached="top">
          Add an interaction
        </Header>
        <Segment attached>
          <Form>
            <p>What was the interaction about?</p>
            <p>
              <Autocomplete
                getItemValue={item => item.label}
                items={[
                  { label: 'sale' },
                  { label: 'proposal' },
                  { label: 'introduction' },
                ]}
                renderItem={(item, isHighlighted) => (
                  <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                    {item.label}
                  </div>
                )}
                value=""
                onChange={() => {}}
                onSelect={() => {}}
              />
            </p>
            <p>Do you want to add additional details?</p>
            <p><TextArea fluid placeholder="Additional details" /></p>
            <p><Button primary>Add interaction</Button></p>
          </Form>
        </Segment>
        <Feed>
          {[1, 2, 3, 4, 5].map(item => (
            <Feed.Event key={item}>
              <Feed.Content content={faker.lorem.sentence()}>
                <Feed.Summary>
                  You added a
                  {' '}
                  {interactionTypes[Math.floor(Math.random() * interactionTypes.length)]}
                  {' '}
                  interaction
                  <Feed.Date>3 days ago</Feed.Date>
                </Feed.Summary>
                <Feed.Extra text>
                  {faker.lorem.paragraph()}
                </Feed.Extra>
                <Feed.Meta>
                  {item === 2 ? 'Added a followup' : <a href="/interaction">Follow up</a>}
                </Feed.Meta>
              </Feed.Content>
            </Feed.Event>
          ))}
        </Feed>

      </Container>
    );
  }
}
