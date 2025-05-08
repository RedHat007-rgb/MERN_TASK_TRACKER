import { Checkbox, Chip, ListItem, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";

function TaskItem({ task }) {
  return (
    <div>
      <ListItem
        sx={{
          justifyContent: "space-between",
          padding: "8px 12px",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)", // Light border for separation
          borderRadius: "8px",
          backgroundColor: "transparent", // No background on individual items
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.05)", // Subtle hover effect
          },
        }}
      >
        <Typography
          sx={{
            flex: 1,
            paddingRight: "12px",
            color: "#ffffff", // White text
          }}
        >
          <h1
            style={{
              fontSize: "1rem", // Smaller font size to match image
              fontWeight: 400, // Regular weight
              margin: "0 0 4px 0",
              color: "#ffffff", // White text
            }}
          >
            {task.name}
          </h1>
          <h2
            style={{
              fontSize: "0.875rem", // Smaller font for description
              fontWeight: 300, // Lighter weight
              margin: 0,
              color: "rgba(255, 255, 255, 0.7)", // Slightly faded white
            }}
          >
            {task.description}
          </h2>
        </Typography>
        <Checkbox
          sx={{
            color: "rgba(255, 255, 255, 0.5)", // Faded white for unchecked
            "&.Mui-checked": {
              color: "#ffffff", // White when checked
            },
            padding: "4px", // Smaller padding to match image
          }}
        />
        <Chip
          label="Delete Task"
          variant="outlined"
          clickable
          sx={{
            borderColor: "rgba(255, 255, 255, 0.5)", // Faded white border
            color: "rgba(255, 255, 255, 0.7)", // Faded white text
            fontWeight: 400,
            fontSize: "0.75rem", // Smaller font to match image
            padding: "0 4px",
            height: "24px", // Smaller chip size
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.1)", // Subtle hover effect
              borderColor: "#ffffff", // White border on hover
              color: "#ffffff", // White text on hover
            },
          }}
        />
      </ListItem>
    </div>
  );
}

export default TaskItem;
