import React from "react";
import { Link } from "@tanstack/react-router";

const Index: React.FC = () => {
  return (
    <div className="index-page">
      <header className="index-header">
        <h1 className="index-title">Willkommen bei Students for Students</h1>
      </header>
      <main className="index-content">
        <div className="index-description">
          <h2 className="description-title">Wie funktioniert die Website?</h2>
          <p className="description-text">
            Diese Website ermöglicht es dir mit anderen Schülern in Konntakt zu
            treten, Fragen zu stellen und Antworten von anderen Schülern zu
            erhalten. Du kannst deine Frage einreichen oder Antworten auf
            bereits gestellte Fragen geben.
          </p>
          <Link to={"/question"} className="question-link">
            Fragen anzeigen
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Index;
