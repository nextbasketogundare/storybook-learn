import { clsx } from 'clsx';
import { Star } from 'lucide-react';

export enum TaskState {
    TASK_INBOX = 'TASK_INBOX',
    TASK_PINNED = 'TASK_PINNED',
    TASK_ARCHIVED = 'TASK_ARCHIVED'
};

export interface ITaskType {
    id: string;
    title: string;
    state: TaskState
};

interface ITask {
    task: ITaskType,
    onArchiveTask: (id: string) => void;
    onPinTask: (id: string) => void;
}

export default function Task({ task, onArchiveTask, onPinTask }: ITask) {
    return (
        <div className="w-full">
            <div className='flex items-center justify-between bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 px-2.5'>
                <div className='mt-1'>
                    <label htmlFor="completed" aria-label='Complete Task'>
                        <input
                            type="checkbox"
                            name="completed"
                            id="completed"
                            className='cursor-pointer'
                            checked={task.state === TaskState.TASK_ARCHIVED}
                            onChange={() => onArchiveTask(task.id)}
                        />
                    </label>

                </div>
                <label
                    htmlFor={`title-${task.id}`} aria-label={task.title}
                    className={clsx("w-full inline-block"
                    )}
                >
                    <input
                        type="text"
                        value={task.title}
                        readOnly
                        name="title"
                        id={`title-${task.id}`}
                        className='w-full p-2.5'
                    />

                </label>
                {task.state !== TaskState.TASK_ARCHIVED && (
                    <button
                        aria-label='Pin task'
                        className={clsx('w-8 flex justify-center bg-transparent')}
                        onClick={() => onPinTask(task.id)}
                        >
                        <Star size="18px" className={clsx({
                            "fill-yellow-500 text-yellow-500": task.state === TaskState.TASK_PINNED
                        })} />
                    </button>
                )}
            </div>
        </div>
    )
}