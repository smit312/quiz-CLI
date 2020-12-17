var readlinesync = require('readline-sync');
score = 0;
var uname  = readlinesync.question ("what's your name? ");
console.log ("welcome : " + uname +  " Let's play the Quiz!!");
//function
function play (question,answer)
{
  var userans = readlinesync.question(question);

  if (userans == answer)
  {
    console.log ("right !");
    score = score + 1;
  }
  else
  {
    console.log ("you are wrong !");
    score = score - 1;
  }
   console.log("here is your score :" + score);
   console.log ("------------------------------");
}
 //calling the function




var question = [{
  question : 'National Song of India: ',
  answer : 'vande mataram',
},{
 question : 'National Motto of India: ',
 answer : 'satyameva jayate',
},{
    question : 'India\'s Largest City by Population: ',
    answer : 'mumbai',
},
{
  question : 'Golden Temple is situated in: ',
   answer : 'amritsar'
}]
//loop

for (var i = 0 ; i<question.length ; i++)
{
  var currentquestion = question[i];
  play(currentquestion.question , currentquestion.answer)

}
console.log('\n');
console.log('Congratulations,' +uname +'  your Total Score is:  ',score);