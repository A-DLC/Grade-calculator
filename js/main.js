//students score = 60%

//total score = 100%

//fn calc student

const studentGradeCalc = (studentScore, totalScore, studentName) => {
  const percentage = (studentScore / totalScore) * 100;
  let grade = "";
  let remarks = "";

  if (percentage >= 90) {
    grade = "A";
    remarks = "Excellent";
  } else if (percentage >= 80) {
    grade = "B";
    remarks = "Very Good";
  } else if (percentage >= 70) {
    grade = "C";
    remarks = " Good";
  } else if (percentage >= 60) {
    grade = "D";
    remarks = "fair";
  } else if (percentage >= 50) {
    grade = "E";
    remarks = "Pass";
  } else if (percentage >= 40) {
    grade = "F";
    remarks = "Failed";
  }
  return `${studentName} you got (${grade}) ${percentage}% (${remarks})`;
};

//DOM Manipulation

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  //avoid page refreshing
  e.preventDefault();

  const studentName = document.getElementById("studentName").value;
  const studentScore = document.getElementById("studentGrade").value;

  //Check if theres something summited
  if (!studentScore || studentName) {
    alert("Please Submit all the details especified.");
    return;
  }

  //Check if the student score is greater than or equal to the student score
  const results = studentGradeCalc(studentScore, 100, studentName);
  //display the result

  const resDisplay = document.querySelector(".results");

  resDisplay.innerHTML = results;
});
