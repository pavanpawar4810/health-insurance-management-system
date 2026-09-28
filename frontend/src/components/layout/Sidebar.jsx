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

const drawerWidth = 240;

function Sidebar() {
  const menuItems = [
    {
      text: "Dashboard",
      icon: <DashboardIcon />,
    },
    {
      text: "Customer",
      icon: <PeopleIcon />,
    },
    {
      text: "Policies",
      icon: <PolicyIcon />,
    },
    {
      text: "Claims",
      icon: <ClaimsIcon />,
    },
    {
      text: "Payments",
      icon: <PaymentIcon />,
    },
    {
      text: "Notifications",
      icon: <NotificationsIcon />,
    },
    {
      text: "Reports",
      icon: <AssessmentIcon />,
    },
    {
      text: "Admin",
      icon: <AdminPanelSettingsIcon />,
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
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>

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