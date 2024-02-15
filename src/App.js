import './Question';
import './App.css';
import Question from './Question';


const questions = [
  {
      "id": 1,
      "title": "What is a healthy diet?",
      "info": "A healthy diet includes a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats. It's important to limit processed foods, added sugars, and unhealthy fats."
  },
  {
      "id": 2,
      "title": "How much exercise do I need?",
      "info": "Adults should aim for at least 150 minutes of moderate-intensity aerobic activity or 75 minutes of vigorous-intensity activity each week, along with muscle-strengthening activities on two or more days per week."
  },
  {
      "id": 3,
      "title": "How can I manage stress?",
      "info": "Managing stress involves techniques such as deep breathing exercises, meditation, yoga, spending time outdoors, engaging in hobbies, and seeking support from friends, family, or a mental health professional."
  },
  {
      "id": 4,
      "title": "What are the benefits of getting enough sleep?",
      "info": "Getting enough sleep is essential for overall health and well-being. It supports cognitive function, mood regulation, immune function, and helps prevent chronic diseases such as heart disease and diabetes."
  }
]

function App() {
  return (
    <>
      <h1> Project 2 : FAQ </h1>
      <div className="container">
        <h2> Frequently Asked Questions </h2>
        <div className="questions">
          {questions.map((question) => (
            <Question key={question.id} question={question} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
