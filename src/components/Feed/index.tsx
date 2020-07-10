import React, { FunctionComponent } from 'react';

import Tweet from '../Tweet';

import { Container, Tab, Tweets } from './styles';

const Feed: FunctionComponent = () => {
    return (
        <Container>
            <Tab>Tweets</Tab>
            <Tweets>
                <Tweet />
                <Tweet />
                <Tweet />
            </Tweets>
        </Container>
    );
};

export default Feed;
