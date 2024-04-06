import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './QuizForm_2.css';

function QuizForm_2() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false); // State for confirmation pop-up
  const navigate = useNavigate();

  useEffect(() => {
    fetchQuestions();
    const timer = setTimeout(() => {
      setShowAlert(true);
    }, 1000);

    return () => clearTimeout(timer);
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
    console.log('Total Score:', totalScore);
  };

  const handleButtonClick = (e, questionId) => {
    const currentValue = parseInt(e.currentTarget.dataset.value);
    setAnswers({ ...answers, [questionId]: currentValue });
    updateTotalScore();

    e.currentTarget.style.backgroundColor = '#EC744A';
    e.currentTarget.style.color = 'white';

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
    if (!showConfirmation) {
      setShowConfirmation(true);
      return;
    }
    setShowConfirmation(false);
    const formattedAnswers = {};
    questions.forEach(question => {
      formattedAnswers[question.id] = answers[question.id] || 0;
    });
    try {
      await axios.post('http://localhost:8080/simpanHasil_2', { jawaban: formattedAnswers });
      console.log('Hasil kuisioner berhasil disimpan.');
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
            {showAlert && (
              <div className="popup-dua">
                <div className="popup-content-dua">
                <h1>PERHATIKAN</h1>
                  <h2>Tata Cara & Informasi Mengerjakan Quiz</h2>
                  <p>1. Bunda memilih dengan klik jawaban yang paling mendekati dengan apa yang ia rasakan selama tujuh hari sebelumnya.</p>
                  <p>2. Ada pertanyaan berjumlah 32 yang harus diisi dengan lengkap dan sesuai perasaan bunda sekarang.</p>
                  <p>3. Pertanyaan nomor 1 sampai 24 adalah terkait faktor internal atau faktor dari diri sendiri yang mempengaruhi bunda.</p>
                  <p>4. Pertanyaan nomor 25 sampai 32 adalah terkait faktor eksternal atau faktor dari luar yang mempengaruhi bunda.</p>
                  <p>5. Harus berhati-hati untuk menghindari kemungkinan bunda mendiskusikan jawabannya dengan orang lain.</p>
                  <p>6. Bunda harus mengisi sendiri tes ini, kecuali jika bunda memiliki keterbatasan mobilisasi atau kesulitan membaca.</p>
                  <button onClick={() => setShowAlert(false)}>Saya Mengerti</button>
                </div>
              </div>
            )}
            {showConfirmation && (
             <div className="popup-confirmation">
             <div className="popup-content-confirmation">
               <h2>KONFIRMASI</h2>
               <p>Apakah Anda yakin ingin menyelesaikan quiz?</p>
               {/* <p>Anda bisa memeriksanya lagi jika belum yakin</p> */}
               <div>
                 <button onClick={handleSubmit}>SUDAH</button>
                 <button onClick={() => setShowConfirmation(false)}>BELUM</button>
               </div>
             </div>
           </div>
            )}
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
