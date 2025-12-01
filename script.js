"use strict";

// function for our list view
async function getAllRecords() {
  let getResultElement = document.getElementById("contacts");

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer patLtkbXakgkT1gFZ.6b9484757dadc3f47ed82a9ff56bd5882c082f0a7f1bcdba4d70748365394363`,
    },
  };

  await fetch(
    `https://api.airtable.com/v0/appv9pErMJsyQ1KU6/Table%201/rec3QDR6m6LHCGXN4`,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // response is an object w/ .records array
    });
}

