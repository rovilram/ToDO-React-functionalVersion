export const getTasks = () => {
  console.log("RECUPERANDO TAREAS")
  return JSON.parse(localStorage.getItem('Tasks'));
};

export const saveTasks = (tasks) => {
  console.log("GUARDANDO", tasks)
  localStorage.setItem('Tasks', JSON.stringify(tasks));
};
