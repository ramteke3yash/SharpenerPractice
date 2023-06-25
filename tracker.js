// Get the form element
const form = document.getElementById("my-form");

// Function to edit an expense
function editExpense(index) {
  // Retrieve the expenses from local storage
  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

  // Get the expense at the specified index
  const expense = expenses[index];

  // Populate the form fields with the expense data
  const nameInput = document.getElementById("name");
  const descriptionInput = document.getElementById("Description");
  const categoryInput = document.getElementById("Category");
  nameInput.value = expense.name;
  descriptionInput.value = expense.description;
  categoryInput.value = expense.category;

  // Store the edit mode and index in the form's dataset
  form.dataset.editMode = "true";
  form.dataset.editIndex = index;
}

// Add event listener for form submission
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  // Get the input values
  const nameInput = document.getElementById("name");
  const descriptionInput = document.getElementById("Description");
  const categoryInput = document.getElementById("Category");
  const name = nameInput.value;
  const description = descriptionInput.value;
  const category = categoryInput.value;

  // Get existing expenses from local storage
  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

  if (form.dataset.editMode === "true") {
    // Editing an existing expense
    const editIndex = form.dataset.editIndex;
    expenses[editIndex] = { name, description, category };
    form.dataset.editMode = "false";
    form.dataset.editIndex = "";
  } else {
    // Creating a new expense
    const expense = { name, description, category };
    expenses.push(expense);
  }

  // Store the updated expenses array in local storage
  localStorage.setItem("expenses", JSON.stringify(expenses));

  // Clear the input fields
  nameInput.value = "";
  descriptionInput.value = "";
  categoryInput.value = "";

  // Load existing expenses from local storage and display them
  loadExpenseList();
});

// Function to delete an expense
function deleteExpense(index) {
  // Get existing expenses from local storage
  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

  // Remove the expense at the specified index
  expenses.splice(index, 1);

  // Store the updated expenses array in local storage
  localStorage.setItem("expenses", JSON.stringify(expenses));

  // Load existing expenses from local storage and display them
  loadExpenseList();
}

// Function to load existing expenses from local storage and display them
function loadExpenseList() {
  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  const expenseList = document.getElementById("expenses");

  // Clear the expense list
  expenseList.innerHTML = "";

  // Display each expense in the expense list
  expenses.forEach(function (expense, index) {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(
        `Expense Amount: ${expense.name}, Description: ${expense.description}, Category: ${expense.category}`
      )
    );

    // Create the Edit button
    const editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    editButton.addEventListener("click", function () {
      editExpense(index);
    });
    li.appendChild(editButton);

    // Create delete button for each expense
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.addEventListener("click", function () {
      deleteExpense(index);
    });

    // Append delete button to the list item
    li.appendChild(deleteButton);
    // Append list item to the expense list
    expenseList.appendChild(li);
  });
}

// Load existing expenses from local storage and display them
document.addEventListener("DOMContentLoaded", function () {
  loadExpenseList();
});
