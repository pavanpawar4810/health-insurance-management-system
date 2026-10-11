
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
  CircularProgress,
  Alert,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { getAllCustomer } from "../../components/services/customerService";

function CustomersList() {
  const navigate = useNavigate();

  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [keyword, setKeyword] = useState("");

  // Fetch customers from backend
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await getAllCustomer();

        console.log("API Response:", response.data);

        // Handle both array response and { data: [...] } response
        const result = Array.isArray(response.data)
          ? response.data
          : Array.isArray(response.data?.data)
            ? response.data.data
            : [];

        setCustomers(result);
      } catch (err) {
        console.error("Error fetching customers:", err);
        setError("Unable to load customers from backend.");
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  // Search customers by code, name, email or phone
  const filteredCustomers = customers.filter((customer) => {
    const searchText = keyword.trim().toLowerCase();

    const customerCode =
      customer.customerCode ?? customer.customer_code ?? "";

    const firstName =
      customer.firstName ?? customer.first_name ?? "";

    const lastName =
      customer.lastName ?? customer.last_name ?? "";

    const fullName =
      customer.name ?? `${firstName} ${lastName}`.trim();

    const email = customer.email ?? "";

    const phone =
      customer.phone ?? customer.phoneNumber ?? customer.phone_number ?? "";

    return [
      customerCode,
      fullName,
      email,
      phone,
    ].some((value) =>
      String(value ?? "").toLowerCase().includes(searchText)
    );
  });

  // Get customer fields for display
  const getCustomerCode = (customer) =>
    customer.customerCode ??
    customer.customer_code ??
    customer.id ??
    "-";

  const getCustomerName = (customer) => {
    if (customer.name) {
      return customer.name;
    }

    const firstName =
      customer.firstName ?? customer.first_name ?? "";

    const lastName =
      customer.lastName ?? customer.last_name ?? "";

    return `${firstName} ${lastName}`.trim() || "-";
  };

  const getCustomerPhone = (customer) =>
    customer.phone ??
    customer.phoneNumber ??
    customer.phone_number ??
    "-";

  const getCustomerStatus = (customer) => {
    if (customer.status != null) {
      return customer.status;
    }

    if (customer.active != null) {
      return customer.active === true ||
        customer.active === 1 ||
        customer.active === "1"
        ? "Active"
        : "Inactive";
    }

    return "-";
  };

  return (
    <Box>
      {/* Page Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
          gap: 2,
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
          onClick={() => navigate("/customers/add")}
        >
          Add Customer
        </Button>
      </Box>

      {/* Search */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <TextField
          fullWidth
          placeholder="Search by customer ID, name, email or phone"
          variant="outlined"
          size="small"
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Paper>

      {/* Error Message */}
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

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
            {loading ? (
              <TableRow>
                <TableCell colSpan={7} align="center" sx={{ py: 5 }}>
                  <CircularProgress size={28} />
                  <Typography sx={{ mt: 1 }}>
                    Loading customers...
                  </Typography>
                </TableCell>
              </TableRow>
            ) : filteredCustomers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} align="center" sx={{ py: 4 }}>
                  {error
                    ? "Customers could not be loaded."
                    : "No customers found."}
                </TableCell>
              </TableRow>
            ) : (
              filteredCustomers.map((customer, index) => {
                const customerId =
                  customer.id ?? customer.customerId ?? customer.customer_id;

                const status = getCustomerStatus(customer);

                return (
                  <TableRow
                    key={customerId ?? getCustomerCode(customer) ?? index}
                    hover
                  >
                    <TableCell>
                      {getCustomerCode(customer)}
                    </TableCell>

                    <TableCell>
                      <Typography fontWeight={500}>
                        {getCustomerName(customer)}
                      </Typography>
                    </TableCell>

                    <TableCell>
                      {customer.email ?? "-"}
                    </TableCell>

                    <TableCell>
                      {getCustomerPhone(customer)}
                    </TableCell>

                    <TableCell>
                      {customer.policy ??
                        customer.policyName ??
                        customer.policy_name ??
                        "-"}
                    </TableCell>

                    <TableCell>
                      <Chip
                        label={status}
                        color={
                          status === "Active"
                            ? "success"
                            : status === "Inactive"
                              ? "default"
                              : "primary"
                        }
                        size="small"
                      />
                    </TableCell>

                    <TableCell align="center">
                      <IconButton
                        color="primary"
                        size="small"
                        aria-label="View customer"
                        disabled={customerId == null}
                        onClick={() =>
                          navigate(`/customers/${customerId}`)
                        }
                      >
                        <VisibilityIcon />
                      </IconButton>

                      <IconButton
                        color="primary"
                        size="small"
                        aria-label="Edit customer"
                        disabled={customerId == null}
                        onClick={() =>
                          navigate(`/customers/edit/${customerId}`)
                        }
                      >
                        <EditIcon />
                      </IconButton>

                      <IconButton
                        color="error"
                        size="small"
                        aria-label="Delete customer"
                        onClick={() => {
                          if (customerId == null) {
                            window.alert(
                              "Customer ID is not available."
                            );
                            return;
                          }

                          navigate(`/customers/delete/${customerId}`);
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default CustomersList;