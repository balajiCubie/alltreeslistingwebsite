import React, { useState } from 'react';
import Button from '../common/Button';

interface Question {
  id: number;
  text: string;
  options: { id: string; text: string; nextQuestionId?: number; result?: string }[];
}

interface TreeIDWizardProps {
  questions: Question[];
  onIdentificationComplete: (result: string) => void;
}

const TreeIDWizard: React.FC<TreeIDWizardProps> = ({ questions, onIdentificationComplete }) => {
  const [currentQuestionId, setCurrentQuestionId] = useState(questions[0]?.id);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});

  const currentQuestion = questions.find((q) => q.id === currentQuestionId);

  const handleOptionSelect = (optionId: string, nextQuestionId?: number, result?: string) => {
    setAnswers((prev) => ({ ...prev, [currentQuestionId]: optionId }));
    if (result) {
      onIdentificationComplete(result);
    } else if (nextQuestionId !== undefined) {
      setCurrentQuestionId(nextQuestionId);
    } else {
      // Fallback if no next question or result is specified (e.g., end of wizard)
      onIdentificationComplete('Could not identify based on provided answers.');
    }
  };

  const handleBack = () => {
    // This would require more complex state management to track previous questions
    // For simplicity, we'll just go back to the first question for now.
    setCurrentQuestionId(questions[0]?.id);
    setAnswers({});
  };

  if (!currentQuestion) {
    return (
      <div className="text-center p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Identification Complete!</h2>
        <p className="text-gray-700 mb-4">Thank you for using the Tree ID Wizard.</p>
        <Button onClick={() => { setCurrentQuestionId(questions[0]?.id); setAnswers({}); }}>Start Over</Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Tree Identification Wizard</h2>
      <p className="text-lg text-gray-800 mb-6">{currentQuestion.text}</p>
      <div className="space-y-4">
        {currentQuestion.options.map((option) => (
          <Button
            key={option.id}
            onClick={() => handleOptionSelect(option.id, option.nextQuestionId, option.result)}
            variant="outline"
            className="w-full"
          >
            {option.text}
          </Button>
        ))}
      </div>
      {currentQuestionId !== questions[0]?.id && (
        <div className="mt-6 text-center">
          <Button onClick={handleBack} variant="secondary">
            Back
          </Button>
        </div>
      )}
    </div>
  );
};

export default TreeIDWizard;
