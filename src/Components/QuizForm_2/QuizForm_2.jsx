import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate untuk navigasi
import './QuizForm_2.css';

function QuizForm_2() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate(); // Gunakan useNavigate untuk navigasi

  useEffect(() => {
    // Fetch questions from backend when component mounts
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await fetch('http://localhost:8080/getQuestions');
      const data = await response.json();
      setQuestions(data);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const updateTotalScore = () => {
    let totalScore = 0;
    Object.values(answers).forEach(value => {
      totalScore += value;
    });
    console.log('Total Skor:', totalScore);
  };

  const handleButtonClick = (e, questionId) => {
    const currentValue = parseInt(e.currentTarget.dataset.value);
    setAnswers({ ...answers, [questionId]: currentValue });
    updateTotalScore();

    // Set style for clicked button
    e.currentTarget.style.backgroundColor = '#EC744A';
    e.currentTarget.style.color = 'white';

    // Set style for other buttons in the same group
    const buttonsInGroup = document.querySelectorAll(`.option-btn[data-group="${questionId}"]`);
    buttonsInGroup.forEach(button => {
      if (button !== e.currentTarget) {
        button.style.backgroundColor = '';
        button.style.color = '';
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Konversi objek jawaban ke format yang diharapkan oleh backend
    const formattedAnswers = {};
    questions.forEach(question => {
      formattedAnswers[question.id] = answers[question.id] || 0; // Tetapkan nilai default ke 0 jika jawaban tidak diberikan
    });
  
    try {
      // Kirim jawaban yang telah diformat ke backend
      await axios.post('http://localhost:8080/simpanHasil_2', { jawaban: formattedAnswers });
      console.log('Hasil kuisioner berhasil disimpan.');
      
      // Navigasi ke halaman HasilQuiz_2 setelah berhasil menyimpan
      navigate('/HasilQuiz_2');
    } catch (error) {
      console.error('Error saving questionnaire results:', error);
    }
  };

  return (
    <div className='tes-baby-blues'>
      <div className="tes-nama">
        <h1>Tes Pengukuran Baby Blues Pasca Melahirkan dengan Model Suryani</h1>
        <h2>Ini adalah kesempatan bagi bunda untuk mengekspresikan isi hati dan perasaan Bunda dengan jujur. Oleh karena itu mohon isi kuisioner sesuai perasaan bunda</h2>
      </div>
      <div className="tes-baby-container">
        <div className="tes-baby-soal">
          <form onSubmit={handleSubmit}>
            {questions.map((question) => (
              <div key={question.id}>
                <p>{question.pernyataan}</p>
                <div>
                  {[0, 1, 2, 3, 4].map((option) => (
                    <button
                      key={option}
                      className="option-btn"
                      data-value={option}
                      data-group={question.id}
                      onClick={(e) => handleButtonClick(e, question.id)}
                      type="button"
                    >
                      {['Sangat Sering', 'Sering', 'Biasa', 'Jarang', 'Sangat Jarang'][option]}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            <div className="tes-baby-submit">
              <button type="submit">Simpan</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default QuizForm_2;
