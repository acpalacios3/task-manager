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
        <div className="p-4">

            <div className="mb-6 ml-16 mt-4 flex flex-wrap gap-4">

              <div>
                {/* Status Filter */}
                <label className="mb-1 block font-medium text-sm text-slate-700">
                    Status: 
                </label>

                <select
                    className="rounded-md border border-gray-200 bg-white px-3 py-2 shadow-sm "
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
            </div>


            <div>
                {/* Priority Filter */}
                <label  className="mb-1 block font-medium text-sm text-slate-700"> 
                    Priority: 
                </label>

                <select
                   
                   className="rounded-md border border-gray-200  px-3 py-2 shadow-sm"
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
            </div>
     </div>


        {/*  render tasks */}
     <div className="flex flex-col">
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
        {filterTasks.length === 0 && (
                <p>No tasks found</p>
            )}
    </div>    
    );
 }
