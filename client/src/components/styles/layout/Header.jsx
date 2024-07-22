/* eslint-disable react/prop-types */
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
// eslint-disable-next-line no-unused-vars
import { orange } from "@mui/material/colors";
// eslint-disable-next-line no-unused-vars
import React, { Suspense, useState, lazy } from "react";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Add as AddIcon,
  Group as GroupIcon,
  Logout as LogoutIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
// import SearchDialog from "../specific/Search";

// const NotificationDialog = lazy(() => import("../specific/Notifications"));
// const NewGroup = lazy(() => import("../specific/NewGroup"));
// const SearchDialog = lazy(() => import("../specific/Search"));


function Header() {
  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const [isMobile, setIsMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);

  const handleMobile = () => {
    setIsMobile((prev) => !prev);
  };

  const openSearchDialog = () => {
    setIsSearch((prev) => !prev);
  };

  const openNewGroup = () => {
    setIsNewGroup((prev) => !prev);
  };

  const openNotification = () => {
    setIsNotification((prev) => !prev);
  };

  const logoutHandler = () => {
    console.log("logoutHandler");
  };

  const navigateToGroup = () => navigate("/groups");

  return (
    <>
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
              <IconBtn
                title={"Search"}
                icon={<SearchIcon />}
                onclick={openSearchDialog}
              />

              <IconBtn
                title={"New Group"}
                icon={<AddIcon />}
                onclick={openNewGroup}
              />

              <IconBtn
                title={"Manage Group"}
                icon={<GroupIcon />}
                onclick={navigateToGroup}
              />

              <IconBtn
                title={"Notificatiom"}
                icon={<NotificationsIcon />}
                onclick={openNotification}
              />

              <IconBtn
                title={"Logout"}
                icon={<LogoutIcon />}
                onclick={logoutHandler}
              />

              {/* <Tooltip title="Search">
              <IconButton
                color="inherit"
                size="large"
                onClick={openSearchDialog}
              >
                <SearchIcon />
              </IconButton>
            </Tooltip> */}

              {/* <Tooltip title="New Group">
              <IconButton color="inherit" size="large" onClick={openNewGroup}>
                <AddIcon />
              </IconButton>
            </Tooltip> */}

              {/* <Tooltip title="Manage Group">
            <IconButton color="inherit" size="large" onClick={navigateToGroup}>
              <GroupIcon />
            </IconButton>
            </Tooltip> */}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      {/* {isSearch && (
        <Suspense fallback={<div>Loading...</div>}>
          <SearchDialog />
        </Suspense>
      )}

      {isNotification && (
        <Suspense fallback={<div>Loading...</div>}>
          <NotificationDialog />
        </Suspense>
      )}

      {isNewGroup && (
        <Suspense fallback={<div>Loading...</div>}>
          <NewGroup />
        </Suspense>
      )} */}
    </>
  );
}

const IconBtn = ({ title, icon, onclick }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onclick}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};

export default Header;
