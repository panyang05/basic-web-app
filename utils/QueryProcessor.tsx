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

  if (query.toLowerCase().includes("multiplied by")) {
    const numbers = query.match(/\d+/g);
    if (numbers) {
      return numbers.reduce((acc, curr) => acc * parseInt(curr), 1).toString();
    }
    return "No numbers found in the query.";
  }

  if (query.toLowerCase().includes("both a square and a cube")) {
    const numbers = query.match(/\d+/g);
    if (numbers) {
      return numbers.filter(num => {
        const sqrt = Math.sqrt(parseInt(num));
        const cbrt = Math.cbrt(parseInt(num));
        return sqrt === Math.floor(sqrt) && cbrt === Math.floor(cbrt);
      }).join(", ");
    }
    return "No numbers found in the query.";
  }

  if (query.toLowerCase().includes("prime")) {
    const numbers = query.match(/\d+/g);
    if (numbers) {
      return numbers.filter(num => {
        if (parseInt(num) < 2) {
          return false;
        }
        for (let i = 2; i <= Math.sqrt(parseInt(num)); i++) {
          if (parseInt(num) % i === 0) {
            return false;
          }
        }
        return true;
      }).join(", ");
    }
    return "No numbers found in the query.";
  }

  if (query.toLowerCase().includes("minus")) {
    const numbers = query.match(/\d+/g);
    if (numbers) {
      const number1 = parseInt(numbers[0]);
      const number2 = parseInt(numbers[1]);
      return (number1 - number2).toString();
    }
    return "No numbers found in the query.";
  }

  if (query.toLowerCase().includes("the power of")) {
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length === 2) {
      return Math.pow(parseInt(numbers[0]), parseInt(numbers[1])).toString();
    }
    return "No numbers found in the query.";
  }

  return "";
}
