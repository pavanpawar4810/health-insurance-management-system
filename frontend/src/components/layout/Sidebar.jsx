import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import PolicyIcon from "@mui/icons-material/Description";
import ClaimsIcon from "@mui/icons-material/Assignment";
import PaymentIcon from "@mui/icons-material/Payment";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AssessmentIcon from "@mui/icons-material/Assessment";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink } from "react-router-dom";
const drawerWidth = 240;

function Sidebar() {
  const menuItems = [
    {
      text: "Dashboard",
      icon: <DashboardIcon />,
      path: "/dashboard",
    },
    {
      text: "Customers",
      icon: <PeopleIcon />,
      path: "/customers",
    },
    {
      text: "Policies",
      icon: <PolicyIcon />,
      path: "/policies",
    },
    {
      text: "Claims",
      icon: <ClaimsIcon />,
      path: "/claims",
    },
    {
      text: "Payments",
      icon: <PaymentIcon />,
      path: "/payments",
    },
    {
      text: "Notifications",
      icon: <NotificationsIcon />,
      path: "/notifications",
    },
    {
      text: "Reports",
      icon: <AssessmentIcon />,
      path: "/reports",
    },
    {
      text: "Admin",
      icon: <AdminPanelSettingsIcon />,
      path: "/admin",
    },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar>
        <Box>
          <Typography variant="h6" fontWeight="bold">
            HealthInsure
          </Typography>

          <Typography variant="caption">
            Management System
          </Typography>
        </Box>
      </Toolbar>

      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={NavLink}
              to={item.path}
            >
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>

              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>

            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Sidebar;