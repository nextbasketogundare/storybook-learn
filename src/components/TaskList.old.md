import Task, { ITaskType } from "./ui/Task";

interface ITaskList {
  loading: boolean;
  tasks: ITaskType[];
  onPinTask: (id: string) => void;
  onArchiveTask: (id: string) => void;
}

export default function TaskList({ loading, tasks, onPinTask, onArchiveTask }: ITaskList) {
  const events = {
    onPinTask,
    onArchiveTask,
  };

  if (loading) {
    return <div className="list-items">loading</div>;
  }

  if (tasks.length === 0) {
    return <div className="list-items">empty</div>;
  }

  return (
    <div className="flex gap-4 flex-col">
      {tasks.map(task => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
}