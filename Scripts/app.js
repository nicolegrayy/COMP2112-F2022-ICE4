"use strict";
// IIFE -- Immediately Invoked Function Expression
// AKA - Self Executing Function
(function () {
    /**
     * This method saves our data to local storage
     *
     * @param {any[]} contactList
     */
    function SaveContactListData(contactList) {
        let count = 0;
        for (const contact of contactList) {
            let newContact = new Contact(contact.FullName, contact.ContactNumber, contact.EmailAddress);
            localStorage.setItem(count.toString(), newContact.toJSON());
            count++;
        }
    }
    /**
     * This method reads our data from localStorage and returns a contact array
     *
     * @returns  {Contact[]}
     */
    function LoadContactListData() {
        //  create an empty Contact Array Container
        let ContactArray = new Array();
        let keys = Object.keys(localStorage);
        for (let key of keys) {
            let newContact = new Contact();
            newContact.fromJSON(localStorage.getItem(key));
            ContactArray.push(newContact);
        }
        return ContactArray;
    }
    function Start() {
        console.log("App Started!");
        $.getJSON("./Data/contacts.json", function (dataSource) {
            // Get your data from the DataSource
            let contactList = dataSource.ContactList;
            SaveContactListData(contactList);
            let ContactArray = LoadContactListData();
            for (const contact of ContactArray) {
                console.log(contact.toString());
            }
        });
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map