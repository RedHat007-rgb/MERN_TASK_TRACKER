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
