import React, { FunctionComponent } from 'react';
import StickyBox from 'react-sticky-box';

import List from '../../components/List';
import FollowSuggestion from '../../components/FollowSuggestion';
import News from '../../components/News';

import {
    Container,
    SearchWrapper,
    SearchIcon,
    SearchInput,
    Body,
} from './styles';

const SideBar: FunctionComponent = () => {
    return (
        <Container>
            <SearchWrapper>
                <SearchInput placeholder="Search Twitter" />
                <SearchIcon />
            </SearchWrapper>

            <StickyBox>
                <Body>
                    <List
                        title="What’s happening"
                        elements={[
                            <News />,
                            <News />,
                            <News />,
                            <News />,
                            <News />,
                            <News />,
                            <News />,
                            <News />,
                            <News />,
                        ]}
                    />
                    <List
                        title="Who to follow"
                        elements={[
                            <FollowSuggestion
                                name="Elon Musk"
                                nickname="@elonmusk"
                            />,
                            <FollowSuggestion
                                name="Adam Savage"
                                nickname="@therealadamsavage"
                            />,
                            <FollowSuggestion
                                name="Zack Snyder"
                                nickname="@ZackSnyder"
                            />,
                        ]}
                    />
                </Body>
            </StickyBox>
        </Container>
    );
};

export default SideBar;
