import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './QuizForm_2.css';

function QuizForm_2() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();
  const titleRef = useRef(null); // Referensi ke judul halaman

  useEffect(() => {
    fetchQuestions();
    const timer = setTimeout(() => {
      setShowAlert(true);
    }, 1000);

    // Tempatkan fokus pada judul halaman saat komponen dimuat
    titleRef.current.focus();

    return () => clearTimeout(timer);
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get('http://localhost:8080/getQuestions');
      setQuestions(response.data);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const optionValues = {
    positive: [1, 2, 3, 4, 5], // Nilai untuk pernyataan positif
    negative: [5, 4, 3, 2, 1]  // Nilai untuk pernyataan negatif
  };

  const getOptionValue = (questionId, option) => {
    const isPositiveStatement = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 16, 32].includes(questionId);
    const values = isPositiveStatement ? optionValues.positive : optionValues.negative;
    return values[option];
  };

  const updateTotalScore = (updatedAnswers) => {
    let totalSkorInternal = 0;
    let totalSkorEksternal = 0;

    for (const questionId in updatedAnswers) {
      const value = updatedAnswers[questionId];
      const optionValue = getOptionValue(parseInt(questionId), value);

      if (parseInt(questionId) <= 24) {
        totalSkorInternal += optionValue;
      } else {
        totalSkorEksternal += optionValue;
      }
    }

    console.log('Total Skor Internal:', totalSkorInternal);
    console.log('Total Skor Eksternal:', totalSkorEksternal);
    // Mengembalikan objek yang berisi total skor internal dan eksternal
    return { totalSkorInternal, totalSkorEksternal };
  };

  const handleOptionClick = (questionId, value) => {
    const updatedAnswers = { ...answers, [questionId]: value };
    setAnswers(updatedAnswers);
    // Update total skor ketika jawaban diubah
    updateTotalScore(updatedAnswers);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!showConfirmation) {
      setShowConfirmation(true);
      return;
    }

    if (e.target.textContent === 'SUDAH') {
      setShowConfirmation(false);

      // Check if all questions are answered
      const unansweredQuestions = questions.filter(question => !answers.hasOwnProperty(question.id));
      if (unansweredQuestions.length > 0) {
        alert('Anda belum menjawab semua pertanyaan!');
        return;
      }

      // All questions are answered, proceed to save answers
      const formattedAnswers = {};
      questions.forEach(question => {
        formattedAnswers[question.id] = answers[question.id] || 0;
      });

      // Calculate total score based on updated answers
      const { totalSkorInternal, totalSkorEksternal } = updateTotalScore(formattedAnswers);

      try {
        // Send answers and total scores to the server
        await axios.post('http://localhost:8080/simpanHasil_2', { 
          jawaban: formattedAnswers,
          total_skor_internal: totalSkorInternal, // Send total internal score
          total_skor_eksternal: totalSkorEksternal // Send total external score
        });
        console.log('Hasil kuisioner berhasil disimpan.');
        navigate('/HasilQuiz_2');
      } catch (error) {
        console.error('Error saving questionnaire results:', error);
      }
    } else {
      setShowConfirmation(false);
    }
  };

  return (
    <div className='tes-baby-blues'>
      <div className="tes-nama">
        <h1 ref={titleRef} tabIndex={-1}>Tes Pengukuran Baby Blues Pasca Melahirkan dengan Model Suryani</h1>
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
                      style={{ backgroundColor: answers[question.id] === option ? '#EC744A' : '' }}
                      data-value={option}
                      data-group={question.id}
                      onClick={() => handleOptionClick(question.id, option)}
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
