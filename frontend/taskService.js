import axios from "axios";

export const displaytasks = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/");
    const data = await response.json();
    console.log(data.tasks);
    return data.tasks;
  } catch (e) {
    console.log(e);
  }
};

export const addingTasks = async (title, description) => {
  try {
    console.log(title);
    console.log(description);
    const response = await axios.post("http://localhost:3000/api/create", {
      name: title,
      description: description,
    });
    return response.data;
  } catch (e) {
    return e;
  }
};

export const deleteTasks = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:3000/api/${id}`);
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
  }
};

export const updateTasks = async (updatedvalue, id) => {
  try {
    console.log(updatedvalue);
    const response = await axios.put(
      `http://localhost:3000/api/${id}`,
      updatedvalue
    );
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
  }
};
