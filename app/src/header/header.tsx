import {
  Container,
  Navbar,
  NavbarBrand,
  NavDropdown,
  DropdownItem,
  NavbarToggle,
  NavbarCollapse,
  Nav,
} from "react-bootstrap";
export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <NavbarBrand href="/">
          {" "}
          <img
            src="logo-full.svg"
            width={"150px"}
            style={{
              minWidth: "150px",
            }}
            className="d-inline-block align-top"
          />
          <span></span>
        </NavbarBrand>
        <NavbarToggle aria-controls="responsive-navbar-nav" />
        <NavbarCollapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <NavDropdown title="Content Writing" id="navbarScrollingDropdown">
              <DropdownItem href="/category?id=article">
                Articles & Blog Posts
              </DropdownItem>
              <DropdownItem href="#action4">Website Content</DropdownItem>
              <DropdownItem href="#action5">Scriptwriting</DropdownItem>
              <DropdownItem href="#action5">Creative Writing</DropdownItem>
              <DropdownItem href="#action5">Podcast Writing</DropdownItem>
              <DropdownItem href="#action5">Critique</DropdownItem>
            </NavDropdown>
            <NavDropdown title="Resume Writing" id="navbarScrollingDropdown">
              <DropdownItem href="#action3">Cover Letters</DropdownItem>
              <DropdownItem href="#action4">LinkedIn Profiles</DropdownItem>
              <DropdownItem href="#action5">Job Descriptions</DropdownItem>
              <DropdownItem href="#action5">
                Business & Marketing Copy
              </DropdownItem>
            </NavDropdown>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
}
