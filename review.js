// Each review needs a review number so we will create a variable called let and set the value to zero.
let id = 0;

document.getElementById('add').addEventListener('click', (event) => {
    // 1. Create an element that refers to the <table> element.
    let table = document.getElementById('list');
    event.preventDefault();
    // 2. Create a variable that will create a new row.
    // table.insertrow uses a built-in method to insert a row at the bottom of the list.
    let row = table.insertRow(-1);
    // Each new row needs an id.
    /*
       The setAttribute() method can create or update attributes. 
       In this case:
       it will create a new attribute of id="item-number" number is the value of the id variable.
       A) The first parameter indicates what type of attribute
          you want to make.
       B) the second parameter the value you will assign to the attribute.
    */
    row.setAttribute('id', `item-${id}`);
    /*
        insertCell() inserts data into table dataCell or <td> as represented in the HTML.
            1. Create a variable for each cell that is being represented.
                - Get the element by the id
                - use dot notation plus .value to extract data from <form> input.
    */
   // Cell 0 is represents the id/review-number.
   let cell1 = row.insertCell(0);
   // Insert review number into table. 
   cell1.innerHTML = id;

   // <td> Represents users name.
   let cell2 = row.insertCell(1);
   // use .innerHTML to insert data from <form> into HTML.
   cell2.innerHTML = document.getElementById('name').value;

   let cell3 = row.insertCell(2);
   cell3.innerHTML = document.getElementById('review').value;

   // Final Step: Use the postfix increment to change the id number for a new review.
   id++;
});