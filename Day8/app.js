async function getApi(urlData) {
  const response = await fetch(urlData);
  var data = await response.json();
  return data;
}

var submitBtn = document.getElementById("submit-btn");
var quoteData = document.querySelector(".quote-data");
var author = document.querySelector('.author')

submitBtn.addEventListener("click", () => {
  var data = getApi(
    "https://raw.githubusercontent.com/lukePeavey/quotable/master/data/sample/quotes.json"
  );
  data.then((a) => {
    generateRandom(a);
  });
});

function generateRandom(data) {
  var rand = Math.floor(Math.random() * (data.length - 1));
  quoteData.innerText = data[rand].content;
  author.innerText = " -  " + data[rand].author;
}
