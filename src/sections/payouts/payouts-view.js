import UserProfileView from "@/sections/user/user-profile-view";
import { Container } from "@mui/material";
import PayoutDetails from "./payout-details";

const Payouts = () => {
  return (
    <Container maxWidth="xl">
      <UserProfileView />
      <PayoutDetails />
    </Container>
  );
};

export default Payouts;
