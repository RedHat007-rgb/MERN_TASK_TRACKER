import { Checkbox, Chip, ListItem, Typography } from "@mui/material";
import { deleteTasks, displaytasks, updateTasks } from "../../taskService";
import { useSetRecoilState } from "recoil";
import { taskAtom } from "../atoms/taskAtom";
import { useState } from "react";

function TaskItem({ task }) {
  const setTasks = useSetRecoilState(taskAtom);
  const [check, setChecked] = useState(task.completed);

  const handleChange = async () => {
    const newCheck = !check;
    setChecked(newCheck);

    const value = {
      completed: newCheck,
    };
    try {
      console.log(`After making an object: ${check}`);
      console.log(`in object value ${value.completed}`);

      await updateTasks(value, task._id);
    } catch {
      alert("Please try again later....");
    }
  };

  const handleDelete = async () => {
    deleteTasks(task._id)
      .then(() => {
        return displaytasks();
      })
      .then((updatedTasks) => {
        setTasks(updatedTasks);
        alert("Task Succesfully deleted...");
      })
      .catch(() => {
        alert("Please try again later....");
      });
  };

  return (
    <div>
      <ListItem
        sx={{
          justifyContent: "space-between",
          padding: "8px 12px",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "8px",
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.05)",
          },
        }}
      >
        <Typography
          sx={{
            flex: 1,
            paddingRight: "12px",
            color: "#ffffff",
          }}
        >
          <h1
            style={{
              fontSize: "1rem",
              fontWeight: 400,
              margin: "0 0 4px 0",
              color: "#ffffff",
            }}
          >
            {check == false ? (
              <p>{task.name}</p>
            ) : (
              <p style={{ textDecoration: "line-through" }}>{task.name}</p>
            )}
          </h1>
          <h2
            style={{
              fontSize: "0.875rem",
              fontWeight: 300,
              margin: 0,
              color: "rgba(255, 255, 255, 0.7)",
            }}
          >
            {task.description}
          </h2>
        </Typography>
        <Checkbox
          sx={{
            color: "rgba(255, 255, 255, 0.5)",
            "&.Mui-checked": {
              color: "#ffffff",
            },
            padding: "4px",
          }}
          onChange={handleChange}
          checked={check}
        />
        <Chip
          label="Delete Task"
          variant="outlined"
          clickable
          onClick={handleDelete}
          sx={{
            borderColor: "rgba(255, 255, 255, 0.5)",
            color: "rgba(255, 255, 255, 0.7)",
            fontWeight: 400,
            fontSize: "0.75rem",
            padding: "0 4px",
            height: "24px",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderColor: "#ffffff",
              color: "#ffffff",
            },
          }}
        />
      </ListItem>
    </div>
  );
}

export default TaskItem;
