import { useState } from "react"
import { fetchProducts } from "../api/productsAPI"

const Productos = () => {
  const [busqueda, setBusqueda] = useState('')
  const [resultados, setResultados] = useState(null)

  const handleSearch = () => {
    fetchProducts(busqueda, setResultados)
  }

  return (
    <div className="container-fluid mt-5">
      <h1 className="text-center">Productos</h1>
      <form class="d-flex" role="search" onSubmit={handleSearch}>
        <input class="form-control me-2" type="text" placeholder="Buscar" aria-label="Search"
          value={busqueda} onChange={e => setBusqueda(e.target.value)} />
        <button class="btn btn-success">Search</button>
      </form>
      <div className="row row-gap-4 justify-content-center mt-5">
        {resultados && resultados.map((resultado, index) => (
          <div className="col-md-4" key={index}>
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-4">
                    <img src={resultado.thumbnail} alt="Producto" />
                  </div>
                  <div className="col-8"><h3>{resultado.title}</h3></div>
                </div>
                <p className="text-center">Precio: {resultado.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Productos