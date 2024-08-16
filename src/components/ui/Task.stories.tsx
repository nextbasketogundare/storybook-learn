import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Task, { TaskState } from "./Task";

export const ActionsData = {
    onPinTask: fn(),
    onArchiveTask: fn()
}

const meta: Meta<typeof Task> = {
    title: 'Task/Input',
    component: Task,
    tags: ['autodocs'],
    //👇 Our exports that end in "Data"(ActionsData) are not stories.
    excludeStories: /.*Data$/,
    args: {
        ...ActionsData
    }
}

export default meta;

export const Default = {
    args: {
        task: {
            id: '1',
            title: 'Test Task',
            state: TaskState.TASK_INBOX,
        },
    },
};


export const Pinned: StoryObj<typeof Task> = {
    args: {
        task: {
            ...Default.args?.task,
            state: TaskState.TASK_PINNED,
        }
    }
}

export const Archived: StoryObj<typeof Task> = {
    args: {
        task: {
            ...Default.args?.task,
            state: TaskState.TASK_ARCHIVED,
        }
    }
}

type Story = StoryObj<typeof Task> & (() => JSX.Element);