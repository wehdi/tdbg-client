import React from "react";
import {
  Navbar,
  Nav,
  OverlayTrigger,
  Container,
  Popover,
} from "react-bootstrap";
import "./topbar.css";
import { NotificationsNone, Settings, InfoOutlined } from "@material-ui/icons";
import { NavLink } from "react-router-dom";

export default function Topbar() {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Alerte</Popover.Title>
      <Popover.Content>
        Le cout de liquidation d'un dossier au niveau <strong>Skikda</strong> à
        depasser le seuil autorisé.
      </Popover.Content>
    </Popover>
  );
  return (
    <Nav>
      <Navbar fixed="top" className="topbar bg-primary">
        <Navbar.Brand className=" topbarLogo text-light">
          <h1>TDBG - CNR</h1>
        </Navbar.Brand>

        <Nav className="ml-auto mt-3 ">
          <OverlayTrigger
            rootClose
            trigger="click"
            placement="bottom"
            overlay={popover}
          >
            <NavLink to="#" class=" ">
              <span class="text-light badge rounded-pill bg-danger my-1">
                1
              </span>
              <NotificationsNone className="text-light  mr-2 mt-3 " />
            </NavLink>
          </OverlayTrigger>
          <NavLink to="/profile" class="position-relative ">
            <Settings className="text-light topbarIcon mr-2 mt-3 " />
          </NavLink>
          <NavLink to="about" class="position-relative ">
            <InfoOutlined className="text-light   mr-2  mt-3 rounded" />
          </NavLink>
          <NavLink to="profile">
            <Navbar.Brand className=" btn btn-outline-light text-light mt-2">
              <h5 className="text-center font-weight-bold ">
                | Directeur - SKIKDA
              </h5>
            </Navbar.Brand>
          </NavLink>
          <Navbar.Brand to="/">
            <img
              src={process.env.PUBLIC_URL + "/lego.jpg"}
              width="50"
              height="50"
              alt="CNR Avatar"
              className=" mb-3 rounded-circle border border-light"
            />
          </Navbar.Brand>
        </Nav>
      </Navbar>
    </Nav>
  );
}
