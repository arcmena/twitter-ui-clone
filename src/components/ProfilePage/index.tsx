import React, { FunctionComponent } from 'react';

import Feed from '../Feed';

import {
    Container,
    Banner,
    Avatar,
    ProfileData,
    Editbutton,
    LocationIcon,
    CakeIcon,
    Followage,
} from './styles';

const ProfilePage: FunctionComponent = () => {
    return (
        <Container>
            <Banner>
                <Avatar />
            </Banner>

            <ProfileData>
                <Editbutton outlined>Edit Profile</Editbutton>
                <h1>Marcelo Mena</h1>
                <h2>@arcmena</h2>

                <p>Web Developer</p>

                <ul>
                    <li>
                        <LocationIcon />
                        São Paulo, Brazil
                    </li>
                    <li>
                        <CakeIcon />
                        Born May 11th, 2000
                    </li>
                </ul>
                <Followage>
                    <span>
                        <strong>8974</strong> following
                    </span>
                    <span>
                        <strong>2m</strong> followers
                    </span>
                </Followage>
            </ProfileData>

            <Feed />
        </Container>
    );
};

export default ProfilePage;
