import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './HasilQuiz_2.css'

function HasilQuiz_2() {
  const [hasilKuisioner, setHasilKuisioner] = useState(null);

  useEffect(() => {
    // Fetch hasil kuisioner dari backend saat komponen dimuat
    fetchHasilKuisioner();
  }, []);

  const fetchHasilKuisioner = async () => {
    try {
      const response = await axios.get('http://localhost:8080/simpanHasil_2');
      setHasilKuisioner(response.data);
    } catch (error) {
      console.error('Error fetching quiz results:', error);
    }
  };

  return (
    <div className='tes-result'>
      <div className="tes-result-nama">
      <h1>Tes Pengukuran Baby Blues Pasca Melahirkan dengan Model Suryani</h1>
      </div>
      {hasilKuisioner ? (
        <div className='result-container'>
          <div className="tes-result-kesimpulan">
          <h1>TOTAL SCORE INTERNAL: {hasilKuisioner.total_skor_internal}</h1>
          <h1>TOTAL SCORE EKSTERNAL: {hasilKuisioner.total_skor_eksternal}</h1>
          <h2>{hasilKuisioner.hasil_kesimpulan}</h2>
        </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default HasilQuiz_2;
