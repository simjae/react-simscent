import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';

const AppLayout = ({ children }) => {
    return(
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href ="/"><a>SIMSCENT</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href ="/profile"><a>sns</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Input.Search enterButton style={{verticalAlign:"middle"}} />
                </Menu.Item>
                <Menu.Item>
                    <Link href ="/signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    왼쪽메뉴
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    오른쪽 메뉴
                </Col>
            </Row>
        </div>
    );
};

AppLayout.prototype = { 
    children:PropTypes.node.isRequired,

};
export default AppLayout;