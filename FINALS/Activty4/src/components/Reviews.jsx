import { useState } from "react"

export default function Reviews({ reviews, game }) {
    const [userReview, setUserReview] = useState("")
    const [userRating, setUserRating] = useState(5)

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        if (userReview.trim()) {
            setUserReview("")
            setUserRating(5)
        } else {
            alert("Please write a review before submitting.");
        }
    };

    return (
        <div className="reviews-container">
            <h2>Reviews for {game.name}</h2>

            <div className="reviews-list">
                {reviews.map((review, index) => (
                    <div key={index} className="review-card">
                        <h3>{review.name} <span>({review.rating}⭐)</span></h3>
                        <p>{review.review}</p>
                    </div>
                ))}
            </div>

            <div className="submit-review">
                <h3>Write Your Own Review</h3>
                <form onSubmit={handleReviewSubmit}>
                    <textarea
                        value={userReview}
                        onChange={(e) => setUserReview(e.target.value)}
                        placeholder="Write your review here..."
                        rows="5"
                        className="review-textarea"
                    />
                    <br />
                    <label>Rating: </label>
                    <select
                        value={userRating}
                        onChange={(e) => setUserRating(Number(e.target.value))}
                        className="review-rating"
                    >
                        <option value={5}>5 ⭐</option>
                        <option value={4}>4 ⭐</option>
                        <option value={3}>3 ⭐</option>
                        <option value={2}>2 ⭐</option>
                        <option value={1}>1 ⭐</option>
                    </select>
                    <br />
                    <button type="submit" className="submit-btn">Submit Review</button>
                </form>
            </div>
        </div>
    )
}
