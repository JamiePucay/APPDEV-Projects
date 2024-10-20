import React, { useState } from "react";

const quotes = [
    "1. Do what you can, with what you have, where you are.",
    "2. You are never too old to set another goal or to dream a new dream.",
    "3. I'd like to live like a poor man, only with lots of money.",
    "4. Do not take life too seriously.",
    "5. Better to remain silent and be thought a fool than to speak out and remove all doubt.",
    "6. People who think they know everything are a great annoyance to those of us who do.",
    "7. When things go wrong, don't go with them.",
    "8. Whether you think you can or you think you can't, you're right.",
    "9. People often want to show what's wrong with you because they can't handle what's right with you.",
    "10. Life is like a sewer... what you get out of it depends on what you put into it."
];

export default function QuoteGenerator() {
    const [quoteIndex, setQuoteIndex] = useState(0);
    const [lastQuoteIndex, setLastQuoteIndex] = useState(null);

    const generateRandomQuote = () => {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * quotes.length);
        } while (newIndex === quoteIndex);
        setLastQuoteIndex(quoteIndex);
        setQuoteIndex(newIndex);
    };

    const resetQuote = () => {
        setQuoteIndex(0);
        setLastQuoteIndex(null);
    };

    const decrementQuote = () => {
        if (lastQuoteIndex !== null) {
            setQuoteIndex(lastQuoteIndex);
            setLastQuoteIndex(quoteIndex);
        }
    };

    return (
        <div className="container">
            <p className="quote-container">{quotes[quoteIndex]}</p>
            <button className="button-container-decrement" onClick={decrementQuote}>Previous</button>
            <button className="button-container-reset" onClick={resetQuote}>Reset</button>
            <button className="button-container-random" onClick={generateRandomQuote}>Random</button>
        </div>
    );
}
