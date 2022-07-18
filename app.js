/*
fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => res.json())
  .then(data => {
    document.getElementById("image-container").innerHTML = `
      <img src="${data.message}" alt="picture of random dog" />
`;
  });
  */
fetch("https://dog.ceo/api/breeds/image/random")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("image-container").innerHTML = `
            <img src="${data.message}" />
        `;
  });
