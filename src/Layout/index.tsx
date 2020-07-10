import React, { FunctionComponent } from 'react';

import MenuBar from '../Views/MenuBar';
import Main from '../Views/Main';
import SideBar from '../Views/SideBar';

import { Container, Whrapper } from './styles';

const Layout: FunctionComponent = () => {
    return (
        <Container>
            <Whrapper>
                <MenuBar />
                <Main />
                <SideBar />
            </Whrapper>
        </Container>
    );
};

export default Layout;
