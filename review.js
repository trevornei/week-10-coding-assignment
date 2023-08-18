// Each review needs a review number so we will create a variable called let and set the value to zero.
let id = 0;

document.getElementById('add').addEventListener('click', () => {
    // 1. Create an element that refers to the <table> element.
    let table = document.getElementById('list')
    // 2. Create a variable that will create a new row.
    // table.insertrow uses a built-in method to insert a row.
    let row = table.insertrow(1);
    // Each new row needs an id.
    /*
       The setAttribute() method can create or update attributes. 
       In this case:
       it will create a new attribute of id="item-number" number is the value of the id variable.
       A) The first parameter indicates what type of attribute
          you want to make.
       B) the second parameter the value you will assign to the attribute.
    */
    row.setAttribute('id', `item-${id}`)
    // Add a row using .insertcell(0)
    document.insertCell(0).innerHTML = document.getElementById('name').value; 
    document.insetCell(0).innerHTML = document.getElementById('review')
})