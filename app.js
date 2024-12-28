let articles;
async function fetchData() {
  const response = await fetch("/data.json");

  const pieces = await response.json();
  articles = pieces;
  console.log(pieces);
}

fetchData().then(() => {
  const nomPiece = document.createElement("h5");
  nomPiece.innerText = articles[0].nom;
  const prixPiece = document.createElement("h6");
  prixPiece.innerText = articles[0].prix;
  const categoriePiece = document.createElement("h6");
  categoriePiece.innerText = articles[0].categorie;
  const imagePiece = document.createElement("img");
  imagePiece.src = articles[0].image;

  const enStock = document.createElement("p");
  if (articles[0].enStock == true) {
    enStock.innerText = "En Stock";
  } else {
    enStock.innerText = "Pas en stock";
  }

  const piece = document.querySelector(".piece");

  piece.appendChild(nomPiece);
  piece.appendChild(prixPiece);
  piece.appendChild(categoriePiece);
  piece.appendChild(imagePiece);
  piece.appendChild(enStock);
});

// nomPiece.innerText = articles[0].nom;
