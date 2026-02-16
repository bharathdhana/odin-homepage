document.getElementById("submit-button").addEventListener("click", function () {
  if (
    document.getElementById("firstName").value === "" ||
    document.getElementById("lastName").value === "" ||
    document.getElementById("email").value === "" ||
    document.getElementById("password").value === "" ||
    document.getElementById("confirmPassword").value === "" ||
    document.getElementById("Number").value === ""
  ) {
    alert("Please fill in all fields.");
    return;
  }
  alert("Account created successfully!");
});
