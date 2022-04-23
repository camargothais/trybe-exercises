function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

function calendarDays(days) {
  let listElement = document.querySelector("#days");
  for (let i = 0; i < days.length; i += 1) {
    let liElement = document.createElement("li");
    liElement.innerText = days[i];
    liElement.setAttribute("class", "day");
    listElement.appendChild(liElement);
    if (days[i] === 24 || days[i] === 25 || days[i] === 31) {
      liElement.setAttribute("class", "day holiday");
    }
    if (days[i] === 4 || days[i] === 11 || days[i] === 18 || days[i] === 25) {
      liElement.setAttribute("class", "day friday");
    }
  }
}

calendarDays(dezDaysList);

let divButton = document.querySelector(".buttons-container");

function holidays(feriados) {
  let holidayButton = document.createElement("button");
  holidayButton.setAttribute("id", "btn-holiday");
  holidayButton.innerText = "Feriados";
  divButton.appendChild(holidayButton);
  holidayButton.addEventListener("click", backgroundButton);
}

function backgroundButton() {
  let originalColor = "rgb(238,238,238)";
  let color = "green";
  let holidaysElements = document.querySelectorAll(".holiday");
  for (let i = 0; i < holidaysElements.length; i += 1) {
    if (holidaysElements[i].style.backgroundColor === color) {
      holidaysElements[i].style.backgroundColor = originalColor;
    } else {
      holidaysElements[i].style.backgroundColor = color;
    }
  }
}

holidays("Feriados");

let dezFridays = [4, 11, 18, 25];

function fridays(sextas) {
  let fridayButton = document.createElement("button");
  fridayButton.innerText = "Sexta-feira";
  fridayButton.setAttribute("id", "btn-friday");
  divButton.appendChild(fridayButton);

  let friday = document.querySelectorAll(".friday");

  fridayButton.addEventListener("click", function () {
    for (let i = 0; i < friday.length; i += 1) {
      if (friday[i].innerText !== "SEXTA-FEIRA!") {
        friday[i].innerText = "SEXTA-FEIRA!";
      } else {
        friday[i].innerText = sextas[i];
      }
    }
  });
}

fridays(dezFridays);

let days = document.querySelectorAll(".day");

for (li of days) {
  li.addEventListener("mouseover", function (ev) {
    ev.target.style.fontSize = "60px";
  });
}

for (li of days) {
  li.addEventListener("mouseleave", function (ev) {
    ev.target.style.fontSize = "20px";
  });
}

let divElement = document.querySelector(".my-tasks");

function addTask(task) {
  let newTask = document.createElement("span");
  newTask.innerHTML = task;
  divElement.appendChild(newTask);
}

addTask("fazer bolo");

let newColor = document.createElement("div");

function color(color) {
  newColor.setAttribute("class", "task");
  newColor.style.backgroundColor = color;
  divElement.appendChild(newColor);
}

color("pink");

function adcClass() {
  divElement;
  let classSele = document.getElementsByClassName("task selected");
  let classTask = document.querySelector(".task");

  classTask.addEventListener("click", function (event) {
    if (classSele.length === 0) {
      event.target.setAttribute("class", "task selected");
    } else {
      event.target.setAttribute("class", "task");
    }
  });
}

adcClass();

function setDayColor() {
  let selectedTask = document.getElementsByClassName("task selected");
  let days = document.querySelector("#days");
  let taskDiv = document.querySelector(".task");
  let taskColor = taskDiv.style.backgroundColor;

  days.addEventListener("click", function (event) {
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = "rgb(119,119,119)";
    }
  });
}

setDayColor();
