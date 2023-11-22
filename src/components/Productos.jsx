const Productos = () => {
  const productos = [
    { title: 'pelota', thumbnail: 'http://http2.mlstatic.com/D_793635-MLA71367706768_082023-I.jpg', price: 14177 },
    { title: 'pelota', thumbnail: 'http://http2.mlstatic.com/D_793635-MLA71367706768_082023-I.jpg', price: 14177 },
    { title: 'pelota', thumbnail: 'http://http2.mlstatic.com/D_793635-MLA71367706768_082023-I.jpg', price: 14177 },
    { title: 'pelota', thumbnail: 'http://http2.mlstatic.com/D_793635-MLA71367706768_082023-I.jpg', price: 14177 },
  ]
  return (
    <div className="container-fluid mt-5">
      <h1 className="text-center">Productos</h1>
      <div className="row row-gap-4 justify-content-center">
        {productos.map((producto, index) => (
          <div className="col-md-4" key={index}>
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-4">
                    <img src="http://http2.mlstatic.com/D_793635-MLA71367706768_082023-I.jpg" alt="Producto" />
                  </div>
                  <div className="col-8"><h3>{producto.title}</h3></div>
                </div>
                <p className="text-center">Precio: {producto.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Productos