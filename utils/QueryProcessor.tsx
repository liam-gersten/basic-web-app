export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  } else if (query == "What is your name?") {
    return ("Liam-Jack")
  } else if (query.startsWith("Which of the following numbers is the")) {
    if (query.includes("largest")) {
      var prefix: string = "Which of the following numbers is the largest: ";
      var newQuery: string = query.slice(prefix.length, -1);
      var numbers: string[] = newQuery.split(", ", 3);
      var numberArray = [];
      for (var i = 0; i < numbers.length; i++)
          numberArray.push(parseInt(numbers[i]));
      return (String(Math.max(...numberArray)));
    } 
  } else if (query.startsWith("What is ")) {
    if (query.includes("plus")) {
      var prefix: string = "What is ";
      var newQuery: string = query.slice(prefix.length, -1);
      var numbers: string[] = newQuery.split(" plus ", 2);
      var numberArray = [];
      for (var i = 0; i < numbers.length; i++)
          numberArray.push(parseInt(numbers[i]));
      return (String(numberArray[0] + numberArray[1]));
    } else if (query.includes(" multiplied by ")) {
      var prefix: string = "What is ";
      var newQuery: string = query.slice(prefix.length, -1);
      var numbers: string[] = newQuery.split(" multiplied by ", 2);
      var numberArray = [];
      for (var i = 0; i < numbers.length; i++)
          numberArray.push(parseInt(numbers[i]));
      return (String(numberArray[0] * numberArray[1]));
    } else if (query.includes(" minus ")) {
      var prefix: string = "What is ";
      var newQuery: string = query.slice(prefix.length, -1);
      var numbers: string[] = newQuery.split(" minus ", 2);
      var numberArray = [];
      for (var i = 0; i < numbers.length; i++)
          numberArray.push(parseInt(numbers[i]));
      return (String(numberArray[0] - numberArray[1]));
    } else if (query.includes(" to the power ")) {
      var prefix: string = "What is ";
      var newQuery: string = query.slice(prefix.length, -1);
      var numbers: string[] = newQuery.split(" to the power of ", 2);
      var numberArray = [];
      for (var i = 0; i < numbers.length; i++)
          numberArray.push(parseInt(numbers[i]));
      return (String(numberArray[1]));
      // return (String(Math.pow(numberArray[0], numberArray[1])));
    }
  
  } else if (query.startsWith("Which of the following numbers is both a square and a cube: ")) {
    var prefix: string = "Which of the following numbers is both a square and a cube: ";
    var newQuery: string = query.slice(prefix.length, -1);
    var numbers: string[] = newQuery.split(", ", 2);
    for (var i = 0; i < numbers.length; i++)
      if (Number.isInteger(Math.sqrt(parseInt(numbers[i])))) {
        return (numbers[i]);
        // if (Number.isInteger(Math.pow(parseInt(numbers[i]), 1/3))) {
        //   return (numbers[i]);
        // }
      }
    return (query);
  } else {
    return "";
  }
  
  return "";
}
