import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import "./header.css";
import Button from "../Button";

class Header extends React.Component {
  state = {
    hasScrolled: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true });
    } else {
      this.setState({ hasScrolled: false });
    }
  };

  render() {
    return (
      <div
        className={this.state.hasScrolled ? "Header HeaderScrolled" : "Header"}
      >
        <div className="container ">
          <div className="row">
            <div className="col-xs-12 ">
              <div className="HeaderGroup">
                <Link
                  to="/"
                  style={{
                    position: "relative",
                    transformStyle: "preserve-3d"
                  }}
                >
                  <span className="Designer">
                    <img
                      className="DesignerLogo"
                      src={require("../../images/logo-rs.svg")}
                      alt="Ruslan Sharipov logo"
                    />
                    <img
                      className="DesignerPhoto"
                      src={require("../../images/photo-rs.jpg")}
                      alt="Ruslan Sharipov logo"
                    />
                  </span>
                </Link>
                <div className="ButtonGroup">
                  <Button
                    link="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    textColor="#fff"
                    bgColor="#00aaff"
                    bgHoverColor="#0487ff"
                  >
                    CV
                  </Button>
                  <Button
                    link="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    textColor="#fff"
                    bgColor="#00aaff"
                    bgHoverColor="#0487ff"
                  >
                    Resume
                  </Button>
                  <Button
                    link="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    textColor="#fff"
                    bgColor="#00aaff"
                    bgHoverColor="#0487ff"
                  >
                    Portfolio
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: `Ruslan Sharipov`
};

export default Header;
