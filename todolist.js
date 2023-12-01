var input = document.querySelector("#input");
var ol = document.querySelector("ol");
var button = document.querySelector("button");

function addToList(event) {
  if (input.value.length !== 0 && event.code === "Enter") {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));

    ol.appendChild(li);
    input.value = "";
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      ol.removeChild(li);
    });
    var completeButton = document.createElement("button");
    completeButton.textContent = "Completed";
    completeButton.addEventListener("click", function () {
      li.classList.toggle("completed");
    });
    li.appendChild(deleteButton);
    li.appendChild(completeButton);
  }
}

input.addEventListener("keydown", addToList);

function background() {
  let inputBackground = document.getElementById("background");
  let body = document.querySelector("body");

  inputBackground.addEventListener("input", function () {
    body.style.backgroundColor = inputBackground.value;

    if (inputBackground.value === "#000000") {
      let li = document.querySelector("li");
      let button = document.querySelector("button");
      console.log("button");
    }
  });
}
background();
