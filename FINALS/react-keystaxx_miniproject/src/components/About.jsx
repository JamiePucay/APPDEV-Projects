import { useState } from 'react';

export default function About() {
    const [companyReviews, setCompanyReviews] = useState([]);
    const [companyReviewText, setCompanyReviewText] = useState("");

    const handleCompanyReviewSubmit = (e) => {
        e.preventDefault();
        if (companyReviewText.trim()) {
            setCompanyReviews([...companyReviews, { text: companyReviewText, author: "Anonymous" }]);
            setCompanyReviewText("");
        }
    };

    return (
        <>
            <div className="about">
                <header className="about-header">
                    <h1>About Keystaxx</h1>
                    <p>
                        We redefine the art of typing by fusing innovation, style, and personalization. Our meticulously designed mechanical keyboards and artisan creations cater to gamers, professionals, and enthusiasts, offering a premium experience that reflects individuality and functionality.
                    </p>
                </header>

                <section className="mission-section">
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is to transform the typing experience into something extraordinary. By combining cutting-edge technology, customizable designs, and unparalleled craftsmanship, we aim to empower users with tools that boost productivity, comfort, and creativity. Each KeyVerse product is a testament to our commitment to delivering excellence.
                    </p>
                </section>

                <section className="vision-section">
                    <h2>Our Vision</h2>
                    <p>
                        Our vision is to lead a global movement in personalized technology. We aspire to be the first choice for anyone seeking high-quality, tailor-made keyboards that enhance their daily interactions. Through innovation, sustainable practices, and a focus on user-centric design, we are shaping the future of typing one keystroke at a time.
                    </p>
                </section>

                <section className="company-review-box">
                    <h1>Company Reviews</h1>
                    <div className="review">
                        <p>"Their keyboards are amazing!"</p>
                        <i>- Jeremy Ebreo</i>
                    </div>
                    <div className="review">
                        <p>"Their customer support is amazing!"</p>
                        <i>- Kristal Marcelo</i>
                    </div>
                    {companyReviews.length > 0 ? (
                        companyReviews.map((review, index) => (
                            <div className="review" key={index}>
                                <p>{review.text}</p>
                                <i>- {review.author}</i>
                            </div>
                        ))
                    ) : (
                        <p>You haven't submitted a review for this company yet.</p>
                    )}

                    <form onSubmit={handleCompanyReviewSubmit}>
                        <textarea
                            value={companyReviewText}
                            onChange={(e) => setCompanyReviewText(e.target.value)}
                            placeholder="Write a review for the company..."
                        />
                        <button type="submit">Submit</button>
                    </form>
                </section>
            </div>
        </>
    );
}
