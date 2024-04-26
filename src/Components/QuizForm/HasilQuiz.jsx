import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './HasilQuiz.css';

function HasilQuiz({ id }) {
  const [hasil, setHasil] = useState(null);
  const [video, setVideo] = useState([]);
  const [audio, setAudio] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const responseHasil = await axios.get('http://localhost:8080/simpanHasil');
        setHasil(responseHasil.data);

        const total_skor = responseHasil.data.total_skor;

        // Ambil video sesuai kriteria
        let responseVideo = null;
        if (total_skor >= 19 && total_skor <= 30) {
          responseVideo = await axios.get('http://localhost:8080/video');
        } else {
          // Ambil semua video jika tidak sesuai kriteria
          responseVideo = await axios.get('http://localhost:8080/video');
        }
        const videos = responseVideo.data;

        // Ambil audio
        const responseAudio = await axios.get('http://localhost:8080/audio');
        const audios = responseAudio.data.data_audio;

        // Tampilkan video dan audio secara acak
        const randomVideos = getRandomItems(videos, 3); // Ubah angka 3 sesuai jumlah video yang diinginkan
        const randomAudios = getRandomItems(audios, 3); // Ubah angka 3 sesuai jumlah audio yang diinginkan

        // Set state untuk video dan audio
        setVideo(randomVideos);
        setAudio(randomAudios);
      } catch (error) {
        console.error('Gagal mengambil data:', error.message);
        setError(error.message);
      }
    }

    fetchData();

  }, []);

  // Fungsi untuk mendapatkan item secara acak dari array
  function getRandomItems(array, count) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  return (
    <div className='hasil-tes'>
      <div className="hasil-tes-nama">
        <h1>Hasil Tes Edinburgh Postnatal Depression Scale (EPDS)</h1>
      </div>
      {error ? (
        <div className='error-message'>
          <p>{error}</p>
        </div>
      ) : (
        <>
          {hasil ? (
            <div className='result-container'>
              <div className="tes-result-kesimpulan">
                <h1>TOTAL SCORE TES : {hasil.total_skor}</h1>
                <h2>{hasil.hasil_kesimpulan}</h2>
              </div>
            </div>
          ) : (
            <p>Tidak ada data hasil kuisioner.</p>
          )}

          {/* Tampilkan Video Terbaru */}
          {video.length > 0 && (
            <div className="title-video">
              <hr />
              <h2>REKOMENDASI VIDEO</h2>
              <div className="video-model">
                {video.map((videoItem, index) => (
                  <div key={videoItem.id} className="video-container">
                    <div className="video-tampilan">
                      <video controls>
                        <source src={`http://localhost:8080/uploads/${videoItem.video_terapis}`} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <div className="video-caption">
                      <h3>{videoItem.judul}</h3>
                      <p>{videoItem.sumber}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tampilkan Audio Terbaru */}
          {audio.length > 0 && (
            <div className="title-audio">
              <hr />
              <h2>REKOMENDASI AUDIO</h2>
              <div className="audio-model">
                {audio.map((audioItem, index) => (
                  <div key={audioItem.id} className="audio-tempat">
                    <div className="audio-tampilan">
                      <audio controls>
                        <source src={`http://localhost:8080/uploads/${audioItem.audio_terapis}`} type="audio/mpeg" />
                        Your browser does not support the audio tag.
                      </audio>
                    </div>
                    <div className="audio-caption">
                      <h3>{audioItem.judul}</h3>
                      <p>{audioItem.sumber}</p>
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

export default HasilQuiz;
