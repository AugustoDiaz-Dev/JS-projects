const comentarios = [
  {
    autor: {
      nombre: "Katy Perry",
    },
    comentario: {
      titulo: "Best wishes...",
      texto: "Sounds good bro! I hope to see you again soon.",
      tiempo: "14 minutes ago",
    },
  },
  {
    autor: {
      nombre: "Sting",
    },
    comentario: {
      titulo: "Great",
      texto: "I loved it! Come to drink wine with me in Italy.",
      tiempo: "20 hours ago",
    },
  },
  {
    autor: {
      nombre: "Beyonce",
    },
    comentario: {
      titulo: "I don't like it",
      texto: "I only enjoy my music and champagne.",
      tiempo: "3 days ago",
    },
  },
  {
    autor: {
      nombre: "Paul Mcartney",
    },
    comentario: {
      titulo: "What the hell!",
      texto: "I didn't understand even a single note. BTW I still need a little help from my friends.",
      tiempo: "2 weeks ago",
    },
  },
  {
    autor: {
      nombre: "Madonna",
    },
    comentario: {
      titulo: "Madame X",
      texto: "It reminds me to my song \"La Isla Bonita\".",
      tiempo: "8 months ago",
    },
  },
];

const contendorComentarios = document.querySelector(".contendor-comentarios");

for (let i = 0; i < comentarios.length; i++) {
  let comentario = document.createElement("div");
  comentario.classList.add("comentario");

  let infoComentario = document.createElement("div");
  infoComentario.classList.add("info-comentario");

  let infoAutor = document.createElement("div");
  infoAutor.classList.add(".autor");

  let spanInfoAutor = document.createElement("span");
  spanInfoAutor.classList.add("nombre-autor");
  spanInfoAutor.classList.add("separar-span");

  let spanTiempoAutor = document.createElement("span");
  spanTiempoAutor.classList.add("tiempo");

  let tituloComentario = document.createElement("div");
  tituloComentario.classList.add("titulo-comentario");

  let parrafoComentario = document.createElement("p");
  parrafoComentario.classList.add("comentario");

  spanInfoAutor.textContent = comentarios[i].autor.nombre;
  spanTiempoAutor.textContent = comentarios[i].comentario.tiempo;
  tituloComentario.textContent = comentarios[i].comentario.titulo;
  parrafoComentario.textContent = comentarios[i].comentario.texto;

  infoAutor.appendChild(spanInfoAutor);
  infoAutor.appendChild(spanTiempoAutor);

  infoComentario.appendChild(infoAutor);
  infoComentario.appendChild(tituloComentario);
  infoComentario.appendChild(parrafoComentario);

  comentario.appendChild(infoComentario);
  contendorComentarios.appendChild(comentario);
}
