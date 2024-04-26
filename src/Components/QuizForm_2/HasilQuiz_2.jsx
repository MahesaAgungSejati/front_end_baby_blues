import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './HasilQuiz_2.css';

function HasilQuiz_2() {
  const [hasilKuisioner, setHasilKuisioner] = useState(null);
  const [latestVideos, setLatestVideos] = useState([]);
  const [latestAudios, setLatestAudios] = useState([]);
  const [error, setError] = useState(null);
  const titleRef = useRef(null); // Referensi ke judul halaman

  useEffect(() => {
    async function fetchData() {
      try {
        const responseHasil = await axios.get('http://localhost:8080/simpanHasil_2');
        setHasilKuisioner(responseHasil.data);

        const totalSkorInternal = responseHasil.data.total_skor_internal;
        const totalSkorEksternal = responseHasil.data.total_skor_eksternal;

        // Mengambil data video dari backend berdasarkan kriteria
        if (totalSkorInternal >= 53 && totalSkorInternal <= 60 && totalSkorEksternal >= 19 && totalSkorEksternal <= 20) {
          // Hanya ambil 3 video secara acak
          const responseVideo = await axios.get('http://localhost:8080/video');
          const randomVideos = getRandomItems(responseVideo.data, 3);
          setLatestVideos(randomVideos);
        } else {
          const responseVideo = await axios.get('http://localhost:8080/video');
          setLatestVideos(responseVideo.data);
        }

        // Mengambil data audio dari backend
        const responseAudio = await axios.get('http://localhost:8080/audio');
        setLatestAudios(responseAudio.data.data_audio);
      } catch (error) {
        console.error('Gagal mengambil data:', error.message);
        setError(error.message);
      }
    }

    fetchData();

    // Tempatkan fokus pada judul halaman saat komponen dimuat
    titleRef.current.focus();
  }, []);

  // Fungsi untuk mendapatkan item secara acak dari array
  function getRandomItems(array, count) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  return (
    <div className='tes-result'>
      <div className="tes-result-nama">
        <h1 ref={titleRef} tabIndex={-1}>Tes Pengukuran Baby Blues Pasca Melahirkan dengan Model Suryani</h1>
      </div>
      {error ? (
        <div className='error-message'>
          <p>{error}</p>
        </div>
      ) : (
        <>
          {hasilKuisioner && (
            <div className='result-container'>
              <div className="tes-result-kesimpulan">
                <h1>TOTAL SCORE INTERNAL: {hasilKuisioner.total_skor_internal}</h1>
                <h1>TOTAL SCORE EKSTERNAL: {hasilKuisioner.total_skor_eksternal}</h1>
                <h2>{hasilKuisioner.hasil_kesimpulan}</h2>
              </div>
            </div>
          )}
  
          {/* Tampilkan Video Terbaru */}
          {latestVideos && latestVideos.length > 0 && (
            <div className="judul-video">
              <hr />
              <h2>REKOMENDASI VIDEO</h2>
              <div className="video-content">
                {latestVideos.slice(0, 3).map((video, index) => (
                  <div key={video.id} className="video-container">
                    <div className="video-display">
                      <video controls>
                        <source src={`http://localhost:8080/uploads/${video.video_terapis}`} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <div className="video-info">
                      <h3>{video.judul}</h3>
                      {/* <h4>Deskripsi: {video.deskripsi}</h4> */}
                      <p>{video.sumber}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
  
          {/* Tampilkan Audio Terbaru */}
          {latestAudios && latestAudios.length > 0 && (
            <div className="judul-audio">
              <hr />
              <h2>REKOMENDASI AUDIO</h2>
              <div className="audio-content">
                {latestAudios.slice(0, 3).map((audio, index) => (
                  <div key={audio.id} className="audio-container">
                    <div className="audio-display">
                    <audio controls>
                      <source src={`http://localhost:8080/uploads/${audio.audio_terapis}`} type="audio/mpeg" />
                      Your browser does not support the audio tag.
                    </audio>
                    </div>
                    <div className="audio-info">
                    <h3>{audio.judul}</h3>
                    {/* <p>Deskripsi: {audio.deskripsi}</p> */}
                    <p>{audio.sumber}</p>
                  </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
export default HasilQuiz_2;
