//storage of objects in an array

let contactArray = [];

//class template for different entries
class Contact {
  constructor(name, phone, mail) {
    this._name = name;
    this._phone = phone;
    this._mail = mail;
  }
};

function addContact (object) {
  contactArray.push(object);
};

const add = document.getElementById("addBtn");
add.addEventListener("click", () => {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let mail = document.getElementById("mail").value;

  addContact(new Contact(name, phone, mail))

  console.log(contactArray)

  renderContactArray();

})

function renderContactArray() {

  div1.innerHTML = ""

  for (i = 0; i < contactArray.length; i++) {
    let nameElement = document.createElement("div");
    nameElement.innerHTML = contactArray[i]._name;
    div1.appendChild(nameElement)

    let phoneElement = document.createElement("div");
    phoneElement.innerHTML = contactArray[i]._phone;
    div1.appendChild(phoneElement)

    let mailElement = document.createElement("div");
    mailElement.innerHTML = contactArray[i]._mail;
    div1.appendChild(mailElement)
  }
}

const search = document.getElementById("searchBtn");
search.addEventListener("click", () => {
  console.log("maxi")
})

