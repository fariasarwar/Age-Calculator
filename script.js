function calculateAge() {
  // Get the birthdate input value
  const birthdateInput = document.getElementById("birthdate").value;

  // Check if a birthdate is entered
  if (!birthdateInput) {
    alert("Please enter a birthdate.");
    return;
  }

  // Convert the birthdate to a Date object
  const birthdate = new Date(birthdateInput);

  // Get the current date
  const currentDate = new Date();

  // Check if the birthdate is in the future
  if (birthdate > currentDate) {
    alert("Birthdate cannot be in the future.");
    return;
  }

  // Calculate the age by subtracting birth year from current year
  let age = currentDate.getFullYear() - birthdate.getFullYear();

  // Adjust the age if the current date is before the birthdate this year
  const monthDifference = currentDate.getMonth() - birthdate.getMonth();
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && currentDate.getDate() < birthdate.getDate())
  ) {
    age--;
  }

  // Calculate exact age in years and months
  let monthAge = currentDate.getMonth() - birthdate.getMonth();
  if (monthAge < 0) {
    monthAge += 12; // Adjust for negative months if the current date is before the birth month
  }

  // Display the calculated age
  document.getElementById(
    "age"
  ).textContent = `You are ${age} years and ${monthAge} months old.`;
}
