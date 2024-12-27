const response = await fetch(data.json);

const pieces = await response.json();

console.log(pieces);
