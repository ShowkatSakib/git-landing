const projects = [
  { name: 'Task Manager', desc: 'A simple to-do app built with React.' },
  { name: 'Weather App', desc: 'Shows live weather using a public API.' },
  { name: 'Blog Platform', desc: 'Full-stack blog with authentication.' },
]

function Projects() {
  return (
    <section id="projects" className="section projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((p) => (
          <div className="card" key={p.name}>
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects