const form = document.forms["formPeli"];

form.addEventListener("submit", evt => {
  evt.preventDefault();

  console.log(evt.target);

  let inputs = form.querySelectorAll("input");

  const data = {};

  for (let index = 0; index < inputs.length; index++) {
    const el = inputs[index];

    if (el.type !== "submit") {
      data[el.name] = el.value;
    }
  }

  const textArea = form.querySelector("textarea");

  data[textArea.name] = textArea.value;

  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: data,
    mode: "cors",
    cache: "default"
  };

  const url = "http://localhost:8080/api/peliculas";

  axios
    .post(url, config)
    .then(response => console.log(response))
    .catch(error => console.log(error));
});
