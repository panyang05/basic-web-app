export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    return ("My Andrew ID is yangp2"); 
  }

  if (query.toLowerCase().includes("name")) {
    return ("yang");
  }

  if (query.toLocaleLowerCase().includes("largest")) {
    const numbers = query.match(/\d+/g);
    if (numbers) {
      return Math.max(...numbers.map(Number)).toString();
    }
    return "No numbers found in the query.";
  }

  if (query.toLowerCase().includes("plus")) {
    const numbers = query.match(/\d+/g);
    if (numbers) {
      return numbers.reduce((acc, curr) => acc + parseInt(curr), 0).toString();
    }
    return "No numbers found in the query.";
  }

  return "";
}
