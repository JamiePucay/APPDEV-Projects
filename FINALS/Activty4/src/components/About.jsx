export default function About() {
    return (
        <div className="about-container">
            <h1>About the Creator</h1>
            <div className="author-details">
                <img 
                    src={'../assets/about.png'}
                    alt="Author" 
                    className="author-image"
                />
                <div className="author-info">
                    <p><strong>Author:</strong> Jamie Amor Pucay</p>
                    <p><strong>Class Subject:</strong> APPDEV1</p>
                    <p><strong>Class Section:</strong> IAB2</p>
                    <p><strong>Activity:</strong> 4</p>
                    <p><strong>Activity Description:</strong> Create a website for displaying and reviewing video games using react-router-dom</p>
                </div>
            </div>
        </div>
    );
}
