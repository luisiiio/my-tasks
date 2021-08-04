import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const StyledFooter = styled.footer`
  color: white;
  background: #1e1e1e;
  padding: 5px 0;
  text-align: center;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Typography
        variant="subtitle2"
        gutterBottom
        style={{ margin: 0, color: "#908E8E" }}
      >
        Built by{" "}
        <Link
          href="https://www.picnicdigital.io"
          target="_blank"
          style={{ color: "#5B5B5B" }}
        >
          @PicnicDigital.io
        </Link>
      </Typography>
    </StyledFooter>
  );
};

export default Footer;
