const formEl = document.querySelector(".form");
const inputName = document.querySelector(".input-name");
const inputEmail = document.querySelector(".input-email");
const inputPhone = document.querySelector(".input-phone");
const inputMessage = document.querySelector(".input-message");
const tbodyEl = document.querySelector("table tbody")

const data = []


formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  let user = {
    id: new Date().getTime(),
    name: inputName.value,
    email: inputEmail.value,
    phoneNumber: inputPhone.value,
    message: inputMessage.value,
  };
  data.push(user)
  createTableRow(data);
  inputName.value = ""
  inputEmail.value = ""
  inputPhone.value = ""
  inputMessage.value = ""
});

function createTableRow(data) {
    tbodyEl.innerHTML = null
  data.forEach((element, index) => {
    const trEl = document.createElement("tr");
    trEl.innerHTML = `<td>${index + 1}</td>
        <td>${element.name}</td>
        <td>${element.email}</td>
        <td>${element.phoneNumber}</td>
        <td>${element.message}</td>`;

    tbodyEl.appendChild(trEl)
  });
}
