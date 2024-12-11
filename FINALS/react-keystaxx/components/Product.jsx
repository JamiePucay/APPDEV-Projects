import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function Product() {
    const location = useLocation();
    const product = location.state;

    const [newReview, setNewReview] = useState("");
    const [productReviews, setProductReviews] = useState(product.reviews || []);

    const [companyReviews, setCompanyReviews] = useState([]);
    const [companyReviewText, setCompanyReviewText] = useState("");

    const handleProductReviewSubmit = (e) => {
        e.preventDefault();
        if (newReview.trim()) {
            setProductReviews([...productReviews, { text: newReview, author: "Anonymous" }]);
            setNewReview("");
        }
    };

    const handleCompanyReviewSubmit = (e) => {
        e.preventDefault();
        if (companyReviewText.trim()) {
            setCompanyReviews([...companyReviews, { text: companyReviewText, author: "Anonymous" }]);
            setCompanyReviewText("");
        }
    };

    return (
        <>
            <div className="productdiv">
                <h1>{product.name}</h1>
                <p>{product.description}</p>
            </div>

            <div className="reviews">
                <h1>Product Reviews</h1>
                {productReviews.length > 0 ? (
                    productReviews.map((review, index) => (
                        <div className="review" key={index}>
                            <p>{review.text}</p>
                            <i>- {review.author}</i>
                        </div>
                    ))
                ) : (
                    <p>No reviews available for this product.</p>
                )}

                <form onSubmit={handleProductReviewSubmit}>
                    <textarea
                        value={newReview}
                        onChange={(e) => setNewReview(e.target.value)}
                        placeholder="Write a review for this product..."
                    />
                    <button type="submit">Submit Product Review</button>
                </form>
            </div>

            <div className="companyReview">
                <h1>Company Reviews</h1>
                {companyReviews.length > 0 ? (
                    companyReviews.map((review, index) => (
                        <div className="review" key={index}>
                            <p>{review.text}</p>
                            <i>- {review.author}</i>
                        </div>
                    ))
                ) : (
                    <p>No reviews available for the company yet.</p>
                )}

                <form onSubmit={handleCompanyReviewSubmit}>
                    <textarea
                        value={companyReviewText}
                        onChange={(e) => setCompanyReviewText(e.target.value)}
                        placeholder="Write a review for the company..."
                    />
                    <button type="submit">Submit Company Review</button>
                </form>
            </div>
        </>
    );
}
