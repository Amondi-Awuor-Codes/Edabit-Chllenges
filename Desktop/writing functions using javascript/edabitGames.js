//higher-order function.
function redundant(str)
{
	return function ()
	{
		return str;
	};
    
}

//SumOfCubes
function sumOfCubes(nums) {
	var sum = 0;
	var l = nums.length;
	for (var i = 0; i < l; i++){
		sum += Math.pow(nums[i],3);
	}
	return sum;
}

//filter: Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".
function sevenBoom(arr)
{
	for (let num of arr) {
        if (num.toString().includes('7')) {
            return "Boom!";
        }
    }
    return "there is no 7 in the array";
}


//Is the number symmetrical?
function isSymmetrical(num)
{
    let strNum = num.toString();
    let reversed = strNum.split('').reverse().join('');
    return strNum === reversed;
}

//sumpolygon
function sumPolygon(n)
{
    return (n - 2) * 180;
}

//cubes
function cubes(a)
{
	return a ** 3;
}

//function returng age in days
function calcAge(age)
{
	return age*365;
}
//Create a function that takes voltage and current and returns the calculated power.
function circuitPower(voltage, current)
{
	return voltage*current;
}

//Write a function that takes an integer minutes and converts it to seconds.
function convert(minutes)
{
	return minutes*60;
}

//Write a function that converts hours into seconds.
function howManySeconds(hours)
{
return hours*3600;	
}

//Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.
function nextEdge(side1, side2)
{
	return (side1+side2)-1;
}

//Write a function that takes the base and height of a triangle and return its area.
function triArea(base, height)
{
return (base * height) / 2;	
}

//Create a function that takes in an array of numbers and returns the sum of its cubes.
function addition(num)
{
	return num+1;
}

//Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
function minMax(arr) {
    const min = Math.min(...arr); // finds smallest number
    const max = Math.max(...arr); // finds largest number
    return [min, max]; // return as an array [min, max]
}

// Examples:
console.log(minMax([4, 1, 7, 9, 0])); // prints [0, 9]
console.log(minMax([10, -5, 3, 99])); // prints [-5, 99]
