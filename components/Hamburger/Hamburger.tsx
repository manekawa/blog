import React, { useState } from "react";

import { Button, Drawer, List, ListItem } from "@mui/material";
// Add your own social icons by using https://mui.com/components/material-icons
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
// import RssFeedIcon from '@mui/icons-material/RssFeed'
import FacebookIcon from "@mui/icons-material/Facebook";

import meta from "../../content/meta";
import style from "./Hamburger.module.css";

function Hamburger() {
  // Use the useState hook to create a state variable for the menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define a function that toggles the menu visibility when the hamburger button is clicked
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Render the hamburger button and menu
  return (
    <>
      <Button onClick={toggleMenu} className={style.hamburger}>
        Menu
      </Button>
      <Drawer anchor="right" open={isMenuOpen} onClose={toggleMenu}>
        <List>
          {meta.twitter && (
            <ListItem>
              <a href={`https://twitter.com/${meta.twitter}`} title="Twitter">
                <TwitterIcon />
              </a>
            </ListItem>
          )}
          {meta.github && (
            <ListItem>
              <a href={meta.github} title="GitHub">
                <GitHubIcon />
              </a>
            </ListItem>
          )}
          {meta.facebook && (
            <ListItem>
              <a href={meta.facebook} title="Facebook">
                <FacebookIcon />
              </a>
            </ListItem>
          )}
        </List>
      </Drawer>
    </>
  );
}

export default Hamburger;
