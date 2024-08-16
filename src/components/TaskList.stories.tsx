import { Meta, StoryObj } from "@storybook/react";
import TaskList from "./TaskList";
import { fn } from "@storybook/test";
import { TaskState } from "./ui/Task";

export const ActionsData = {
    onPinTask: fn(),
    onArchiveTask: fn()
}

export const TasksData = [
    { id: '1', title: 'Test Task 1', state: TaskState.TASK_INBOX },
    { id: '2', title: 'Test Task 2', state: TaskState.TASK_PINNED },
    { id: '3', title: 'Test Task 3', state: TaskState.TASK_ARCHIVED },
]

const meta: Meta<typeof TaskList> = {
    title: 'Task/TaskList',
    component: TaskList,
    tags: ['autodocs'],
    //👇 Our exports that end in "Data"(ActionsData) are not stories.
    excludeStories: /.*Data$/,
    decorators: [
        (story) => (
            <div className="bg-blue-400 p-8">
                {story()}
            </div>
        )
    ],
    args: {
        ...ActionsData
    }
};

export default meta;

type Story = StoryObj<typeof TaskList>;

export const Empty: Story = {
    args: {
        loading: false,
        tasks: []
    }
}

export const Loading: Story = {
    args: {
        loading: true,
        tasks: []
    }
};

export const Tasks: Story = {
    args: {
        loading: false,
        tasks: TasksData
    }
};