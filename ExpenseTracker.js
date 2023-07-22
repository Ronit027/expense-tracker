let expense_per_category = {
  Food: 0,
  Travel: 0,
  Entertainment: 0,
  Groceries: 0,
  Others: 0,
};

var count = 4;

// update_sum();

function update_sum(category) {
  console.log("inside update_sum");

  for (item in expense_per_category) {
    if (category === item) {
      document.getElementById(category.toLowerCase()).innerHTML =
        " - " + expense_per_category[item] + " Rs. Spent ";
    }
  }
}

function add_expense() {
  console.log("inside add_expense");
  var amount = document.getElementsByClassName("form-input")[0].value;
  var category = document.getElementById("category").value;
  var date = document.getElementsByClassName("form-input")[1].value;
  var note = document.getElementsByClassName("form-input")[2].value;
  // var selected = document.getElementsByClassName("form-input")[1].value;
  console.log(amount + " " + category + " " + date + " " + note);

  if (amount && date && note && category) {
    alert("SUCCESSFULLY ADDED EXPENSE !! ");
    var table = document.getElementsByTagName("table")[0];
    var new_row = document.createElement("tr");

    new_row.innerHTML = `<tr style=border-bottom:1px solid white;>
    <td>${amount}</td>
    <td>${category}</td>
    <td>${date}</td>
    <td>${note}</td>
    </tr>
    `;

    table.appendChild(new_row);

    expense_per_category[category] = parseInt(expense_per_category[category]) + parseInt(amount);
    console.log(expense_per_category[category]);
    update_sum(category);
    console.log(count);
    document.getElementsByClassName("add-new-expense")[0].style.display = "none";
  } else {
    alert(" Please enter all the details !! ");
  }
}

function add_category() {
  var new_category_value = document.getElementsByName("new-category")[0].value;
  console.log("inside add_category");
  if (new_category_value) {
    var dropdown = document.getElementsByName("category")[0];
    var available_categories = document.getElementsByClassName("available-categories")[0];
    var new_category_option = document.createElement("option");
    new_category_option.innerHTML = `<option value=${new_category_value}>${new_category_value}</option>`;
    count++;
    expense_per_category[new_category_value] = 0;
    var new_category_span = document.createElement("span");
    new_category_span.innerHTML = `<span>${new_category_value}::<span id="${new_category_value.toLowerCase()}"> 0 Rs Spent</span></span>`;
    console.log(expense_per_category);
    dropdown.appendChild(new_category_option);
    available_categories.appendChild(new_category_span);
    document.getElementsByClassName("add-category")[0].style.display = "none";
  }
}

function add_category_page() {
  if (document.getElementsByClassName("add-category")[0].style.display == "block") {
        document.getElementsByClassName("add-category")[0].style.display = "none";
} 
  else {
    document.getElementsByClassName("add-category")[0].style.display = "block";
  }
}

function add_expense_page() {
  if (document.getElementsByClassName("add-new-expense")[0].style.display =="block") {
        document.getElementsByClassName("add-new-expense")[0].style.display ="none";
} 
  else {
    document.getElementsByClassName("add-new-expense")[0].style.display ="block";
  }
}