function Signup() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Account created!')
  }

  return (
    <section id="signup" className="section auth">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="form">
        <input type="text" placeholder="Full name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit" className="btn">Create account</button>
      </form>
    </section>
  )
}

export default Signup