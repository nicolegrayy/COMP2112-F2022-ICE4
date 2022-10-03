"use strict";
// IIFE -- Immediately Invoked Function Expression
// AKA - Self Executing Function
(function () {
    function Start() {
        console.log("App Started!");
        let contactList;
        $.getJSON("./Data/contacts.json", function (dataSource) {
            // Get your data from the DataSource
            contactList = dataSource.ContactList;
            // Load your data into objects
            let contact = new Contact();
            console.log(contact.toString());
        });
        localStorage.setItem("0", "Nicole");
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map