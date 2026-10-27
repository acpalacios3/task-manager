// export type TaskStatus = 'pending' | 'in-progress' | 'completed';

// export interface TaskListProps {
//   tasks: Task[];
//   onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
//   onDelete: (taskId: string) => void;
// }
import { useState } from "react";
import TaskItem from "../TaskItem/TaskItem";
import type { TaskListProps } from "../types";

export default function TaskList({
    tasks,
    onStatusChange,
    onDelete, }: TaskListProps) {

    //   filter status
    const [statusFilter, setStatusFilter] = useState("all");
    const [priorityFilter, setPriorityFilter] = useState("all");       

    // filter tasks    
    const filterTasks = tasks.filter((task) => {
        const matcheStatus =
            statusFilter === "all" ||
            task.status === statusFilter;

        const matchePriority =
            priorityFilter === "all" ||
            task.priority === priorityFilter;

        return matcheStatus && matchePriority;
    });


    return (
        <div>
            {/* Status Filter */}
            <label>Status: </label>

            <select
                value={statusFilter}
                onChange={(event) =>
                    setStatusFilter(event.target.value)
                }
            >
                <option value="all">All Statuses</option>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
            </select>

            {/* Priority Filter */}
            <label> Priority: </label>

            <select
                value={priorityFilter}
                onChange={(event) =>
                    setPriorityFilter(event.target.value)
                }
            >
                <option value="all">All Priorities</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
     
        {/*  render tasks */}
        <div className="task-list">
            {/* {tasks.map((task) => ( */}

             {/* filter tasks */}
            {filterTasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onStatusChange={onStatusChange}
                    onDelete={onDelete}
                />
            ))}
        </div>
    </div>    
    );
 }
