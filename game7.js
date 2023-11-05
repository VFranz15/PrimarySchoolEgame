var buttonA = document.getElementById("optionA");
var buttonB = document.getElementById("optionB");
var buttonC = document.getElementById("optionC");
var buttonD = document.getElementById("optionD");

buttonA.addEventListener("click", getAnswer);
buttonB.addEventListener("click", getAnswer);
buttonC.addEventListener("click", getAnswer);
buttonD.addEventListener("click", getAnswer);

function getAnswer(event) {
  var selectedOption = event.target; // Get the clicked button
  var correctAnswer = "A) 9"; // Change this to the correct answer
  if (selectedOption.textContent === correctAnswer) {
    Swal.fire({
        icon: 'success',
        title: 'Correct!',
        showConfirmButton: false,
        timer: 1500
      });
  } else {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Wrong answer!'
      })
  }
}
