import React, { FunctionComponent } from 'react';

import { Container, Avatar, Info, FollowButton } from './styles';

interface Props {
    name: string;
    nickname: string;
}

const FollowSuggestion: FunctionComponent<Props> = ({ name, nickname }) => {
    return (
        <Container>
            <div>
                <Avatar />
                <Info>
                    <strong>{name}</strong>
                    <span>{nickname}</span>
                </Info>
            </div>
            <FollowButton outlined>Follow</FollowButton>
        </Container>
    );
};

export default FollowSuggestion;
