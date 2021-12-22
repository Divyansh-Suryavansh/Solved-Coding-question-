function essayEvaluation(str1, str2) {

  let MaxScore = 0;

  let pointsScored= 0;

 //converting both the strings to array so as to evaluate each word. 
 
  let answerArr = str1.split(/[\s,. ]/);
  
  let responseArr = str2. split(/[\s,. ]/) ;


  for (x of answerArr) {
    x.toLowerCase();
    
    //Function call by passing each word from the expected essay format to get points for
    //each and then adding them up to get maximum score. 
    
    let pointForWord = scoreCalculation(x);
    
    MaxScore += pointForWord;
  }
  
  for(y of responseArr) 
    {
    
       //Finding whether the words from the essay submitted are present in the answer expected
       //and if present are given points by passing the word to the function scoreCalculation() 
    
       if(str1.toLowerCase().includes(y.toLowerCase())) 
         {
           let pointForRespWord = scoreCalculation(y) ;
                     pointsScored += pointForRespWord;
       } 
 } 

  
  let percentageScore = (pointsScored/MaxScore) *100;
  return [pointsScored, MaxScore, percentageScore.toPrecision(4) ] ;
}

// Function for points allotment to each word of the essays based on the conditions fulfilled. 

function scoreCalculation(x) {

  // condition to check whether the word is a number. 

  if ( isNaN(parseInt(x)) != true)
  {
    return 4; 
  } 
  
  //condition to check whether the length of the word is greater than 7
  
  else if (x.length > 7)
  {
    return 3;
  } 
  
  //condition to check for word with length lesser than 5
  
  else if (x.length < 5)
  {
    return 0;
  } 
  
  // any other word than does not falls under any given conditions above
  
    else {
    return 1; 
  }
    
}


//Two input strings, one with the expected answer to the essay and the other with the answer submitted by the user. 

let correctAnswer =
  "There are twenty-four hours in a day, 30 days in a month, and 12 months in the calendar year";


let response = "There are Twenty-Four hours in a day. A year has 14 months."

//Function call to evaluate the essay submitted by the user against the
//expected essay by passing both the essay as the arguments to the function. 

let EssayEvaluationResult = essayEvaluation(correctAnswer, response) ;


// Finally, displaying the result of the evaluation. 
//Also the maximum score in the test data is wrong for the answer essay
//as the points given for the word 'Calendar' is given 1 instead of 3.

console.log(`Your score is ${EssayEvaluationResult[0]} out of  ${EssayEvaluationResult[1]}. Your percentage score is  ${EssayEvaluationResult[2]}%`) ;
    

    
