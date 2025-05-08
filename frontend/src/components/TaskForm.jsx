import { Container, Box, Button, TextField } from "@mui/material";
import React from "react";

function TaskForm() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          id="outlined-basic"
          size="medium"
          label="Please Enter Task Name"
          variant="outlined"
          required
        />
        <TextField
          id="filled-basic"
          size="medium"
          label="Please Enter Task Name"
          variant="outlined"
          multiline
        />
        <Button variant="contained" color="primary">
          Add Task
        </Button>
      </Box>
    </Container>
  );
}

export default TaskForm;
