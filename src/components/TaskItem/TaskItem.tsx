import type { TaskItemProps, Task } from "../types"

// 2. TaskItem Component
// export interface TaskItemProps {
//   task: Task;
//   onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
//   onDelete: (taskId: string) => void;
// }

export default function TaskItem({ task, onStatusChange, onDelete, }: TaskItemProps) {

    return (
        <div className=' mb-4 border border border-slate-600 rounded-lg p-3 grid grid-cols 2 gap-4'>

            <div className="flex items-center justify-between gap-2">
                <h2 className="font-medium" >
                    {task.title}
                </h2>

                <div className="flex items-center gap-3">
                    
                    {/* type TaskStatus = 'pending' | 'in-progress' | 'completed'; */}
                    <select
                        className={`rounded-md border-0 px-2 py-1 text-sm outline-none ${task.status === "pending" ? "bg-yellow-100 text-amber-800"
                                : task.status === "in-progress" ? "bg-white text-blue-700"
                                    : "bg-white text-green-700"
                            }`}

                        value={task.status}
                        onChange={(event) =>
                            onStatusChange(task.id, event.target.value as Task["status"])
                        }>

                        <option value="pending">Pending</option>
                        <option value="in-progress"> In Progress</option>
                        <option value="completed">Completed</option>

                    </select>

                    <button className="border border-gray-300 rounded-lg shadow-md px-2 py-1"
                        onClick={() => onDelete(task.id)}>
                        Delete
                    </button>

                </div>
                <p>{task.description}</p>
                <p>Priority: {task.priority} Due: {task.dueDate}</p>
            </div>

        </div>

    )

}