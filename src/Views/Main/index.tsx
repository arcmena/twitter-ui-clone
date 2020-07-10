import React, { FunctionComponent } from 'react';

import ProfilePage from '../../components/ProfilePage';

import {
    Container,
    Header,
    BackIcon,
    ProfileInfo,
    BottomMenu,
    HomeIcon,
    SearchIcon,
    BellIcon,
    EmailIcon,
} from './styles';

const Main: FunctionComponent = () => {
    return (
        <Container>
            <Header>
                <button>
                    <BackIcon />
                </button>
                <ProfileInfo>
                    <strong>Marcelo Mena</strong>
                    <span>32165548 Tweets</span>
                </ProfileInfo>
            </Header>

            <ProfilePage />

            <BottomMenu>
                <HomeIcon className="active" />
                <SearchIcon />
                <BellIcon />
                <EmailIcon />
            </BottomMenu>
        </Container>
    );
};

export default Main;
