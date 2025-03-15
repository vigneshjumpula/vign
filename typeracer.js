let id1 = document.getElementById("bg1");
let speedTypingTest = document.getElementById("speedTypingTest");
let timer = document.getElementById("timer");
let quoteDisplay = document.getElementById("quoteDisplay");
let result = document.getElementById("result");
let quoteInput = document.getElementById("quoteInput");
let submitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");
let spinner = document.getElementById("spinner");
let counter = 0;
let v = "";
let id = "";
let options = {
    method: "GET",
}

function func1() {
    counter = 0;
    timer.textContent = counter;
    spinner.classList.toggle("d-none");
    id1.classList.add("d-none");
    fetch("https://apis.ccbp.in/random-quote", options)

        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            v = jsonData.content;
            spinner.classList.toggle("d-none");
            id1.classList.remove("d-none");
            console.log(quoteDisplay.textContent = jsonData.content);
        });


    id = setInterval(function() {
        counter = counter + 1;
        timer.textContent = counter + " seconds";
    }, 1000);

}
func1();

submitBtn.addEventListener("click", function(event) {
    let value = quoteInput.value;
    if (v === value) {
        clearInterval(id);
        result.textContent = "You typed in " + counter + " seconds";
    } else {
        result.textContent = "You typed incorrect sentence";
    }
})


resetBtn.addEventListener("click", function(event) {
    clearInterval(id);
    func1();
    quoteInput.value = "";
    result.textContent = "";
})