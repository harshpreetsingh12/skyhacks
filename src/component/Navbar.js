import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import skyhacks from "../img/sky hack yellow.png";
import { AccountBoxOutlined, DesignServicesRounded, Home, Work } from "@mui/icons-material";

const drawerWidth = 120;
const navItems = ["Home", "Services", "About", "Works"];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {/* {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <a href={`/#${item.toLowerCase()}`}>
              <ListItemButton sx={{ textAlign: "center" }}>
                <Home />
                <ListItemText primary={item} style={{ color: "white" }} />
              </ListItemButton>
            </a>
          </ListItem>
        ))} */}
        <a href="/#home">
          <ListItem
            key={"home"}
            style={{
              color: "white",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Home />
            <ListItemText
              primary={"Home"}
              style={{ color: "white" }}
            ></ListItemText>
          </ListItem>
        </a>      
          <a href="/#about">
          <ListItem
            key={"about"}
            style={{
              color: "white",
              display: "flex",
              alignItems: "center",
            }}
          >
            <AccountBoxOutlined  />
            <ListItemText
              primary={"About"}
              style={{ color: "white" }}
            ></ListItemText>
          </ListItem>
        </a>
        <a href="/#services">
          <ListItem
            key={"services"}
            style={{
              color: "white",
              display: "flex",
              alignItems: "center",
            }}
          >
            <DesignServicesRounded  />
            <ListItemText
              primary={"Services"}
              style={{ color: "white" }}
            ></ListItemText>
          </ListItem>
        </a>
        <a href="/#works">
          <ListItem
            key={"works"}
            style={{
              color: "white",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Work  />
            <ListItemText
              primary={"Works"}
              style={{ color: "white" }}
            ></ListItemText>
          </ListItem>
        </a>
        
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        className="fullnav"
        component="nav"
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "transparent",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Avatar src={skyhacks} />
          <Box
            sx={{ display: { xs: "none", sm: "block" } }}
            style={{ margin: "0 3vmax" }}
          >
            {navItems.map((item) => (
              <a href={`/#${item.toLowerCase()}`}>
                <Button
                  key={item}
                  sx={{ color: "#fff" }}
                  style={{ margin: "0 2vmax" }}
                >
                  {item}
                </Button>
              </a>
            ))}
          </Box>
        </Toolbar>
        <a href="/ContactUs">
          <button className=" touchbtn h-10 w-36 rounded-3xl bg-white font-extrabold text-blue-700">
            Get in Touch
          </button>
        </a>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "rgba(0,0,0,0.8) ",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
