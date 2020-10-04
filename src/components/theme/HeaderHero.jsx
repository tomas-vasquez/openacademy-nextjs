import React from "react";

export default function HeaderHero() {
  return (
    <>
      <div
        className="hero bg-transparent"
        // style={{
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   backgroundImage: "url(/img/banner.jpg)",
        // }}
      >
        <div className="contenido-hero contenedor">
          <h2 className="display-3">Aprende algo nuevo</h2>
          <p>Todos los cursos a $15</p>
          <form action="#" id="busqueda" method="post" className="formulario">
            <input
              className=""
              type="text"
              placeholder="¿Que te gustaría Aprender?"
              id="buscador"
            />
            <input
              type="submit"
              id="submit-buscador"
              className="submit-buscador"
            />
          </form>
        </div>
      </div>

      {/* <div className="barra">
        <div className="iconos contenedor">
          <div className="icono icono1">
            <p>
              20,000 Cursos en línea <br /> Explora los temas más recientes
            </p>
          </div>
          <div className="icono icono2">
            <p>
              Instructores Expertos <br /> Aprende con distintos estilos
            </p>
          </div>
          <div className="icono icono3">
            <p>
              Acceso de por vida <br /> Aprende a tu ritmo
            </p>
          </div>
        </div>
      </div> */}
    </>
  );
}
