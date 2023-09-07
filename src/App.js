import Sidebar from "./components/Sidebar";
import YouTube from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import { Box, Stack } from "@mui/material";

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <YouTube />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
