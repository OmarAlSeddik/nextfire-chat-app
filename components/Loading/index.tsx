// -- mui -- //
import { CircularProgress, Stack, Typography } from "@mui/material";

const Loading = () => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      <Typography variant="h2" component="p">
        Loading...
      </Typography>
      <CircularProgress size={"10vh"} />
    </Stack>
  );
};

export default Loading;
