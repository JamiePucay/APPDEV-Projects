export default function Projects({ projects }) {
    return (
      <section className="projects" id="projects">
        <h2>Projects</h2>
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </section>
    );
  }
  