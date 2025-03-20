export default function Productos() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-secondary">Catálogo de Productos</h1>

      <div className="max-w-4xl mx-auto mb-8">
        <p className="text-lg text-center mb-8">
          Explore nuestro catálogo completo de productos. Si necesita información adicional, no dude en contactarnos.
        </p>

        <div className="w-full aspect-[1/1.4] md:aspect-16/9 bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe
            src="/documentos/catalogo-productos.pdf"
            className="w-full h-full border-0"
            title="Catálogo de Productos"
          >
            Este navegador no soporta PDFs. Por favor, descargue el PDF para verlo.
          </iframe>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Si no puede visualizar el catálogo, puede
            <a href="/documentos/catalogo-productos.pdf" download className="text-primary hover:underline ml-1">
              descargarlo aquí
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

