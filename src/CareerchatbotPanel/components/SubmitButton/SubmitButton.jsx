function SubmitButton({ children, questions, setPersonality, setViewCareers }) {
  const calculatePersonality = () => {
    const personalityScores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };

    // Calculate the total score for each personality tag
    questions.forEach((question) => {
      personalityScores[question.Tag] += question.Score;
    });

    // Find the personality tag with the highest score
    const maxScoreTag = Object.keys(personalityScores).reduce((a, b) =>
      personalityScores[a] > personalityScores[b] ? a : b
    );

    return maxScoreTag;
  };

  const handleButtonClick = () => {
    const personality = calculatePersonality();
    setPersonality(personality);
    setViewCareers(true);
  };
  return (
    <button
      onClick={handleButtonClick}
      className=" hover:bg-black text-white w-fit bg-green-500  fixed bottom-12 right-1/2 rounded-2xl p-4 mx-auto   gap-4"
    >
      {children}
    </button>
  );
}

export default SubmitButton;
