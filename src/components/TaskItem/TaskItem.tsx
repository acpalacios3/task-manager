import type { TaskItemProps, Task } from "../types"

// 2. TaskItem Component
// export interface TaskItemProps {
//   task: Task;
//   onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
//   onDelete: (taskId: string) => void;
// }

export default function TaskItem({ task, onStatusChange, onDelete, }: TaskItemProps) {

    return (
        <div className=' mb-4 border border-gray-300 rounded-lg p-4 grid grid-cols 2 gap-4'>
            <h1 className='font-bold'> Task: </h1>
            <div>
                <h2>{task.title}</h2>
                <p>{task.description}</p>
                <p>Priority: {task.priority} Due: {task.dueDate}</p>
            </div>

            <div>

                <select
                    value={task.status}
                    onChange={(event) =>
                        onStatusChange(task.id, event.target.value as Task["status"])
                    }>

                    <option value="Pending">Pending</option>
                    <option value="In-progress"> In Progress</option>
                    <option value="Completed">Completed</option>

                </select>

                <button className="border border-gray-300 rounded-lg shadow-md px-2 py-1"
                    onClick={() => onDelete(task.id)}>
                    Delete
                </button>

            </div>

        </div>

    )

}