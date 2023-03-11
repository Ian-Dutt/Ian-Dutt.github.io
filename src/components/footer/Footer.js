import React from "react";
import { Container, Button } from "reactstrap";
import GetYear from "../utils/GetYear";
import { ReactComponent as Brandmark } from "../icons/brandmark.svg";
import { FaHeart, FaReact, FaGithub } from "react-icons/fa";

export default function Footer(props) {
  return (
    <React.Fragment>
      <FooterContents />
    </React.Fragment>
  );
}

function FooterContents() {
  return (
    <div className="full-width-alternate footer vertical-center">
      <Container>
        <div className="footer-container">
          <h1 className="tco-text" data-testid="footer-copyright">
            &copy; {GetYear()} East of Easton
          </h1>
          <h1>
            <Brandmark className={"footer-logo"} />
            <FaHeart className={"footer-logo"} />
            <FaReact className={"footer-logo"} />
            <FaGithub className={"footer-logo"} />
          </h1>
        </div>
      </Container>
    </div>
  );
}
