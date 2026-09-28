
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";

import PeopleIcon from "@mui/icons-material/People";
import PolicyIcon from "@mui/icons-material/Description";
import ClaimsIcon from "@mui/icons-material/Assignment";
import PaymentIcon from "@mui/icons-material/Payment";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";


function Dashboard() {

  // KPI Card Data
  const stats = [
    {
      title: "Total Customers",
      value: "1,250",
      icon: <PeopleIcon fontSize="large" />,
    },
    {
      title: "Active Policies",
      value: "980",
      icon: <PolicyIcon fontSize="large" />,
    },
    {
      title: "Pending Claims",
      value: "125",
      icon: <ClaimsIcon fontSize="large" />,
    },
    {
      title: "Total Premium",
      value: "₹45.2 L",
      icon: <PaymentIcon fontSize="large" />,
    },
  ];


  // Claims Chart Data
  const claimsData = [
    {
      status: "Approved",
      count: 75,
    },
    {
      status: "Pending",
      count: 35,
    },
    {
      status: "Rejected",
      count: 15,
    },
  ];


  // Policy Distribution Data
  const policyData = [
    {
      name: "Individual",
      value: 450,
    },
    {
      name: "Family",
      value: 280,
    },
    {
      name: "Senior Citizen",
      value: 150,
    },
    {
      name: "Other",
      value: 100,
    },
  ];


  // Recent Claims Data
  const recentClaims = [
    {
      id: "CLM001",
      customer: "Rahul Patil",
      amount: "₹25,000",
      status: "Pending",
    },
    {
      id: "CLM002",
      customer: "Amit Sharma",
      amount: "₹50,000",
      status: "Approved",
    },
    {
      id: "CLM003",
      customer: "Sneha Joshi",
      amount: "₹75,000",
      status: "Rejected",
    },
    {
      id: "CLM004",
      customer: "Priya Deshmukh",
      amount: "₹30,000",
      status: "Approved",
    },
  ];


  // Status Chip
  const getStatusChip = (status) => {

    if (status === "Approved") {
      return <Chip label="Approved" color="success" size="small" />;
    }

    if (status === "Pending") {
      return <Chip label="Pending" color="warning" size="small" />;
    }

    if (status === "Rejected") {
      return <Chip label="Rejected" color="error" size="small" />;
    }

    return <Chip label={status} size="small" />;
  };


  return (

    <Box>

      {/* Dashboard Header */}

      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
      >
        Dashboard
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ mb: 3 }}
      >
        Welcome to Health Insurance Management System
      </Typography>


      {/* KPI Cards */}

      <Grid container spacing={3}>

        {stats.map((stat) => (

          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={stat.title}
          >

            <Card>

              <CardContent>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >

                  <Box>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      {stat.title}
                    </Typography>

                    <Typography
                      variant="h5"
                      fontWeight="bold"
                      sx={{ mt: 1 }}
                    >
                      {stat.value}
                    </Typography>

                  </Box>

                  {stat.icon}

                </Box>

              </CardContent>

            </Card>

          </Grid>

        ))}

      </Grid>


      {/* Policy Summary */}

      <Box sx={{ mt: 4 }}>

        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ mb: 2 }}
        >
          Policy Summary
        </Typography>


        <Grid container spacing={3}>

          <Grid item xs={12} md={4}>

            <Paper sx={{ p: 3 }}>

              <Typography color="text.secondary">
                Active Policies
              </Typography>

              <Typography
                variant="h4"
                fontWeight="bold"
              >
                980
              </Typography>

            </Paper>

          </Grid>


          <Grid item xs={12} md={4}>

            <Paper sx={{ p: 3 }}>

              <Typography color="text.secondary">
                Expiring Soon
              </Typography>

              <Typography
                variant="h4"
                fontWeight="bold"
              >
                45
              </Typography>

            </Paper>

          </Grid>


          <Grid item xs={12} md={4}>

            <Paper sx={{ p: 3 }}>

              <Typography color="text.secondary">
                Expired Policies
              </Typography>

              <Typography
                variant="h4"
                fontWeight="bold"
              >
                25
              </Typography>

            </Paper>

          </Grid>

        </Grid>

      </Box>


      {/* Charts */}

      <Box sx={{ mt: 4 }}>

        <Grid container spacing={3}>


          {/* Claims Overview */}

          <Grid item xs={12} md={7}>

            <Paper sx={{ p: 3 }}>

              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ mb: 2 }}
              >
                Claims Overview
              </Typography>


              <ResponsiveContainer
                width="100%"
                height={300}
              >

                <BarChart data={claimsData}>

                  <CartesianGrid strokeDasharray="3 3" />

                  <XAxis dataKey="status" />

                  <YAxis />

                  <Tooltip />

                  <Bar
                    dataKey="count"
                    name="Claims"
                  />

                </BarChart>

              </ResponsiveContainer>

            </Paper>

          </Grid>


          {/* Policy Distribution */}

          <Grid item xs={12} md={5}>

            <Paper sx={{ p: 3 }}>

              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ mb: 2 }}
              >
                Policy Distribution
              </Typography>


              <ResponsiveContainer
                width="100%"
                height={300}
              >

                <PieChart>

                  <Pie
                    data={policyData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label
                  >

                    {policyData.map((entry, index) => (
                      <Cell key={`cell-${index}`} />
                    ))}

                  </Pie>

                  <Tooltip />

                  <Legend />

                </PieChart>

              </ResponsiveContainer>

            </Paper>

          </Grid>

        </Grid>

      </Box>


      {/* Recent Claims */}

      <Box sx={{ mt: 4 }}>

        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ mb: 2 }}
        >
          Recent Claims
        </Typography>


        <TableContainer component={Paper}>

          <Table>

            <TableHead>

              <TableRow>

                <TableCell>
                  <b>Claim ID</b>
                </TableCell>

                <TableCell>
                  <b>Customer</b>
                </TableCell>

                <TableCell>
                  <b>Amount</b>
                </TableCell>

                <TableCell>
                  <b>Status</b>
                </TableCell>

              </TableRow>

            </TableHead>


            <TableBody>

              {recentClaims.map((claim) => (

                <TableRow key={claim.id}>

                  <TableCell>
                    {claim.id}
                  </TableCell>

                  <TableCell>
                    {claim.customer}
                  </TableCell>

                  <TableCell>
                    {claim.amount}
                  </TableCell>

                  <TableCell>
                    {getStatusChip(claim.status)}
                  </TableCell>

                </TableRow>

              ))}

            </TableBody>

          </Table>

        </TableContainer>

      </Box>

    </Box>
  );
}


export default Dashboard;