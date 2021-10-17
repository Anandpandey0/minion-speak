var inputMessage = document.querySelector("#input");
var translateBtn = document.querySelector("#translatebtn");
var ouputMessage = document.querySelector("#output");

translateBtn.addEventListener("click", clickEventHandler);

function clickEventHandler() {
    const text = inputMessage.value;
    var url = "https://api.funtranslations.com/translate/minion.json?text=" + text;
  
    console.log(text)

    fetch(url)
        .then(response => response.json())
        .then(json => {
            var result = json.contents.translated;
            
            ouputMessage.innerText = result;
        })
        .catch(errorHandler)

}

function errorHandler(error) {
    console.log(error);
    alert("You can try upmost 3 times")
}