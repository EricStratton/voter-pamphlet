// $(document).ready(function () {
//   const age = parseInt(prompt("How old are you?"));

//   if (age >= 18) {
//     $('#voterInfo').show();
//   } else {
//     $('#under-18').show();
//   }
// });

$(document).ready(function () {
  $("form#agePrompt").submit(function (event) {
    event.preventDefault();
    const ageInput = parseInt($("#agePromptInput").val());
    $("#agePrompt").toggle();

    if (ageInput >= 18) {
      $('#voterInfo').show();
    } else {
      $('#under-18').show();
    }
  });
});