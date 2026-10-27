import { useState } from 'react'
import TaskList from './components/TaskList/TaskList';
import type { Task } from './components/types';


// export interface Task {
//   id: string;
//   title: string;
//   description: string;
//   status: TaskStatus;
//   priority: 'low' | 'medium' | 'high';
//   dueDate: string;
// }

const dataTasks: Task[] = [

  {
    id: "1",
    title: "Task 1",
    description: "Descripcion 1",
    status: "pending",
    priority: "low",
    dueDate: "12/31/2023",
  },

  {
    id: "2",
    title: "Task 2",
    description: "Descripcion 2",
    status: "in-progress",
    priority: "medium",
    dueDate: "1/1/2024",
  },


  {
    id: "3",
    title: "Task 3",
    description: "Descripcion 3",
    status: "completed",
    priority: "high",
    dueDate: "1/2/2024",
  }
];

export default function App() {

  const [tasks, setTasks] = useState<Task[]>(dataTasks);

  function handleDelete(taskId: string) {
    setTasks((previousTasks) =>
      previousTasks.filter(
        (task) => task.id !== taskId)
    );
  }

  function handleStatusChange(taskId: string, newStatus: Task["status"]) {

    console.log("task id =====>", taskId);
    console.log("new status===>", newStatus);

    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  }

  return (
    <div>
      < TaskList
        tasks={tasks}
        onDelete={handleDelete}
        onStatusChange={handleStatusChange}
      />
    </div>
  )
}