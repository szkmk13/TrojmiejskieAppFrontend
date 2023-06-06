import React, { useState } from "react";
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Group, PasswordInput, Input } from '@mantine/core';
import "./style.css";
import { IconAt } from '@tabler/icons-react';

export function Login() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [opened, { open, close }] = useDisclosure(false);

  const handleLogin = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setUsername("");
    setPassword("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Check username and password
    // Perform authentication logic here
    // If authenticated, setLoggedIn(true);
    setLoggedIn(true);
    setShowModal(false);
  };

  return (
    <>
      <div className="Navbar-subpage">
        {loggedIn ? (
          <span>Hello, {username}
           <a href="#" className="" onClick={handleLogin}>Logout</a>
          
          </span>
        ) : (
          <><Modal opened={opened} onClose={close} title="Logowanie">
            <Input.Wrapper label="Nick">
              <Input></Input>
            </Input.Wrapper>
            <PasswordInput
              placeholder="Password"
              label="Hasło"
              withAsterisk
            />
              {/* Modal content */}
            </Modal>
            <Group position="center">
                <Button onClick={open}>Log in</Button>
            </Group>
          </>
        )}
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <span className="close" onClick={handleModalClose}>
              &times;
            </span>
            <form onSubmit={handleFormSubmit}>
              <label>
                Username:
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
              <label>
                Password:
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}