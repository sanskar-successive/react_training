import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <IconButton onClick={() => setIsDrawerOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box>
          <nav>
            <List>
              <ListItem>
                <ListItemButton
                  onClick={() => {
                    navigate("/assignment-4/Ques-9");
                    setIsDrawerOpen(false);
                  }}
                >
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton
                  onClick={() => {
                    navigate("/assignment-4/Ques-9/about");
                    setIsDrawerOpen(false);
                  }}
                >
                  <ListItemText primary="About" />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton
                  onClick={() => {
                    navigate("/assignment-4/Ques-9/dashboard");
                    setIsDrawerOpen(false);
                  }}
                >
                  <ListItemText primary="Dashboard" />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton
                  onClick={() => {
                    navigate("/assignment-4/Ques-9/profile");
                    setIsDrawerOpen(false);
                  }}
                >
                  <ListItemText primary="Profile" />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Box>
      </Drawer>
    </>
  );
};
export default Sidebar;
