
import { useState } from 'react'
import type { TaskItemProps, TaskStatus } from "../types"

// export interface Task {
//   id: string;
//   title: string;
//   description: string;
//   status: TaskStatus;
//   priority: 'low' | 'medium' | 'high';
//   dueDate: string;
// }


// 2. TaskItem Component
// export interface TaskItemProps {
//   task: Task;
//   onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
//   onDelete: (taskId: string) => void;
// }

export default function TaskItem({ task, onStatusChange, onDelete, }: TaskItemProps) {

    return (
        <div>
            <h2>{task.title}</h2>
            <p>{task.description}</p>

        </div>

    )

}