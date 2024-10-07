import React from "react";
import {
  Box,
  Card,
  Grid,
  Typography,
  Button,
  Divider,
  Avatar,
} from "@mui/material";

const PayoutDetails = () => {
  return (
    <Box>
      <Grid container justifyContent="space-between" spacing={3}>
        <Grid item>
          <Typography color="textPrimary" variant="h5">
            Payoiut
          </Typography>
        </Grid>
        <Grid item>
          <Button color="primary" sx={{ ml: 2 }} variant="contained">
            Request Payout
          </Button>
        </Grid>
      </Grid>

      <Box sx={{ py: 3 }}>
        <Grid container spacing={2}>
          <Grid item md={3} sm={6} xs={12}>
            <Card>
              <Box
                sx={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "space-between",
                  p: 3,
                }}
              >
                <div>
                  <Typography color="textPrimary" variant="subtitle2">
                    Total Orders
                  </Typography>
                  <Typography color="textPrimary" sx={{ mt: 1 }} variant="h4">
                    1.9M
                  </Typography>
                </div>
              </Box>
              <Divider />
            </Card>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <Card>
              <Box
                sx={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "space-between",
                  p: 3,
                }}
              >
                <div>
                  <Typography color="textPrimary" variant="subtitle2">
                    Total Amount
                  </Typography>
                  <Typography color="textPrimary" sx={{ mt: 1 }} variant="h5">
                    $41.2K
                  </Typography>
                </div>
                {/* <LineChart /> */}
              </Box>
              <Divider />
            </Card>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <Card>
              <Box
                sx={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "space-between",
                  p: 3,
                }}
              >
                <div>
                  <Typography color="textPrimary" variant="subtitle2">
                    Paid
                  </Typography>
                  <Typography color="textPrimary" sx={{ mt: 1 }} variant="h5">
                    $11.2K
                  </Typography>
                </div>
                {/* <LineChart /> */}
              </Box>
              <Divider />
            </Card>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <Card>
              <Box
                sx={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "space-between",
                  p: 3,
                }}
              >
                <div>
                  <Typography color="textPrimary" variant="subtitle2">
                    To be paid
                  </Typography>
                  <Typography color="textPrimary" sx={{ mt: 1 }} variant="h5">
                    $5K
                  </Typography>
                </div>
                {/* <BarChart /> */}
              </Box>
              <Divider />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default PayoutDetails;
