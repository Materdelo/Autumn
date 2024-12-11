import React, { useState, useEffect, useRef } from "react";
import Main from "../components/Layouts/Main/Main.jsx";
import "./App.css";

function App() {
  const [position, setPosition] = useState({ x: 400, y: 300 });
  const [mushrooms, setMushrooms] = useState([]);
  const [score, setScore] = useState(0);
  const [nickname, setNickname] = useState("");
  const [timer, setTimer] = useState(180);
  const [gameOver, setGameOver] = useState(false);
  const [direction, setDirection] = useState("right");
  const [leaderboard, setLeaderboard] = useState([]);
  const collectedRef = useRef(false);

  // Generate initial mushrooms
  useEffect(() => {
    spawnMushrooms(10); // Start with 10 mushrooms
  }, []);

  // Timer countdown
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    } else {
      setGameOver(true);
    }
  }, [timer]);

  // Spawn new mushrooms
  const spawnMushrooms = (count) => {
    const newMushrooms = Array.from({ length: count }, () => ({
      id: Math.random(),
      x: Math.random() * 700,
      y: Math.random() * 550,
    }));
    setMushrooms((prev) => [...prev, ...newMushrooms]);
  };

  // Handle character movement
  const handleKeyPress = (e) => {
    e.preventDefault();
    if (gameOver) return;

    setPosition((prev) => {
      let newPos = { ...prev };
      const speed = 10;

      if (e.key === "ArrowUp") {
        newPos.y = Math.max(0, prev.y - speed);
        setDirection("up");
      }
      if (e.key === "ArrowDown") {
        newPos.y = Math.min(550, prev.y + speed); // Stay in bounds
        setDirection("down");
      }
      if (e.key === "ArrowLeft") {
        newPos.x = Math.max(0, prev.x - speed);
        setDirection("left");
      }
      if (e.key === "ArrowRight") {
        newPos.x = Math.min(750, prev.x + speed); // Stay in bounds
        setDirection("right");
      }

      return newPos;
    });
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [mushrooms, gameOver]);

  useEffect(() => {
    let animationFrame;
    const moveCharacter = () => {
      setPosition((prev) => {
        let newPos = { ...prev };
        const speed = 1.5;

        if (direction === "up") newPos.y = Math.max(0, prev.y - speed);
        if (direction === "down") newPos.y = Math.min(560, prev.y + speed);
        if (direction === "left") newPos.x = Math.max(0, prev.x - speed);
        if (direction === "right") newPos.x = Math.min(760, prev.x + speed);

        // Check for collisions with mushrooms
        const collected = mushrooms.find(
          (m) => Math.abs(m.x - newPos.x) < 20 && Math.abs(m.y - newPos.y) < 20,
        );

        if (collected) {
          setMushrooms((prev) => prev.filter((m) => m.id !== collected.id));
          if (collectedRef.current) {
            collectedRef.current = false;
            return newPos;
          }

          setScore((prev) => prev + 1);
          spawnMushrooms(1);
          collectedRef.current = true;
        }
        return newPos;
      });

      animationFrame = requestAnimationFrame(moveCharacter);
    };

    animationFrame = requestAnimationFrame(moveCharacter);
    return () => cancelAnimationFrame(animationFrame);
  }, [direction, mushrooms]);

  const saveScore = () => {
    if (nickname.trim()) {
      setLeaderboard((prev) => [...prev, { nickname, score }]);
      resetGame();
    }
  };

  const resetGame = () => {
    setGameOver(false);
    setTimer(180);
    setScore(0);
    setNickname("");
    setPosition({ x: 400, y: 300 });
    setMushrooms([]);
    spawnMushrooms(10);
  };

  return (
    <Main>
      <div className="App">
        <h1>Mushroom Game</h1>
        <div className="game-area">
          <div
            className={`character ${direction}`}
            style={{ top: position.y, left: position.x }}
          ></div>
          {mushrooms.map((mushroom) => (
            <div
              key={mushroom.id}
              className="mushroom"
              style={{ top: mushroom.y, left: mushroom.x }}
            >
              <div className="stem"></div>
              <div className="cap"></div>
            </div>
          ))}
        </div>
        <div className="scoreboard">
          <p>Time Left: {timer}s</p>
          <p>Score: {score}</p>
          {gameOver && (
            <div className="modal">
              <h2>Game Over</h2>
              <p>Your Score: {score}</p>
              <input
                type="text"
                placeholder="Enter your nickname"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              />
              <button onClick={saveScore}>Save Score</button>
              <button onClick={resetGame}>Play Again</button>
            </div>
          )}
        </div>
        <div className="leaderboard">
          <h2>Leaderboard</h2>
          <ul>
            {leaderboard
              .sort((a, b) => b.score - a.score)
              .map((entry, index) => (
                <li key={index}>
                  {entry.nickname}: {entry.score}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </Main>
  );
}

export default App;
