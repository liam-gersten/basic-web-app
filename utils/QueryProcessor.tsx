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
    } else {
      return "";
    }
  }
  return "";
}
