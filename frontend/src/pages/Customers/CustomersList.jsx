
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TextField,
  Chip,
  IconButton,
  InputAdornment,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";


function CustomersList() {

  const navigate=useNavigate();
  const customers = [
    {
      id: "CUS001",
      name: "Rahul Patil",
      email: "rahul.patil@gmail.com",
      phone: "9876543210",
      policy: "Health Plus",
      status: "Active",
    },
    {
      id: "CUS002",
      name: "Amit Sharma",
      email: "amit.sharma@gmail.com",
      phone: "9876543211",
      policy: "Family Care",
      status: "Active",
    },
    {
      id: "CUS003",
      name: "Sneha Joshi",
      email: "sneha.joshi@gmail.com",
      phone: "9876543212",
      policy: "Senior Care",
      status: "Inactive",
    },
    {
      id: "CUS004",
      name: "Priya Deshmukh",
      email: "priya.deshmukh@gmail.com",
      phone: "9876543213",
      policy: "Health Plus",
      status: "Active",
    },
    {
      id: "CUS005",
      name: "Rohit Kulkarni",
      email: "rohit.kulkarni@gmail.com",
      phone: "9876543214",
      policy: "Family Care",
      status: "Active",
    },
  ];

  return (
    <Box>
      {/* Page Header */}

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
            Customer Management
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 0.5 }}
          >
            Manage health insurance customers
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={()=>navigate("/customers/add")}
        >
          Add Customer
        </Button>
      </Box>

      {/* Search */}

      <Paper sx={{ p: 2, mb: 3 }}>
        <TextField
          fullWidth
          placeholder="Search customer by name, email or customer ID"
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Paper>

      {/* Customer Table */}

      <TableContainer component={Paper}>
        <Table>

          <TableHead>
            <TableRow>
              <TableCell>
                <b>Customer ID</b>
              </TableCell>

              <TableCell>
                <b>Name</b>
              </TableCell>

              <TableCell>
                <b>Email</b>
              </TableCell>

              <TableCell>
                <b>Phone</b>
              </TableCell>

              <TableCell>
                <b>Policy</b>
              </TableCell>

              <TableCell>
                <b>Status</b>
              </TableCell>

              <TableCell align="center">
                <b>Actions</b>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>

            {customers.map((customer) => (
              <TableRow key={customer.id} hover>

                <TableCell>
                  {customer.id}
                </TableCell>

                <TableCell>
                  <Typography fontWeight="500">
                    {customer.name}
                  </Typography>
                </TableCell>

                <TableCell>
                  {customer.email}
                </TableCell>

                <TableCell>
                  {customer.phone}
                </TableCell>

                <TableCell>
                  {customer.policy}
                </TableCell>

                <TableCell>
                  <Chip
                    label={customer.status}
                    color={
                      customer.status === "Active"
                        ? "success"
                        : "default"
                    }
                    size="small"
                  />
                </TableCell>

                <TableCell align="center">

                  <IconButton
                    color="primary"
                    size="small"
                    onClick={() => navigate(`/customers/${customer.id}`)}
                  >
                    <VisibilityIcon />
                  </IconButton>

                  <IconButton
                    color="primary"
                    size="small"
                    onClick={() => navigate(`/customers/edit/${customer.id}`)}
                  >
                    <EditIcon />
                  </IconButton>

                  <IconButton
                    color="error"
                    size="small"
                  >
                    <DeleteIcon />
                  </IconButton>

                </TableCell>

              </TableRow>
            ))}

          </TableBody>

        </Table>
      </TableContainer>
    </Box>
  );
}

export default CustomersList;