var wordList = ["cat", "dog", "fish" ];
window.onload;selectWord(); //loading a new random word everytime the page loads
var guessedLetters ="";
String.prototype.replaceAt=function(index, replacement)
{
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

    function selectWord()
    {
        randomWord = wordList[Math.floor(Math.random() * wordList.length)];
        console.log(randomWord);
        masked="";

        for(i=0;i<randomWord.length;i++)
        {
            masked += "*";
        }


        console.log(masked);
    }
function guesses()
{
    var userInput = prompt("Guess a letter: ");
    if (guessedLetters.indexOf(userInput) > -1)
    {
        alert("Already guessed that letter "+userInput);
        return;
    }

    guessedLetters += userInput;

    console.log("guessed letters = "+guessedLetters);

    var letterPosition = randomWord.indexOf(userInput);
    if (letterPosition> -1)
{
    console.log("found the letter at " + letterPosition);
    masked = masked.replaceAt(letterPosition,userInput);
    console.log(masked);


    alert(userInput);

}

}
while(true) {
    guesses();
}
