export const contactStorage = {
    getContacts() {
        const contacts = localStorage.getItem('contacts');
        return contacts ? JSON.parse(contacts) : [];
    },
    saveContacts(contacts) {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    },
    addContact(contact) {
        const contacts = this.getContacts();
        contacts.push(contact);
        this.saveContacts(contacts);
    },
    updateContact(index, updatedContact) {
        const contacts = this.getContacts();
        contacts[index] = updatedContact;
        this.saveContacts(contacts);
    },
    deleteContact(index) {
        const contacts = this.getContacts();
        contacts.splice(index, 1);
        this.saveContacts(contacts);
    }
}