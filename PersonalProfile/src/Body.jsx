import propTypes from 'prop-types'
export default function Body(props){
    return(
        <div className="project">
            <img src={'/vite.svg'} alt="project-logo" 
            className = "project-picture" />
            <p><strong>{props.title}</strong></p>
            <h5>{props.description}</h5>
            <p>Completed: {props.completed? "Yes" : "No"}</p>
        </div>
    )
}

Body.defaultProps = {
    title: "Project",
    description: "description",
    completed: false,
}

Body.propTypes = {
    title: propTypes.string,
    description: propTypes.string,
    completed: propTypes.bool,
}