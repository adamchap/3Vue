import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Sprout } from "lucide-react";

const TopNav = () => {
  return (
    <Navbar
      bg="white"
      data-bs-theme="light"
      className="fixed-top border-bottom border-light"
    >
      <Navbar.Brand
        href="/home"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          color: "#1E5631",
        }}
        className="ms-3"
      >
        <Sprout /> Nature's Best
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Item>
          <NavLink
            to="/home"
            className="nav-link"
            style={({ isActive }) => ({
              color: isActive ? "#28a745" : "black", // Green when active
            })}
          >
            Home
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            to="/story"
            className="nav-link"
            style={({ isActive }) => ({
              color: isActive ? "#28a745" : "black",
            })}
          >
            Our Story
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            to="/pricing"
            className="nav-link"
            style={({ isActive }) => ({
              color: isActive ? "#28a745" : "black",
            })}
          >
            Pricing
          </NavLink>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default TopNav;
