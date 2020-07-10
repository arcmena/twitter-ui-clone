import React, { FunctionComponent } from 'react';

import Button from '../../components/Button';

import {
    Container,
    Topside,
    SpaIcon,
    MenuButton,
    HomeIcon,
    BellIcon,
    EmailIcon,
    FavoriteIcon,
    ProfileIcon,
    BotSide,
    Avatar,
    ProfileData,
    ExitIcon,
} from './styles';

const Menubar: FunctionComponent = () => {
    return (
        <Container>
            <Topside>
                <SpaIcon />
                <MenuButton>
                    <HomeIcon />
                    <span>Home Page</span>
                </MenuButton>
                <MenuButton>
                    <BellIcon />
                    <span>Notifications</span>
                </MenuButton>
                <MenuButton>
                    <EmailIcon />
                    <span>Messages</span>
                </MenuButton>
                <MenuButton>
                    <FavoriteIcon />
                    <span>Favorites</span>
                </MenuButton>
                <MenuButton className="active">
                    <ProfileIcon />
                    <span>Profile</span>
                </MenuButton>
                <Button>
                    <span>Tweet</span>
                </Button>
            </Topside>

            <BotSide>
                <Avatar />

                <ProfileData>
                    <strong>Marcelo Mena</strong>
                    <span>@arcmena</span>
                </ProfileData>

                <ExitIcon />
            </BotSide>
        </Container>
    );
};

export default Menubar;
