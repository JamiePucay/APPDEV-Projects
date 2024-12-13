import { useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Product() {
    const location = useLocation();
    const product = location.state;

    const [newReview, setNewReview] = useState("");
    const [productReviews, setProductReviews] = useState(product.reviews || []);

    const handleProductReviewSubmit = (e) => {
        e.preventDefault();
        if (newReview.trim()) {
            setProductReviews([...productReviews, { text: newReview, author: "Anonymous" }]);
            setNewReview("");
        }
    };

    return (
        <>
            <div className="product-box">
                <h1>{product.name}</h1>
                <p>{product.description}</p>
            </div>

            <div className="product-details-box">
                <img 
                    src={product.image} 
                    alt={product.name} 
                    className="product-image" 
                />

                <table className="product-info-table">
                    <tbody>
                        <tr>
                            <th>Materials</th>
                            <td>{product.materials}</td>
                        </tr>
                        <tr>
                            <th>Key Switch Type</th>
                            <td>{product.keySwitchType}</td>
                        </tr>
                        <tr>
                            <th>Keycaps</th>
                            <td>{product.keycaps}</td>
                        </tr>
                        <tr>
                            <th>Connection Type</th>
                            <td>{product.connectionType}</td>
                        </tr>
                        <tr>
                            <th>Lighting</th>
                            <td>{product.lighting}</td>
                        </tr>
                        <tr>
                            <th>Additional Features</th>
                            <td>
                                <ul>
                                    {product.additionalFeatures.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className="manual-description">
                    <h3>Manual Description</h3>
                    <p>{product.manualDescription}</p>
                </div>
            </div>

            <div className="reviews-box">
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
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}