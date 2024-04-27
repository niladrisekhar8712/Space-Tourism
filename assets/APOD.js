fetch("https://api.nasa.gov/planetary/apod?api_key=j4oYV7wdoXGH8iQyFHcOdEsrFffVyM2cfW2pPk0W")
  .then(response => response.json())
  .then(data => {
    document.getElementById("pic1").src = data.url;
    document.getElementById("desc1").textContent = data.explanation;
    document.getElementById("title1").textContent = data.title;
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });