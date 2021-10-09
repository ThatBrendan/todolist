const pushbutton = document.querySelector("#pushbtn");
const newtask = document.querySelector("#newtask");
const newinput = document.querySelector("#input");
const currentTask = document.querySelector("#tasks");

pushbutton.addEventListener("click", function () {
  if (newinput.value.length == 0) {
    alert("Please enter a task");
  } else {
    currentTask.innerHTML += `
    <div class = "task">
    <span id = "taskname">
    ${newinput.value}
    </span>
    <button class="delete">
    <i class ="far fa-trash-alt"></i>
    </button>
    </div>`;

    let deleteBtn = document.querySelectorAll(".delete");
    for (let i = 0; i < deleteBtn.length; i++) {
      deleteBtn[i].addEventListener("click", function () {
        this.parentNode.remove();
      });
    }

    let tasks = document.querySelectorAll(".task");
    for (let i = 0; i < tasks.length; i++) {
      tasks[i].addEventListener("click", function () {
        this.classList.toggle("completed");
      });
    }

    newinput.value = "";
  }
});
