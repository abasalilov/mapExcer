var arr1 = [1, 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];

var arr2 = ["dog", "cat", "bird", "ferret"];

function Multiply22(number) {
    return number *22;
}

function luckyNum(number){
    return number + " is my lucky number!";
}

function addWord(animal) {
	return animal + " would be great pet!";
}

arr1.map(Multiply22);

arr2.map(addWord);

arr1.map(luckyNum);


