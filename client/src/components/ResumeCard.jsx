export default function ResumeCard({ data }) {
  return (
    <div className="border p-4 shadow">
      <h2>{data.title}</h2>
      <a href={`/preview/${data._id}`}>View</a>
    </div>
  );
}