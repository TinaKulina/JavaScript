//  String to hold the discussion 
var answers;
// Generic responses  
const genericResponses = [
 "Так так...можно поподробней?",
 "Продолжайте...",
 "Ну что вам сказать..",
 "Это очень необычный случай",
"Мой опыт подсказывает, что Вам пора бы на диету",
 "Вы лучше подумайте, как изменить образ жизни",
 "Афигеть..ну и жалобы пошли..",
 "Продолжайте. Не совсем понятно, что имеется в виду.."];


// Start a message for the user after the page loads.
function begin(){
        answers = '<p> 100% гарантия диагностики. Но это не точно:) </p>';
        content.innerHTML = answers;  
}
// Called when the submit button is pressed
function submition(){
        var youWrote = textarea.value;
        answers += "<p> <em>" + youWrote + " </em></p>" ;
        var myAnswer = randomElement(genericResponses);
        answers += "<p>" + myAnswer + "</p>";
        content.innerHTML = answers;  
}
// Returns a random element in an array
function randomElement(myArray) {
        var index = Math.floor(Math.random() * myArray.length);
        return myArray[index]; 
}
         