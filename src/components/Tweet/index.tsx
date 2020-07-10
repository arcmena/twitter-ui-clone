import React, { FunctionComponent } from 'react';

import {
    Container,
    Retweeted,
    Body,
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImageContent,
    Icons,
    Status,
    CommentIcon,
    RetweetIcon,
    LikesIcon,
} from './styles';

const Tweet: FunctionComponent = () => {
    return (
        <Container>
            <Retweeted>You Retweeted</Retweeted>
            <Body>
                <Avatar />
                <Content>
                    <Header>
                        <strong>Github</strong>
                        <span>@github</span>
                        <Dot />
                        <time>09th of July</time>
                    </Header>

                    <Description>Hello World!</Description>

                    <ImageContent />
                    <Icons>
                        <Status>
                            <CommentIcon />
                            18
                        </Status>
                        <Status>
                            <RetweetIcon />
                            123
                        </Status>
                        <Status>
                            <LikesIcon />
                            +1m
                        </Status>
                    </Icons>
                </Content>
            </Body>
        </Container>
    );
};

export default Tweet;
