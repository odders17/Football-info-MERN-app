import React, { useState } from "react";

import { Navbar, Nav, Modal, Tab } from "react-bootstrap";

import SignUpForm from "./SignupForm";




const AppNavbar = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Navbar>
        <button onClick={() => setShowModal(true)}>Login/Sign Up</button>
      </Navbar>
      <Modal
        id="modal"
        size="md"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="signup-modal"
      >
        

        <Tab.Container defaultActiveKey="login">
          <Modal.Header closeButton>
            <Modal.Title id="signup-modal">
              <Nav variant="tabs">
                <Nav.Item>
                  <Nav.Link className="btn" eventKey="login">
                    Login
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="btn" eventKey="signup">
                    Sign Up
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body className="bg-gray-100 p-4 m-2 shadow-md rounded-xl">
            <Tab.Content>
              <Tab.Pane eventKey="login">
                <SignUpForm
                  signUpForm={false}
                  handleModalClose={() => setShowModal(false)}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="signup">
                <SignUpForm
                  signUpForm={true}
                  handleModalClose={() => setShowModal(false)}
                />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
      ;
    </>
  );
};

export default AppNavbar;
