import { useState } from "react";

export default function Reviews({ isLoggedIn }) {
    const [selectedGame, setSelectedGame] = useState("Mobile Legends");
    const [reviewText, setReviewText] = useState("");
    const [reviews, setReviews] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const games = ["Mobile Legends", "Call of Duty", "Grand Theft Auto 5", "Final Fantasy"];

    function handleGameChange(event) { //Handler for game selection
        setSelectedGame(event.target.value);
    }

    function handleReviewChange(event) { //Handler for updating review text as the user types
        setReviewText(event.target.value);
    }

    function handleSubmitReview() { //Function to handle review submission and validation
        if (!reviewText) {
            alert("Please write a review before submitting.");
        return;
        }

    const newReview = {  // Create a new review object with the game, review, and current date
        game: selectedGame,
        review: reviewText,
        date: new Date().toLocaleDateString(),
    }

    setReviews([...reviews, newReview]); // Add the new review to the existing reviews list and reset the form
    setReviewText("");
    setIsSubmitted(true); // Indicate that the review was successfully submitted
  }

  return (
    <div className="reviews-container">
        <h1>Game Reviews</h1>
        <h3>{isLoggedIn ? " " : "Please log in to submit a review."}</h3>
        <label>
            Select Game:
            <select value={selectedGame} onChange={handleGameChange}>
            {games.map((game) => (
                <option key={game} value={game}>{game}</option> // Map over games array to create select options
            ))}
            </select>
        </label>
        <br />
        <label>
            Review:
            <textarea value={reviewText} onChange={handleReviewChange} />
        </label>

        <br />
        <button onClick={handleSubmitReview}>Submit Review</button>
 
        {isSubmitted && <p>Review submitted successfully!</p>}

        <h2>Submitted Reviews</h2>
        {reviews.length === 0 ? (
        <p>No reviews yet.</p>
        ) : (
        <ul>
            {reviews.map((review, index) => (
                <li key={index}>
                <strong>{review.game}</strong> ({review.date}): <p>{review.review}</p>
                </li>
            ))}
        </ul>
        )}
    </div>
  );
}
