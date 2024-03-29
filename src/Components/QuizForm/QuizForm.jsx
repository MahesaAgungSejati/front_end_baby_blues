import React, { useState } from 'react';
import axios from 'axios';

function QuizForm() {
  const [jawaban, setJawaban] = useState(Array(10).fill(0));
  const baseUrl = 'http://localhost:8080';

  const handleOptionClick = (group, value) => {
    const newJawaban = [...jawaban];
    newJawaban[group] = value;
    setJawaban(newJawaban);
    updateTotalScore();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const dataToSend = {
        jawaban: jawaban
      };

      const response = await axios.post(`${baseUrl}/simpanHasil`, dataToSend);
      console.log('Jawaban berhasil disimpan:', response.data);

      setJawaban(Array(10).fill(0));
    } catch (error) {
      console.error('Gagal menyimpan jawaban:', error.message);
    }
  };

  const updateTotalScore = () => {
    let totalScore = 0;
    jawaban.forEach(value => {
      totalScore += value;
    });
    console.log('Total Skor:', totalScore);
  };

  return (
    <div>
      <h1>Kuisioner</h1>
      <form onSubmit={handleSubmit}>
        {/* Pertanyaan 1 */}
        <p>I have been able to laugh and see the funny side of things:</p>
        <button type="button" className="option-btn" data-value="0" data-group="0" onClick={() => handleOptionClick(0, 0)}>As much as I always could</button>
        <button type="button" className="option-btn" data-value="1" data-group="0" onClick={() => handleOptionClick(0, 1)}>Not quite so much now</button>
        <button type="button" className="option-btn" data-value="2" data-group="0" onClick={() => handleOptionClick(0, 2)}>Definitely not so much now</button>
        <button type="button" className="option-btn" data-value="3" data-group="0" onClick={() => handleOptionClick(0, 3)}>Not at all</button>

        <br /><br />

        {/* Pertanyaan 2 */}
        <p>I have looked forward with enjoyment to things:</p>
        <button type="button" className="option-btn" data-value="0" data-group="1" onClick={() => handleOptionClick(1, 0)}>As much as I ever did</button>
        <button type="button" className="option-btn" data-value="1" data-group="1" onClick={() => handleOptionClick(1, 1)}>Rather less than I used to</button>
        <button type="button" className="option-btn" data-value="2" data-group="1" onClick={() => handleOptionClick(1, 2)}>Definitely less than I used to</button>
        <button type="button" className="option-btn" data-value="3" data-group="1" onClick={() => handleOptionClick(1, 3)}>Hardly at all</button>
        <input type="hidden" name="jawaban[]" id="jawaban1" value="0" />
        <br /><br />

        {/* Pertanyaan 3 */}
        <p>I have blamed myself unnecessarily when things went wrong:</p>
        <button type="button" className="option-btn" data-value="3" data-group="2" onClick={() => handleOptionClick(2, 3)}>Yes, most of the time</button>
        <button type="button" className="option-btn" data-value="2" data-group="2" onClick={() => handleOptionClick(2, 2)}>Yes, some of the time</button>
        <button type="button" className="option-btn" data-value="1" data-group="2" onClick={() => handleOptionClick(2, 1)}>Not very often</button>
        <button type="button" className="option-btn" data-value="0" data-group="2" onClick={() => handleOptionClick(2, 0)}>No, never</button>
        <input type="hidden" name="jawaban[]" id="jawaban2" value="0" />
        <br /><br />

        {/* Pertanyaan 4 */}
        <p>I have been anxious or worried for no good reason:</p>
        <button type="button" className="option-btn" data-value="0" data-group="3" onClick={() => handleOptionClick(3, 0)}>No, not at all</button>
        <button type="button" className="option-btn" data-group="3" onClick={() => handleOptionClick(3, 1)}>Hardly ever</button>
        <button type="button" className="option-btn" data-value="2" data-group="3" onClick={() => handleOptionClick(3, 2)}>Yes, sometimes</button>
        <button type="button" className="option-btn" data-value="3" data-group="3" onClick={() => handleOptionClick(3, 3)}>Yes, very often</button>
        <input type="hidden" name="jawaban[]" id="jawaban3" value="0" />
        <br /><br />

        {/* Pertanyaan 5 */}
        <p>I have felt scared or panicky for no good reason:</p>
        <button type="button" className="option-btn" data-value="3" data-group="4" onClick={() => handleOptionClick(4, 3)}>Yes, quite a lot</button>
        <button type="button" className="option-btn" data-value="2" data-group="4" onClick={() => handleOptionClick(4, 2)}>Yes, sometimes</button>
        <button type="button" className="option-btn" data-value="1" data-group="4" onClick={() => handleOptionClick(4, 1)}>No, not much</button>
        <button type="button" className="option-btn" data-value="0" data-group="4" onClick={() => handleOptionClick(4, 0)}>No, not at all</button>
        <input type="hidden" name="jawaban[]" id="jawaban4" value="0" />
        <br /><br />

        {/* Pertanyaan 6 */}
        <p>Things have been getting to me:</p>
        <button type="button" className="option-btn" data-value="3" data-group="5" onClick={() => handleOptionClick(5, 3)}>Yes, most of the time I haven’t been able to cope at all</button>
        <button type="button" className="option-btn" data-value="2" data-group="5" onClick={() => handleOptionClick(5, 2)}>Yes, sometimes I haven’t been coping as well as usual</button>
        <button type="button" className="option-btn" data-value="1" data-group="5" onClick={() => handleOptionClick(5, 1)}>No, most of the time I have coped quite well</button>
        <button type="button" className="option-btn" data-value="0" data-group="5" onClick={() => handleOptionClick(5, 0)}>No, I have been coping as well as ever</button>
        <input type="hidden" name="jawaban[]" id="jawaban5" value="0" />
        <br /><br />

        {/* Pertanyaan 7 */}
        <p>I have been so unhappy that I have had difficulty sleeping:</p>
        <button type="button" className="option-btn" data-value="3" data-group="6" onClick={() => handleOptionClick(6, 3)}>Yes, most of the time</button>
        <button type="button" className="option-btn" data-value="2" data-group="6" onClick={() => handleOptionClick(6, 2)}>Yes, sometimes</button>
        <button type="button" className="option-btn" data-value="1" data-group="6" onClick={() => handleOptionClick(6, 1)}>No, not very often</button>
        <button type="button" className="option-btn" data-value="0" data-group="6" onClick={() => handleOptionClick(6, 0)}>No, not at all</button>
        <input type="hidden" name="jawaban[]" id="jawaban6" value="0" />
        <br /><br />

        {/* Pertanyaan 8 */}
        <p>I have felt sad or miserable:</p>
        <button type="button" className="option-btn" data-value="3" data-group="7" onClick={() => handleOptionClick(7, 3)}>Yes, most of the time</button>
        <button type="button" className="option-btn" data-value="2" data-group="7" onClick={() => handleOptionClick(7, 2)}>Yes, quite often</button>
        <button type="button" className="option-btn" data-value="1" data-group="7" onClick={() => handleOptionClick(7, 1)}>Not very often</button>
        <button type="button" className="option-btn" data-value="0" data-group="7" onClick={() => handleOptionClick(7, 0)}>No, not at all</button>
        <input type="hidden" name="jawaban[]" id="jawaban7" value="0" />
        <br /><br />

        {/* Pertanyaan 9 */}
        <p>I have been so unhappy that I have been crying:</p>
        <button type="button" className="option-btn" data-value="3" data-group="8" onClick={() => handleOptionClick(8, 3)}>Yes, most of the time</button>
        <button type="button" className="option-btn" data-value="2" data-group="8" onClick={() => handleOptionClick(8, 2)}>Yes, quite often</button>
        <button type="button" className="option-btn" data-value="1" data-group="8" onClick={() => handleOptionClick(8, 1)}>Only occasionally</button>
        <button type="button" className="option-btn" data-value="0" data-group="8" onClick={() => handleOptionClick(8, 0)}>No, never</button>
        <input type="hidden" name="jawaban[]" id="jawaban8" value="0" />
        <br /><br />

        {/* Pertanyaan 10 */}
        <p>The thought of harming myself has occurred to me:</p>
        <button type="button" className="option-btn" data-value="3" data-group="9" onClick={() => handleOptionClick(9, 3)}>Yes, quite often</button>
        <button type="button" className="option-btn" data-value="2" data-group="9" onClick={() => handleOptionClick(9, 2)}>Sometimes</button>
        <button type="button" className="option-btn" data-value="1" data-group="9" onClick={() => handleOptionClick(9, 1)}>Hardly ever</button>
        <button type="button" className="option-btn" data-value="0" data-group="9" onClick={() => handleOptionClick(9, 0)}>Never</button>
        <input type="hidden" name="jawaban[]" id="jawaban9" value="0" />
        <br /><br />
        <button type="submit">Simpan</button>
      </form>
    </div>
  );
}

export default QuizForm;