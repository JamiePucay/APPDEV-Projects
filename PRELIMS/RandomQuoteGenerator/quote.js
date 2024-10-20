const quotes = [
    "The only way to do great work is to love what you do.",
    "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    "Life is what happens when you're busy making other plans.",
    "The purpose of our lives is to be happy.",
    "Get your facts first, then you can distort them as you please.",
    "You only live once, but if you do it right, once is enough.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall."
];

const btn = document.getElementById('btn');
const quoteDisplay = document.getElementById('quote');

const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
};

btn.addEventListener('click', () => {
    quoteDisplay.textContent = getRandomQuote();
});
