import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import TaskList from "./Components/TaskList";
import TaskForm from "./Components/TaskForm";
import TaskItem from "./Components/TaskItem";

function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ margin: 2, gap: 2 }}>
        <Typography variant="h4">Task Tracker</Typography>
        <TaskList />
        <TaskForm />
      </Box>
    </ThemeProvider>
  );
}

export default App;
