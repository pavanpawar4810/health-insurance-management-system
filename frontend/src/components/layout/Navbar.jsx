
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Box,
} from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";
const drawerWidth = 240;

function Navbar()
{
     return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        <Typography variant="h6">
          Health Insurance Management System
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>

          <Avatar>
            P
          </Avatar>

          <Typography>
            Pavan Pawar
          </Typography>

        </Box>

      </Toolbar>
    </AppBar>
  );
}
export default Navbar;