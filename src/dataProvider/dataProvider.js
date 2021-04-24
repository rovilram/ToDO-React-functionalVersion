export const getTasks = () => {
  return JSON.parse(localStorage.getItem('Tasks'));
};

export const saveTasks = (tasks) => {
  localStorage.setItem('Tasks', JSON.stringify(tasks));
};
