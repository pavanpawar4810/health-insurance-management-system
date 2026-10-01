
import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
  Divider,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";

import { useNavigate, useParams } from "react-router-dom";

function CustomerDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const customer = {
    id: id,
    name: "Rahul Patil",
    email: "rahul.patil@gmail.com",
    phone: "9876543210",
    dateOfBirth: "15/08/1995",
    address: "Pune, Maharashtra",
    policy: "Health Plus",
    status: "Active",
  };

  return (
    <Box>
      {/* Header */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Box>
          <Typography variant="h4" fontWeight="bold">
            Customer Details
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
          >
            View customer information
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<EditIcon />}
          onClick={()=>navigate(`/customers/edit/${id}`)}
        >
          Edit Customer
        </Button>
      </Box>

      {/* Details */}

      <Paper sx={{ p: 4 }}>

        <Typography variant="h6" fontWeight="bold">
          Personal Information
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Grid container spacing={3}>

          <Grid item xs={12} md={6}>
            <Typography color="text.secondary">
              Customer ID
            </Typography>

            <Typography fontWeight="500">
              {customer.id}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography color="text.secondary">
              Full Name
            </Typography>

            <Typography fontWeight="500">
              {customer.name}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography color="text.secondary">
              Email
            </Typography>

            <Typography fontWeight="500">
              {customer.email}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography color="text.secondary">
              Phone
            </Typography>

            <Typography fontWeight="500">
              {customer.phone}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography color="text.secondary">
              Date of Birth
            </Typography>

            <Typography fontWeight="500">
              {customer.dateOfBirth}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography color="text.secondary">
              Address
            </Typography>

            <Typography fontWeight="500">
              {customer.address}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography color="text.secondary">
              Policy
            </Typography>

            <Typography fontWeight="500">
              {customer.policy}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography color="text.secondary">
              Status
            </Typography>

            <Typography
              fontWeight="500"
              color="success.main"
            >
              {customer.status}
            </Typography>
          </Grid>

        </Grid>

        <Box sx={{ mt: 4 }}>

          <Button
            variant="outlined"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate("/customers")}
          >
            Back to Customers
          </Button>

        </Box>

      </Paper>
    </Box>
  );
}

export default CustomerDetails;