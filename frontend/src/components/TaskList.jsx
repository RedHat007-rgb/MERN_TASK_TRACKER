import { Container, List, Typography } from "@mui/material";
import React, { useEffect } from "react";
import TaskItem from "./TaskItem";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { taskAtom } from "../atoms/taskAtom";
import { displaytasks } from "../../taskService";

function TaskList() {
  const tasks = useRecoilValue(taskAtom);
  const setTasks = useSetRecoilState(taskAtom);

  useEffect(() => {
    async function final_value() {
      const response = await displaytasks();
      setTasks(response);
    }
    final_value();
  }, []);

  return (
    <div>
      <Container
        maxWidth="sm"
        sx={{
          backgroundColor: "rgba(30, 30, 50, 0.9)",
          borderRadius: "12px",
          padding: "16px",
          marginTop: "16px",
        }}
      >
        <List sx={{ padding: 0 }}>
          {tasks.map((task) => (
            <TaskItem task={task} />
          ))}
        </List>
      </Container>
    </div>
  );
}

export default TaskList;
