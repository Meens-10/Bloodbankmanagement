import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center py-5">
            <Container>
                <Outlet />
            </Container>
        </div>
    );
};

export default AuthLayout;
