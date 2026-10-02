function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message sent!')
  }

  return (
    <section id="contact" className="section contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit} className="form">
        <input type="text" placeholder="Your name" required />
        <input type="email" placeholder="Your email" required />
        <textarea placeholder="Your message" rows="4" required />
        <button type="submit" className="btn">Send</button>
      </form>
    </section>
  )
}

export default Contact