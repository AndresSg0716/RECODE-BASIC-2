import { contactStorage } from "./contactStorage.js";
import { fetchContactInfo } from "./api.js";

const contactList = document.getElementById("contactList");
const searchInput = document.getElementById("search");

function renderContacts(contacts) {
  contactList.innerHTML = "";
  contacts.forEach((contact, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
            <span>${contact.name} - ${contact.phone} - ${contact.email}</span>
            <button class="edit" data-index="${index}">Editar</button>
            <button class="delete" data-index="${index}">Eliminar</button>
        `;
    contactList.appendChild(li);
  });
}

function loadContacts() {
  const contacts = contactStorage.getContacts();
  renderContacts(contacts);
}

function addContact() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;

  if (name && phone && email) {
    fetchContactInfo(name).then((info) => {
      const newContact = {
        name,
        phone,
        email,
        photo: info ? info.photo : "",
      };
      contactStorage.addContact(newContact);
      loadContacts();
    });
  }
}

function editContact(index) {
  const contacts = contactStorage.getContacts();
  const contact = contacts[index];

  document.getElementById("name").value = contact.name;
  document.getElementById("phone").value = contact.phone;
  document.getElementById("email").value = contact.email;

  document
    .getElementById("addContact")
    .removeEventListener("click", addContact);
  document
    .getElementById("addContact")
    .addEventListener("click", () => updateContact(index));
}

function updateContact(index) {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;

  const updatedContact = { name, phone, email };
  contactStorage.updateContact(index, updatedContact);
  loadContacts();

  document
    .getElementById("addContact")
    .removeEventListener("click", updateContact);
  document.getElementById("addContact").addEventListener("click", addContact);
}

function deleteContact(index) {
  contactStorage.deleteContact(index);
  loadContacts();
}

function searchContacts() {
  const query = searchInput.value.toLowerCase();
  const contacts = contactStorage
    .getContacts()
    .filter((contact) => contact.name.toLowerCase().includes(query));
  renderContacts(contacts);
}

document.getElementById("addContact").addEventListener("click", addContact);
contactList.addEventListener("click", (e) => {
  if (e.target.classList.contains("edit")) {
    editContact(e.target.dataset.index);
  } else if (e.target.classList.contains("delete")) {
    deleteContact(e.target.dataset.index);
  }
});
searchInput.addEventListener("input", searchContacts);

loadContacts();
