// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
	if (num1 > num2) {
		return num1;
	}
	else if (num1 < num2) {
		return num2;
	}
	else {
		return num1;
	}
	
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(listOfWords) {
	let longestWord='';
	if (listOfWords.length === 0) {
		return null;
	}
	
	listOfWords.forEach(function(word) {
		if (word.length > longestWord.length) {
		longestWord = word;
		}
	});
	return longestWord;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) { 
    let sum = 0;
    
    numbers.forEach(function(num){
    sum += num;
    });
        return sum;
    };



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
   if (numbers.length===0) { 
	return 0; 
}
    return sumNumbers(numbers)/numbers.length;
}





// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words, searchedWord) {
	if (words.length ===0) {
		return null;
	}
	return words.includes(searchedWord);
}
