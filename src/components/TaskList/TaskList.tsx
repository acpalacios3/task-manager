// export type TaskStatus = 'pending' | 'in-progress' | 'completed';
 
// export interface Task {
//   id: string;
//   title: string;
//   description: string;
//   status: TaskStatus;
//   priority: 'low' | 'medium' | 'high';
//   dueDate: string;
// }

// export interface TaskListProps {
//   tasks: Task[];
//   onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
//   onDelete: (taskId: string) => void;
// }

import TaskItem from "../TaskItem/TaskItem";
import type { TaskListProps } from "../types";


export default function TaskList({
    tasks,
    onStatusChange,
    onDelete, }: TaskListProps) {

    return (

        <div className="task-list">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onStatusChange={onStatusChange}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );

}
