import { useState, useEffect } from 'react';

const QuestionTimer = ({ initialTime }) => {
  // Parse initial time into minutes and seconds
  const initialMinutes = Math.floor(initialTime / 60);
  const initialSeconds = initialTime % 60;

  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      if (minutes === 0 && seconds === 0) {
        clearInterval(interval);
      } else {
        if (seconds === 0) {
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [minutes, seconds]);

  const totalSeconds = minutes * 60 + seconds;
  const circleBorderColor = totalSeconds > 10 ? '#0770ED' : '#F8A431';

  const circleStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    border: `3px solid ${circleBorderColor}`,
    color: '#000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '20px',
  };

  return (
    <div style={circleStyle}>
      {`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}
    </div>
  );
};

export default QuestionTimer;