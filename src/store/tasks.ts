import { ITaskType, TaskState } from '@/components/ui/Task'
import { create } from 'zustand'

export enum LoadingState {
    IDLE = 'idle',
    LOADING = 'loading',
    SUCCESS = 'success',
}

interface TaskArrayState {
    tasks: ITaskType[];
    loading: LoadingState;
    updateTask: (id: string, newTaskState: TaskState) => void
    setLoading: (value: LoadingState) => void
};


export const TasksArray = [
    { id: '1', title: 'Test Task 1', state: TaskState.TASK_INBOX },
    { id: '2', title: 'Test Task 2', state: TaskState.TASK_INBOX },
    { id: '3', title: 'Test Task 3', state: TaskState.TASK_INBOX },
    { id: '4', title: 'Test Task 4', state: TaskState.TASK_INBOX }
]

export const useTasksStore = create<TaskArrayState>()((set) => ({
    tasks: TasksArray,
    loading: LoadingState.IDLE,
    setLoading: (value: LoadingState) => set(() => ({ loading: value })),
    updateTask: (id: string, newTaskState: TaskState) => set((state) => {
        const taskIndex = state.tasks.findIndex((task) => task.id === id);
       
        const copyTasks = [...state.tasks];

        if (taskIndex >= 0) {
            copyTasks[taskIndex].state = newTaskState;
        }

        return {
            tasks: copyTasks
        }
    })
}))