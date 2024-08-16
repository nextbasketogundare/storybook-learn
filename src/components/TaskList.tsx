"use client"

import { LoadingState, useTasksStore } from "@/store";
import Task, { TaskState } from "./ui/Task";

export default function TaskList() {
  const tasksStore = useTasksStore((state) => state);

  const pinTask = (id: string) => {
    tasksStore.setLoading(LoadingState.LOADING);
    setTimeout(() => {
      tasksStore.updateTask(id, TaskState.TASK_PINNED);
      tasksStore.setLoading(LoadingState.SUCCESS);
    }, 1000);
  };
  const archiveTask = (id: string) => {
    tasksStore.setLoading(LoadingState.LOADING);
    setTimeout(() => {
      tasksStore.updateTask(id, TaskState.TASK_ARCHIVED)
      tasksStore.setLoading(LoadingState.SUCCESS);
    }, 1000);
  };

  const tasksInOrder = [
    ...tasksStore.tasks.filter((t) => t.state === TaskState.TASK_PINNED),
    ...tasksStore.tasks.filter((t) => t.state !== TaskState.TASK_PINNED),
  ];
  const filteredTasks = tasksInOrder.filter(
    (t) => t.state === TaskState.TASK_INBOX || t.state === TaskState.TASK_PINNED
  );

  if (tasksStore.loading === LoadingState.LOADING) {
    return <div className="list-items" data-testid="loading">loading</div>;
  }

  if (tasksStore.tasks.length === 0) {
    return <div className="list-items" data-testid="empty">empty</div>;
  }
  
  return (
    <div className="flex gap-4 flex-col">
      {filteredTasks.map(task => (
        <Task
          key={task.id}
          task={task}
          onArchiveTask={() => archiveTask(task.id)}
          onPinTask={() => pinTask(task.id)}
        />
      ))}
    </div>
  );
}






