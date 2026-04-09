export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">AI Resume Builder</h1>
      <a href="/login" className="bg-blue-500 text-white px-6 py-2 rounded">
        Get Started
      </a>
    </div>
  );
}