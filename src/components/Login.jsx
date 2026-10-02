function Login() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Logged in!')
  }

  return (
    <section id="login" className="section auth">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="form">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit" className="btn">Login</button>
      </form>
    </section>
  )
}

export default Login