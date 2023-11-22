const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-info">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Productos</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar