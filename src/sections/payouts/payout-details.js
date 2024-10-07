"use client";

import React, { useState } from "react";
import {
  Box,
  Card,
  Grid,
  Typography,
  Button,
  Avatar,
  Pagination,
  IconButton,
  Chip,
} from "@mui/material";

// Sample invoice data
const invoices = {
  pending: [
    {
      id: "INV-005",
      name: "Jie Yan",
      amount: 23.11,
      issued: "Oct 7, 2024",
      due: "Nov 1, 2024",
      status: "Pending",
      avatarSrc: "/path-to-avatar1.jpg",
    },
    {
      id: "INV-001",
      name: "Miron Vitold",
      amount: 19.99,
      issued: "Sep 22, 2024",
      due: "Oct 8, 2024",
      status: "Pending",
      avatarSrc: "/path-to-avatar2.jpg",
    },
  ],
  paid: [
    {
      id: "INV-004",
      name: "Omar Darobe",
      amount: 253.76,
      issued: "Oct 3, 2024",
      due: "Oct 24, 2024",
      status: "Paid",
      avatarSrc: "/path-to-avatar3.jpg",
    },
    {
      id: "INV-002",
      name: "Fran Perez",
      amount: 96.64,
      issued: "Sep 22, 2024",
      due: "Oct 10, 2024",
      status: "Paid",
      avatarSrc: "/path-to-avatar4.jpg",
    },
  ],
  canceled: [
    {
      id: "INV-003",
      name: "Carson Darrin",
      amount: 781.5,
      issued: "Oct 1, 2024",
      due: "Oct 18, 2024",
      status: "Canceled",
      avatarSrc: "/path-to-avatar5.jpg",
    },
  ],
};

// SVG icons
const SvgIcons = {
  pending: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="orange"
      width="18"
      height="18"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 8v4l3 3m6 2a9 9 0 10-18 0 9 9 0 0018 0z"
      />
    </svg>
  ),
  paid: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="green"
      width="18"
      height="18"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 13l4 4L19 7"
      />
    </svg>
  ),
  canceled: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="red"
      width="18"
      height="18"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  ),
  arrow: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      width="20"
      height="20"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 5l7 7-7 7"
      />
    </svg>
  ),
};

const StatusLabel = ({ status }) => {
  let icon = null;
  let color = "";

  switch (status) {
    case "Pending":
      icon = SvgIcons.pending;
      color = "orange";
      break;
    case "Paid":
      icon = SvgIcons.paid;
      color = "green";
      break;
    case "Canceled":
      icon = SvgIcons.canceled;
      color = "red";
      break;
    default:
      break;
  }

  return (
    <Chip
      label={status}
      icon={icon}
      sx={{
        border: "1px solid grey",
        backgroundColor: `white`,
        color: color,
        borderRadius: 3,
        fontWeight: "bold",
        fontSize: "0.85rem",
        padding: "1px 6px",
        "& svg": { marginRight: "4px" },
      }}
    />
  );
};

const InvoiceCard = React.memo(({ invoice }) => {
  const { id, name, amount, issued, due, status, avatarSrc } = invoice;

  return (
    <Card
      key={id}
      sx={{
        mb: 2,
        borderRadius: 3,
        padding: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0px 0px 5px rgba(0,0,0,0.1)",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", width: "20%" }}>
        <Avatar src={avatarSrc} sx={{ width: 40, height: 40, mr: 2 }} />
        <Box>
          <Typography variant="subtitle2" fontWeight="bold">
            {id}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {name}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{ width: "30%", display: "flex", justifyContent: "space-between" }}
      >
        <Box sx={{ textAlign: "left" }}>
          <Typography variant="body2" fontWeight="bold">
            Issued
          </Typography>

          <Typography variant="body2" color="textSecondary">
            {issued}
          </Typography>
        </Box>

        <Box sx={{ textAlign: "left" }}>
          <Typography variant="body2" fontWeight="bold">
            Due
          </Typography>

          <Typography variant="body2" color="textSecondary">
            {due}
          </Typography>
        </Box>
      </Box>

      {/* Status label */}
      <Box sx={{ width: "15%" }}>
        <StatusLabel status={status} />
      </Box>
    </Card>
  );
});

const PayoutDetails = () => {
  const [page, setPage] = useState(1);

  const handlePageChange = (_, value) => setPage(value);

  const renderSection = (title, data) => (
    <>
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        {title} ({data.length})
      </Typography>

      {data.map((invoice) => (
        <InvoiceCard key={invoice.id} invoice={invoice} />
      ))}
    </>
  );

  return (
    <Box>
      <Grid container justifyContent="space-between" spacing={3}>
        <Grid item>
          <Typography variant="h5">Payouts</Typography>
        </Grid>
        <Grid item>
          <Button color="primary" variant="contained">
            Request Payout
          </Button>
        </Grid>
      </Grid>

      <Box sx={{ py: 3, overflowX: "auto" }}>
        <Box sx={{ minWidth: "600px" }}>
          {renderSection("Pending", invoices.pending)}{" "}
          {renderSection("Paid", invoices.paid)}
          {renderSection("Canceled", invoices.canceled)}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 4,
          }}
        >
          <Typography variant="body2">Rows per page: 5</Typography>
          <Pagination count={5} page={page} onChange={handlePageChange} />
        </Box>
      </Box>
    </Box>
  );
};

export default PayoutDetails;
