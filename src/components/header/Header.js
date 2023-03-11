import React from "react";
import { IoMdClose } from "react-icons/io";
import { Container, Button } from "reactstrap";
import Menu from "./Menu";
import { ReactComponent as Brandmark } from "../icons/brandmark.svg";

export default function Header(props) {
  //const [showAddPlace, toggleAddPlace] = useToggle(false);
  return (
    <React.Fragment>
      <HeaderContents
        toggleAbout={props.toggleAbout}
        showAbout={props.showAbout}
      />
    </React.Fragment>
  );
}

function HeaderContents(props) {
  return (
    <div className="full-width header vertical-center">
      <Container>
        <div className="header-container">
          <Brandmark className={"header-logo"} />
          <h1
            className="tco-text-upper header-title"
            data-testid="header-title"
          >
            Ian Dutt
          </h1>
          <HeaderButton {...props} />
        </div>
      </Container>
    </div>
  );
}

function HeaderButton(props) {
  return props.showAbout ? (
    <Button
      data-testid="close-about-button"
      color="primary"
      onClick={() => props.toggleAbout()}
    >
      <IoMdClose size={32} />
    </Button>
  ) : (
    <Menu toggleAbout={props.toggleAbout} />
  );
}
