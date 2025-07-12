export default function QuizDetailsPage({ params }: { params: { "quiz-slug": string } }) {
  return (
    <div>
      <h1>Quiz Details: {params["quiz-slug"]}</h1>
      <p>This is the quiz details page.</p>
    </div>
  );
}
