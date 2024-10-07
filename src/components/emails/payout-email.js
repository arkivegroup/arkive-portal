import {
  Button,
  Container,
  Section,
  Text,
  Img,
  Link,
} from "@react-email/components";

export default function PayoutEmail({ name, amount, payoutDate }) {
  const main = {
    backgroundColor: "#ffffff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };

  const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
  };

  const logo = {
    margin: "0 auto",
    objectFit: "contain",
  };

  const paragraph = {
    fontSize: "16px",
    lineHeight: "26px",
  };

  const btnContainer = {
    textAlign: "center",
  };

  const button = {
    backgroundColor: "#032eee",
    borderRadius: "4px",
    color: "#fff",
    fontSize: "16px",
    textDecoration: "none",
    textAlign: "center",
    display: "block",
    padding: "12px",
  };

  return (
    <div style={main}>
      <Container style={container}>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <Img
            src="https://firebasestorage.googleapis.com/v0/b/arkive-portal.appspot.com/o/images%2Farkive_logo.png?alt=media&token=243bc786-f8f0-4010-84f2-5df3d273b0bb"
            width="200"
            height="70"
            alt="arkive logo"
            style={logo}
          />
        </div>
        <Text style={paragraph}>Hi {name},</Text>
        <Text style={paragraph}>
          We are excited to inform you that a payout of{" "}
          <strong>${amount}</strong> has been processed. The funds should arrive
          in your account on <strong>{payoutDate}</strong>.
        </Text>
        <Text style={paragraph}>
          Thank you for your ongoing partnership with Arkive. We appreciate your
          contribution to our circular beauty community!
        </Text>
        <Text style={paragraph}>
          If you have any questions or need support, feel free to reach out to
          our team at [
          <Link href="mailto:support@arkivegroup.com">
            support@arkivegroup.com
          </Link>
          ].
        </Text>
        {/* <Section style={btnContainer}>
            <Button style={button} href="https://arkivegroup.com/payout-details">
              View Payout Details
            </Button>
          </Section> */}
        <Text style={paragraph}>
          Best regards,
          <br />
          Team Arkive
        </Text>
      </Container>
    </div>
  );
}
