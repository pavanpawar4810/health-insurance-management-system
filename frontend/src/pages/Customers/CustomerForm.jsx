
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  Grid,
} from "@mui/material";

import SaveIcon from "@mui/icons-material/Save";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { useNavigate, useParams } from "react-router-dom";

function CustomerForm() {
  const navigate = useNavigate();

  const { id } = useParams();
  const isEditMode = Boolean(id);


  const handleSubmit = (event) => {
    event.preventDefault();
    if (isEditMode) {
      console.log("Updating customer:", id);
    } else {
      console.log("Creating new customer");
    }

    

    navigate("/customers");
  };

  return (
    <Box>
      {/* Page Header */}

      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" fontWeight="bold">
          {isEditMode ? "Edit Customer" : "Add Customer"}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 0.5 }}
        >
          {isEditMode
            ? "Update customer information"
            : "Add a new health insurance customer"}
        </Typography>


      </Box>

      {/* Customer Form */}

      <Paper sx={{ p: 4 }}>
        <Box component="form" onSubmit={handleSubmit}>

          <Grid container spacing={3}>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="First Name"
                required
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Last Name"
                required
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                required
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Phone Number"
                required
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Date of Birth"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                required
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Aadhaar Number"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Address"
                multiline
                rows={3}
                required
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="City"
                required
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="State"
                required
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Pincode"
                required
              />
            </Grid>

          </Grid>

          {/* Buttons */}

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              gap: 2,
              mt: 4,
            }}
          >

            <Button
              variant="outlined"
              startIcon={<ArrowBackIcon />}
              onClick={() => navigate("/customers")}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              variant="contained"
              startIcon={<SaveIcon />}
            >
              {isEditMode ? "Update Customer" : "Save Customer"}

            </Button>

          </Box>

        </Box>
      </Paper>
    </Box >
  );
}

export default CustomerForm;