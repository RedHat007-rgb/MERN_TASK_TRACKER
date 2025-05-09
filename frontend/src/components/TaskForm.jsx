import { Container, Box, Button, TextField, Alert } from "@mui/material";
import React, { useRef } from "react";
import { addingTasks, displaytasks } from "../../taskService";
import { useSetRecoilState } from "recoil";
import { taskAtom } from "../atoms/taskAtom";

function TaskForm() {
  const setTasks = useSetRecoilState(taskAtom);

  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  const handleSubmit = async () => {
    const name = titleRef.current.value;
    const title = descriptionRef.current.value;
    try {
      addingTasks(name, title).then(async () => {
        const updated_data = await displaytasks();
        setTasks(updated_data);
      });
      alert("Task successfully added...");
    } catch (e) {
      console.log(e);
      alert("Error adding task. Please try again.");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          id="outlined-basic"
          size="medium"
          label="Please Enter Task Name"
          variant="outlined"
          inputRef={titleRef}
          required
        />
        <TextField
          id="filled-basic"
          size="medium"
          label="Please Enter Task Name"
          variant="outlined"
          inputRef={descriptionRef}
          multiline
        />
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Add Task
        </Button>
      </Box>
    </Container>
  );
}

export default TaskForm;
