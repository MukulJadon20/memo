// eslint-disable-next-line no-unused-vars
import { Block } from "@mui/icons-material";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { orange } from "@mui/material/colors";
import React from "react";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Add as AddIcon,
  Group as GroupIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function Header() {

    const navigate = useNavigate();

  const handleMobile = () => {
    console.log("Mobile");
  };

  const openSearchDialog = () => {
    console.log("openSearchDialog");
  };

  const openNewGroup = () => {
    console.log("openNewGroup");
  };

  const navigateToGroup = () => navigate("/groups");


  return (
    <Box sx={{ flexGrow: 1 }} height={"4rem"}>
      <AppBar
        position="static"
        sx={{
          bgcolor: "#ae7070",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            Memo
          </Typography>

          <Box
            sx={{
              display: { xs: "block", sm: "none" },
            }}
          >
            <IconButton color="inherit" onClick={handleMobile}>
              <MenuIcon />
            </IconButton>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
            }}
          />

          <Box>
            <Tooltip title="Search">
              <IconButton
                color="inherit"
                size="large"
                onClick={openSearchDialog}
              >
                <SearchIcon />
              </IconButton>
            </Tooltip>


            <Tooltip title="New Group">
              <IconButton color="inherit" size="large" onClick={openNewGroup}>
                <AddIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Manage Group">
            <IconButton color="inherit" size="large" onClick={navigateToGroup}>
              <GroupIcon />
            </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
