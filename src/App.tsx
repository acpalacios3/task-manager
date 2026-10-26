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
    status: "Pending",
    priority: "low",
    dueDate: "12/31/2023",
  },

  {
    id: "2",
    title: "Task 2",
    description: "Descripcion 2",
    status: "In Progress",
    priority: "medium",
    dueDate: "1/1/2024",
  },


  {
    id: "3",
    title: "Task 3",
    description: "Descripcion 3",
    status: "Completed",
    priority: "high",
    dueDate: "1/2/2024",
  }
];

export default function App() {

  return (
    <div>
      < TaskList
        tasks={dataTasks}

      />
    </div>
  )
}