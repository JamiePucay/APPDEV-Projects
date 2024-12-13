export default function Home() {
    return (
        <>
            <div className="home">
                <header className="hero-section">
                    <h1>Keystaxx</h1>
                    <p className="tagline">
                        "Crafting Exceptional Typing Experiences: We design and sell artisan mechanical and regular keyboards, blending functionality, personalization, and artistry to meet the needs of every user."
                    </p>
                </header>

                <section className="about-company">
                    <h2>About Us</h2>
                    <p>
                        At Keystaxx, we believe that a great keyboard is not just about functionality; it’s about the experience. We craft keyboards that fit every need — from high-performance mechanical models for gamers and coders to comfortable, ergonomic options for everyday use. Our products combine precision engineering with beautiful aesthetics, allowing you to express your style while enhancing your typing experience.
                    </p>
                    <p>
                        Whether you're a gamer, a professional, or someone who loves personalized designs, Keystaxx has something for you. Our team works tirelessly to ensure each keyboard is meticulously crafted, with attention to detail at every step, making sure you get nothing but the best.
                    </p>
                </section>

                <section className="what-we-offer">
                    <h2>What We Offer</h2>
                    <ul>
                        <li>
                            <strong>Mechanical Keyboards:</strong> Perfect for gamers, writers, and typists, our mechanical keyboards are known for their durability, speed, and tactile feedback.
                        </li>
                        <li>
                            <strong>Ergonomic Keyboards:</strong> Designed to enhance comfort and prevent strain, our ergonomic models help you work and type more efficiently.
                        </li>
                        <li>
                            <strong>Key Switches & Accessories:</strong> We also offer a selection of key switches, wrist rests, mouse pads, and other accessories to complement your setup.
                        </li>
                    </ul>
                </section>

                <section className="call-to-action">
                    <h2>Find Your Perfect Keyboard!</h2>
                    <p>
                        Browse our collection of high-quality mechanical and regular keyboards, find the perfect one that suits your style, and enhance your typing experience today!
                    </p>
                    <button onClick={() => window.location.href = "/products"}>Browse Now</button>
                </section>
            </div>
        </>
    );
}
