import { Button } from "@/components/ui/Button";
import TextBox from "@/components/ui/Input";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-5">
       <Button variant="danger">
          Get Started
        </Button>
        <TextBox size="md" name="search" placeholder="Search" />
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
