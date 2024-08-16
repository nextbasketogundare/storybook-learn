import Task, { TaskState } from "@/components/ui/Task";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-[600px] mx-auto bg-blue-400 flex justify-center py-8 rounded-md px-5">
       <Task 
       task={{ id: '1', title: 'Test Task', state: TaskState.TASK_INBOX }} 
       onArchiveTask={() => {}} onPinTask={() => {}} />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">

        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          Find in-depth information about Next.js features and API.
        </p>

        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          Learn about Next.js in an interactive course with&nbsp;quizzes!
        </p>

        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          Explore starter templates for Next.js.
        </p>

        <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
          Instantly deploy your Next.js site to a shareable URL with Vercel.
        </p>

      </div>
    </main>
  );
}
