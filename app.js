// Chapter # 1 Qno 1
function assignment1Q1() {
    alert("Welcome to our Website");
}
// Chapter # 1 Qno 2
function assignment1Q2() {
    alert("Error! Please enter a valid password.");
}
// Chapter # 1 Qno 3
function assignment1Q3() {
    alert("Welcome to JS land...\nHappy Coding!");
}
// Chapter # 1 Qno 4
function assignment1Q4() {
    alert("Welcome to JS land...");
    alert("Happy Coding!");
}
// Chapter # 1 Qno 5
function assignment1Q5() {
    console.log("Hello... I can use JS through my web browser's console");
}


// Chapter # 2 Qno 1
var userName = "Adnan Ahmed Siddiqui";
function assignment2Q1() {
    alert("User Name = " + userName);
}
// Chapter # 2 Qno 2
var myName = "Adnan Ahmed Siddiqui";
function assignment2Q2() {
    alert("My Name = " + myName);
}
// Chapter # 2 Qno 3
var message;
message = "Hello World";
function assignment2Q3() {
    alert(message);
}
// Chapter # 2 Qno 4
var name, age, profession;
name = "Adnan Ahmed Siddiqui";
age = 24;
profession = "Certified Mobile Application Developer"
function assignment2Q4() {
    alert(name);
    alert(age + " years old");
    alert(profession);
}
// Chapter # 2 Qno 5
var food = "PIZZA";
function assignment2Q5() {
    alert(food + "\n" + food.slice(0, -1) + "\n" + food.slice(0, -2) + "\n" + food.slice(0, -3) + "\n" + food.slice(0, -4));
}
// Chapter # 2 Qno 6
var email = "adnanahmed.siddiqui1996@gmail.com";
function assignment2Q6() {
    alert("My email address is " + email);
}
// Chapter # 2 Qno 7
var book = "A smarter way to learn JavaScript";
function assignment2Q7() {
    alert("I am trying to learn from the book " + book);
}
// Chapter # 2 Qno 8
var htmlJS = "Yah! I can write HTML content through JavaScript";
function assignment2Q8() {
    document.write(htmlJS);
    document.write("</br>Press refresh to go home page");
}
// Chapter # 2 Qno 9
var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
function assignment2Q9() {
    document.write(design);
    alert(design);
    document.write("</br>Press refresh to go home page");
}

// Chapter # 3 Qno 1
var age = 24;
function assignment3Q1() {
    alert("I am " + age + " years old");
}
// Chapter # 3 Qno 2
var visited = 0;
function assignment3Q2() {
    visited++;
    alert("You have visited this site " + visited + " times");
}
// Chapter # 3 Qno 3
var birthYear = 1996;
function assignment3Q3() {
    document.write("My birth year is " + birthYear + "</br>");
    document.write("Data type of my declared variable is number");
    document.write("</br>Press refresh to go home page");
}
// Chapter # 3 Qno 4
var visitorName, productTitle, quantity;
visitorName = "Adnan Ahmed Siddiqui";
productTitle = "T-shirt";
quantity = 5;
function assignment3Q4() {
    document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing Store");
    document.write("</br>Press refresh to go home page");
}

// Chapter # 4 Qno 1
var name= "Adnan Ahmed", age = 24, profession = "Programmer";
function assignment4Q1() {
    alert("Var1 Name = " + name + "\nVar2 Age = " + age + "\nVar3 Profession = " + profession);
}
// Chapter # 4 Qno 2
var webVisitor, $rose, _userName, page5, Game;
// var 100, alert, "name", @book, roll No;
function assignment4Q2() {
    alert("5 Legal Variable = webVisitor, $rose, _userName, page5, Game");
    alert("5 Illegal Variable = 100, alert, name, @book, roll No;");
}
// Chapter # 4 Qno 3
function assignment4Q3() {
    document.write("<h1>Rules for naming JS variables</h1></br></br>");
    document.write("<p>Variable names can only contain letters, numbers, $ and _. For example $my_1stVariable</p>");
    document.write("<p>Variables must begin with a letter, $ and _. For example $name, _name or name</p>");
    document.write("<p>Variable names are case sensitive.</p>");
    document.write("<p> Variable names should not be JS keywords.</p>");
    document.write("</br>Press refresh to go home page");
}

// Chapter # 5 Qno 1
function assignment5Q1() {
    var numberOne = parseInt(prompt("Enter 1st Number:"));
    var numberTwo = parseInt(prompt("Enter 2nd Number:"));
    var result = numberOne + numberTwo;
    document.write("Sum of " + numberOne + " and " + numberTwo + " is " + result);
    document.write("</br>Press refresh to go home page");
}
// Chapter # 5 Qno 2
function assignment5Q2() {
    var numberOne = parseInt(prompt("Enter 1st Number:"));
    var numberTwo = parseInt(prompt("Enter 2nd Number:"));
    var subtract = numberOne - numberTwo;
    var multiply = numberOne * numberTwo;
    var division = numberOne / numberTwo;
    var modulus = numberOne % numberTwo;
    document.write("Subtract of " + numberOne + " and " + numberTwo + " is " + subtract + "</br>");
    document.write("Multiplication of " + numberOne + " and " + numberTwo + " is " + multiply + "</br>");
    document.write("Division of " + numberOne + " and " + numberTwo + " is " + division + "</br>");
    document.write("Modulus of " + numberOne + " and " + numberTwo + " is " + modulus + "</br>");
    document.write("</br>Press refresh to go home page");
}
// Chapter # 5 Qno 3
function assignment5Q3() {
    var var1;
    document.write("<p>Value after variable declaration is: " + var1 + "</p>");
    var1 = 5;
    document.write("<p>Initial value: " + var1 + "</p>");
    var1++;
    document.write("<p>Value after increment is: " + var1 + "</p>");
    var1 = var1 + 7;
    document.write("<p>Value after addition is: " + var1 + "</p>");
    var1--;
    document.write("<p>Value after decrement is: " + var1 + "</p>");
    var1 = var1 % 3;
    document.write("<p>The remainder is: " + var1 + "</p>");
    document.write("Press refresh to go home page");
}
// Chapter # 5 Qno 4
function assignment5Q4() {
    var ticketCost = 600;
    var quantity = 5;
    var totalCost = ticketCost * quantity;
    document.write("<p>Total cost to buy " + quantity + " tickets to a movie is " + totalCost + "PKR</p>");
    document.write("Press refresh to go home page");
}
// Chapter # 5 Qno 5
function assignment5Q5() {
    var tableNumber = parseInt(prompt("Enter Table Number:"));
    document.write("<p>" + tableNumber + " x 1 = " + tableNumber*1 + "</p>");
    document.write("<p>" + tableNumber + " x 2 = " + tableNumber*2 + "</p>");
    document.write("<p>" + tableNumber + " x 3 = " + tableNumber*3 + "</p>");
    document.write("<p>" + tableNumber + " x 4 = " + tableNumber*4 + "</p>");
    document.write("<p>" + tableNumber + " x 5 = " + tableNumber*5 + "</p>");
    document.write("<p>" + tableNumber + " x 6 = " + tableNumber*6 + "</p>");
    document.write("<p>" + tableNumber + " x 7 = " + tableNumber*7 + "</p>");
    document.write("<p>" + tableNumber + " x 8 = " + tableNumber*8 + "</p>");
    document.write("<p>" + tableNumber + " x 9 = " + tableNumber*9 + "</p>");
    document.write("<p>" + tableNumber + " x 10 = " + tableNumber*10 + "</p>");
    document.write("Press refresh to go home page");
}
// Chapter # 5 Qno 6
function assignment5Q6() {
    var c = parseInt(prompt("Enter Celcius to convert into Fahrenheit"));
    var f = parseInt(prompt("Enter fahrenheit to convert into Celcius"));
    var fahrenheit = (c * 9 / 5) + 32;
    var celcius = (f - 32) * 5 / 9;
    document.write("<p>" + c + "<sup>0</sup>C is " + fahrenheit + "<sup>0</sup>F</p>");
    document.write("<p>" + f + "<sup>0</sup>F is " + celcius + "<sup>0</sup>C</p>");
    document.write("Press refresh to go home page");
}
// Chapter # 5 Qno 7
var item1 = 650;
var item2 = 100;
var quatityOfItem1 = 3;
var quatityOfItem2 = 7;
var shippingCharges = 100;
var totalCost = (item1*quatityOfItem1) + (item2*quatityOfItem2) + shippingCharges;
function assignment5Q7() {
    document.write("<h1>Shopping Cart</h1></br>");
    document.write("<p>Price of item 1 is " + item1 + "</p>");
    document.write("<p>Quantity of item 1 is " + quatityOfItem1 + "</p>");
    document.write("<p>Price of item 2 is " + item2 + "</p>");
    document.write("<p>Quantity of item 2 is " + quatityOfItem2 + "</p>");
    document.write("<p>Shipping Charges " + shippingCharges + "</p></br>");
    document.write("<p>Total cost of your order is "+ totalCost + "</p>");
    document.write("Press refresh to go home page");
}
// Chapter # 5 Qno 8
var totalMarks = 980;
var obtainedMarks = 804;
var percentage = (obtainedMarks * 100) / totalMarks;
function assignment5Q8() {
    document.write("<h1>Marks Sheet</h1></br>");
    document.write("<p>Total marks: " + totalMarks + "</p>");
    document.write("<p>Marks obtained: " + obtainedMarks + "</p>");
    document.write("<p>Percentage: "+ percentage + "%</p>");
    document.write("Press refresh to go home page");
}
// Chapter # 5 Qno 9
var totalDollars = 10;
var totalRiyals = 25;
var totalPkr = (totalDollars * 104.80) + (totalRiyals * 28);
function assignment5Q9() {
    document.write("<h1>Currency in PKR</h1></br>");
    document.write("<p>Total currency in PKR: "+ totalPkr + "</p>");
    document.write("Press refresh to go home page");
}
// Chapter # 5 Qno 10
function assignment5Q10() {
    var number = parseInt(prompt("Enter a number: "));
    var result = ((number + 5) * 10) / 2;
    document.write("<p>The final Result is: "+ result + "</p>");
    document.write("Press refresh to go home page");
}
// Chapter # 5 Qno 11
function assignment5Q11() {
    var currentYear = parseInt(prompt("Enter current year: "));
    var birthYear = parseInt(prompt("Enter birth year: "));
    var age = currentYear - birthYear;
    document.write("<h1>Age Calculator</h1></br>");
    document.write("<p>Current year: "+ currentYear + "</p>");
    document.write("<p>Birth year: "+ birthYear + "</p>");
    document.write("<p>Your age is: "+ age + "</p>");
    document.write("Press refresh to go home page");
}
// Chapter # 5 Qno 12
function assignment5Q12() {
    var radius = parseInt(prompt("Enter radius of a circle: "));
    var pi = 3.142;
    var circumference = 2 * pi * radius;
    var areaOfCircle = pi * (radius * radius);
    document.write("<h1>The Geometrizer</h1></br>");
    document.write("<p>Radius of a circle: "+ radius + "</p>");
    document.write("<p>The circumference is: "+ circumference + "</p>");
    document.write("<p>The area is: "+ areaOfCircle + "</p>");
    document.write("Press refresh to go home page");
}
// Chapter # 5 Qno 13
function assignment5Q13() {
    var favouriteSnack = prompt("Enter your favourite snack: ");
    var currentAge = parseInt(prompt("Enter your current age: "));
    var perDaySnack = parseInt(prompt("Enter snack estimated amount per day: "));
    var maximumAge = 65;
    var remainingSnack = (maximumAge - currentAge) * perDaySnack;
    document.write("<h1>The Lifetime Supply Calculator</h1></br>");
    document.write("<p>Favourite Snack: "+ favouriteSnack + "</p>");
    document.write("<p>Current age: "+ currentAge + "</p>");
    document.write("<p>Estimated Maximum Age: "+ maximumAge + "</p>");
    document.write("<p>Amount of snacks per day: "+ perDaySnack + "</p>");
    document.write("<p>You will need "+ remainingSnack + " " + favouriteSnack + " to last you until the ripe old age of " + maximumAge + "</p>");
    document.write("Press refresh to go home page");
}

// Chapter # 6-9 Qno 1
function assignment6_9Q1() {
    var a = parseInt(prompt("Enter a number: "));
    document.write("<p>Result:</p>");
    document.write("<p>The value of a is: " + a + "</p>");
    document.write("<p>........................................ </p></br>");
    document.write("<p>The value of ++a is: " + ++a + "</p>");
    document.write("<p>Now the value of a is: " + a + "</p></br>");
    document.write("<p>The value of a++ is: " + a++ + "</p>");
    document.write("<p>Now the value of a is: " + a + "</p></br>");
    document.write("<p>The value of --a is: " + --a + "</p>");
    document.write("<p>Now the value of a is: " + a + "</p></br>");
    document.write("<p>The value of a-- is: " + a-- + "</p>");
    document.write("<p>Now the value of a is: " + a + "</p></br>");
    document.write("</br>Press refresh to go home page");
}
// Chapter # 6-9 Qno 2
function assignment6_9Q2() {
    var a = 2, b = 1;
    var result = --a - --b + ++b + b--;
    document.write("<p>a is " + a + "</p>");
    document.write("<p>b is " + b + "</p>");
    document.write("<p>result is " + result + "</p>");
    document.write("</br>Press refresh to go home page");
}
// Chapter # 6-9 Qno 3
function assignment6_9Q3() {
    var userName = prompt("Enter your Name:");
    document.write("<p>Welcome to the Website " + userName + "</p>");
    document.write("</br>Press refresh to go home page");
}
// Chapter # 6-9 Qno 5
function assignment6_9Q5() {
    var tableNumber = parseInt(prompt("Enter table Number: ", 5));
    document.write("<p>" + tableNumber + "  x  1  =  " + tableNumber*1 + "</p>")
    document.write("<p>" + tableNumber + "  x  2  =  " + tableNumber*2 + "</p>")
    document.write("<p>" + tableNumber + "  x  3  =  " + tableNumber*3 + "</p>")
    document.write("<p>" + tableNumber + "  x  4  =  " + tableNumber*4 + "</p>")
    document.write("<p>" + tableNumber + "  x  5  =  " + tableNumber*5 + "</p>")
    document.write("<p>" + tableNumber + "  x  6  =  " + tableNumber*6 + "</p>")
    document.write("<p>" + tableNumber + "  x  7  =  " + tableNumber*7 + "</p>")
    document.write("<p>" + tableNumber + "  x  8  =  " + tableNumber*8 + "</p>")
    document.write("<p>" + tableNumber + "  x  9  =  " + tableNumber*9 + "</p>")
    document.write("<p>" + tableNumber + "  x  10  =  " + tableNumber*10 + "</p>")
    document.write("Press refresh to go home page");
}
// Chapter # 6-9 Qno 6
function assignment6_9Q6() {
    var subject1 = prompt("Enter 1st Subject Name: ");
    var subject2 = prompt("Enter 2nd Subject Name: ");
    var subject3 = prompt("Enter 3rd Subject Name: ");
    var maxMarkOfSubject = 100;
    var obtainedMarksSubject1 = parseInt(prompt("Enter Obtained Marks of " + subject1 + ": "));
    var obtainedMarksSubject2 = parseInt(prompt("Enter Obtained Marks of " + subject2 + ": "));
    var obtainedMarksSubject3 = parseInt(prompt("Enter Obtained Marks of " + subject3 + ": "));
    var totalMarks = obtainedMarksSubject1 + obtainedMarksSubject2 + obtainedMarksSubject3;
    var percentage = (totalMarks * 100) / (maxMarkOfSubject * 3);
    document.write("<table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>")
    document.write("<tr><td>" + subject1 + "</td><td>" + maxMarkOfSubject + "</td><td>" + obtainedMarksSubject1 + "</td><td>" + (obtainedMarksSubject1 * 100)/maxMarkOfSubject + "%</td></tr>");
    document.write("<tr><td>" + subject2 + "</td><td>" + maxMarkOfSubject + "</td><td>" + obtainedMarksSubject2 + "</td><td>" + (obtainedMarksSubject2 * 100)/maxMarkOfSubject + "%</td></tr>");
    document.write("<tr><td>" + subject3 + "</td><td>" + maxMarkOfSubject + "</td><td>" + obtainedMarksSubject3 + "</td><td>" + (obtainedMarksSubject3 * 100)/maxMarkOfSubject + "%</td></tr>");
    document.write("<tr><td></td><td><b>" + (maxMarkOfSubject*3) + "</b></td><td><b>" + (obtainedMarksSubject1 + obtainedMarksSubject2 + obtainedMarksSubject3) + "</b></td><td><b>" + percentage + "%</b></td></tr></table>");
    document.write("Press refresh to go home page");
}

// Chapter # 9-11 Qno 1
function assignment9_11Q1() {
    var cityName = prompt("Enter a number: ");
    if(cityName === "Karachi" || cityName === "KARACHI" || cityName === "karachi") {
        document.write("<p>Welcome to City of Lights</p>");
    }
    else {
        document.write("<p>Welcome to " + cityName + "</p>");
    }
    document.write("</br>Press refresh to go home page");
}
// Chapter # 9-11 Qno 2
function assignment9_11Q2() {
    var gender = prompt("Enter your gender (male/female): ");
    if(gender === "male" || gender === "MALE" || gender === "Male") {
        document.write("<p>Good Morning Sir</p>");
    }
    else if(gender === "female" || gender === "FEMALE" || gender === "Female") {
        document.write("<p>Good Morning Ma'am</p>");
    }
    document.write("</br>Press refresh to go home page");
}
// Chapter # 9-11 Qno 3
function assignment9_11Q3() {
    var color = prompt("Enter Road Traffic Signal Color: ");
    if(color === "RED" || color === "Red" || color === "red") {
        document.write("<p>Must Stop</p>");
    }
    else if(color === "YELLOW" || color === "Yellow" || color === "yellow") {
        document.write("<p>Ready to move</p>");
    }
    else if(color === "GREEN" || color === "Green" || color === "green") {
        document.write("<p>Move now</p>");
    }
    document.write("</br>Press refresh to go home page");
}
// Chapter # 9-11 Qno 4
function assignment9_11Q4() {
    var remainingFuel = parseFloat(prompt("Enter Remaining Fuel in Car (in litres): "));
    if(remainingFuel < 0.25) {
        document.write("<p>Please refill the fuel in your car</p>");
    }
    else{
        document.write("<p>No need to refill the fuel in your car right now</p>");
    }
    document.write("</br>Press refresh to go home page");
}
// Chapter # 9-11 Qno 5
function assignment9_11Q5() {
    var a = 4;
    if (++a === 5) {
        alert("given condition for variable a is true");
        document.write("<p>given condition for variable a is true</p>");
    }
    else {
        alert("given condition for variable a is false");
        document.write("<p>given condition for variable a is false</p>");
    }
    var b = 82;
    if (b++ === 83) {
        alert("given condition for variable b is true");
        document.write("<p>given condition for variable b is true</p>");
    }
    else {
        alert("given condition for variable b is false");
        document.write("<p>given condition for variable b is false</p>");
    }
    var c = 12;
    if (c++ === 13) {
        alert("condition 1 is true");
        document.write("<p>condition 1 is true</p>");
    }
    else {
        alert("condition 1 is false");
        document.write("<p>condition 1 is false</p>");
    }
    if (c === 13) {
        alert("condition 2 is true");
        document.write("<p>condition 2 is true</p>");
    }
    else {
        alert("condition 2 is false");
        document.write("<p>condition 2 is false</p>");
    }
    if (++c < 14) {
        alert("condition 3 is true");
        document.write("<p>condition 3 is true</p>");
    }
    else {
        alert("condition 3 is false");
        document.write("<p>condition 3 is false</p>");
    }
    if(c === 14) {
        alert("condition 4 is true");
        document.write("<p>condition 4 is true</p>");
    }
    else {
        alert("condition 4 is false");
        document.write("<p>condition 4 is false</p>");
    }
    var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost) {
        alert("The cost equals");
        document.write("<p>The cost equals</p>");
    }
    else {
        alert("The cost are not equal");
        document.write("<p>The cost are not equal</p>");
    }
    if (true) {
        alert("True");
        document.write("<p>True</p>");
    }
    if (false) {
        alert("False");
        document.write("<p>False</p>");
    }
    if("car" < "cat") {
        alert("car is smaller than cat");
        document.write("<p>car is smaller than cat</p>");
    }
    else {
        alert("car is not smaller than cat");
        document.write("<p>car is not smaller than cat</p>");
    }
    document.write("</br>Press refresh to go home page");
}
// Chapter # 9-11 Qno 6
function assignment9_11Q6() {
    var englishMarks = parseInt(prompt("Enter English Marks: "));
    var urduMarks = parseInt(prompt("Enter Urdu Marks: "));
    var mathsMarks = parseInt(prompt("Enter Maths Marks: "));
    var totalMarks1Subj = parseInt(prompt("Enter Total Marks of 1 subject: "));
    var totalMaxMarks = totalMarks1Subj * 3;
    var totalObtained = englishMarks + urduMarks + mathsMarks;
    var percentage = totalObtained * 100 / totalMaxMarks;
    var grade, remarks;
    document.write("<h2>Marks Sheet</h2>");
    document.write("</br><p>Total marks : " + totalMaxMarks + "</p>");
    document.write("<p>Marks obtained : " + totalObtained + "</p>");
    document.write("<p>Percentage : " + percentage + "</p>");

    if (percentage >= 80) {
        grade = "A-one";
        remarks = "Excellent";
    }
    else if (percentage >= 70) {
        grade = "A";
        remarks = "Good";
    }
    else if (percentage >= 60) {
        grade = "B";
        remarks = "You need improvement";
    }
    else if (percentage < 60) {
        grade = "Fail";
        remarks = "Sorry";
    }
    document.write("<p>Grade : " + grade + "</p>");
    document.write("<p>Remarks : " + remarks + "</p>");
    document.write("</br>Press refresh to go home page");
}
// Chapter # 9-11 Qno 7
function assignment9_11Q7() {
    var secretNumber = 7;
    var userGuess = parseInt(prompt("Guess the secret number(range 1-10): "));
    if(userGuess === secretNumber) {
        document.write("<p>Bingo! Correct answer</p>");
    }
    else if(userGuess === secretNumber+1 || userGuess === secretNumber-1) {
        document.write("<p>Close enough to the correct answer</p>");
    }
    else {
        document.write("<p>Wrong answer</p>");
    }
    document.write("</br>Press refresh to go home page");
}
// Chapter # 9-11 Qno 8
function assignment9_11Q8() {
    var checkNumber = parseInt(prompt("Enter a number to check divisible by 3 or not: "));
    if(checkNumber % 3 === 0) {
        document.write("<p>Yes! the number is divisible by 3</p>");
    }
    else {
        document.write("<p>No! the number is not divisible by 3</p>");
    }
    document.write("</br>Press refresh to go home page");
}
// Chapter # 9-11 Qno 9
function assignment9_11Q9() {
    var checkNumber = parseInt(prompt("Enter a number to check Even or Odd: "));
    if(checkNumber % 2 === 0) {
        document.write("<p>Even Number</p>");
    }
    else {
        document.write("<p>Odd Number</p>");
    }
    document.write("</br>Press refresh to go home page");
}
// Chapter # 9-11 Qno 10
function assignment9_11Q10() {
    var temperature = parseInt(prompt("Enter Temperature: "));
    if(temperature > 40) {
        document.write("<p>It is too hot outside.</p>");
    }
    else if(temperature > 30) {
        document.write("<p>The Weather today is Normal.</p>");
    }
    else if(temperature > 20) {
        document.write("<p>Today's Weather is cool.</p>");
    }
    else if(temperature > 10) {
        document.write("<p>OMG! Today's weather is so Cool.</p>");
    }
    else {
        document.write("<p>Amazing Cold weather.</p>");
    }
    document.write("</br>Press refresh to go home page");
}
// Chapter # 9-11 Qno 11
function assignment9_11Q11() {
    var firstNumber = parseInt(prompt("Enter first number: "));
    var secondNumber = parseInt(prompt("Enter second number: "));
    var result;
    var operator = prompt("Enter an operator (+, -, *, /, %): ");
    if(operator === "+") {
        result = firstNumber + secondNumber;
        document.write("<p>" + firstNumber + " + " + secondNumber + " = " + result + "</p>");
    }
    else if(operator === "-") {
        result = firstNumber - secondNumber;
        document.write("<p>" + firstNumber + " - " + secondNumber + " = " + result + "</p>");
    }
    else if(operator === "*") {
        result = firstNumber * secondNumber;
        document.write("<p>" + firstNumber + " * " + secondNumber + " = " + result + "</p>");
    }
    else if(operator === "/") {
        result = firstNumber / secondNumber;
        document.write("<p>" + firstNumber + " / " + secondNumber + " = " + result + "</p>");
    }
    else if(operator === "%") {
        result = firstNumber % secondNumber;
        document.write("<p>" + firstNumber + " % " + secondNumber + " = " + result + "</p>");
    }
    document.write("</br>Press refresh to go home page");
}
// Chapter # 12-13 Qno 1
function assignment12_13Q1() {
    var checkCharacter = prompt("Enter Number or String: ");
    if(checkCharacter.charCodeAt(0) >= 65 && checkCharacter.charCodeAt(0) <= 90) {
        document.write("<p>Input is Uppercase Letter</p>");
    }
    else if(checkCharacter.charCodeAt(0) >= 97 && checkCharacter.charCodeAt(0) <= 122) {
        document.write("<p>Input is Lowercase Letter</p>");
    }
    else if(checkCharacter.charCodeAt(0) >= 48 && checkCharacter.charCodeAt(0) <= 57) {
        document.write("<p>Input is a Number</p>");
    }
    document.write("</br>Press refresh to go home page");
}
// Chapter # 12-13 Qno 2
function assignment12_13Q2() {
    var intOne = parseInt(prompt("Enter first an Integer: "));
    var intTwo = parseInt(prompt("Enter second an Integer: "));
    if(intOne > intTwo) {
        document.write("<p>First integer " + intOne + " is larger</p>")
    }
    else if(intOne < intTwo) {
        document.write("<p>Second integer " + intTwo + " is larger</p>");
    }
    else if(intOne === intTwo) {
        document.write("<p>" + intOne + " and " + intTwo + " both are equal</p>");
    }
    document.write("</br>Press refresh to go home page");
}
// Chapter # 12-13 Qno 3
function assignment12_13Q3() {
    var checkNumber = parseInt(prompt("Enter an integer number: "));
    if(checkNumber < 0) {
        document.write("<p>" + checkNumber + " is negative number</p>")
    }
    else if(checkNumber > 0) {
        document.write("<p>" + checkNumber + " is positive number</p>");
    }
    else if(checkNumber === 0) {
        document.write("<p>" + checkNumber + " is Zero</p>");
    }
    document.write("</br>Press refresh to go home page");
}
// Chapter # 12-13 Qno 4
function assignment12_13Q4() {
    var checkCharacter = prompt("Enter an character to check vowel or not: ");
    if(checkCharacter === 'a' || checkCharacter === 'e' || checkCharacter === 'i' || checkCharacter === 'o' || checkCharacter === 'u') {
        document.write("<p>Character is vowel</p>")
    }
    else {
        document.write("<p>Character is not vowel</p>");
    }
    document.write("</br>Press refresh to go home page");
}
// Chapter # 12-13 Qno 5
function assignment12_13Q5() {
    var originalPassword = "adnanAhmed";
    var userPassword = prompt("Enter the password: ");
    if(userPassword.length === 0) {
        document.write("<p>Please enter your password</p>");
    }
    else if(userPassword === originalPassword){
        document.write("<p>“Correct! The password you entered matches the original password</p>");
    }
    else {
        document.write("<p>Incorrect password</p>");
    }
    document.write("</br>Press refresh to go home page");
}
// Chapter # 12-13 Qno 6
function assignment12_13Q6() {
    var greeting;
    var hours = parseInt(prompt("Enter the hour: "));
    if(hours < 18) {
        greeting = "Good Day";
    }
    else {
        greeting = "Good Evening";
    }
    document.write("<p>" + greeting + "</p>");
    document.write("</br>Press refresh to go home page");
}
// Chapter # 12-13 Qno 7
function assignment12_13Q7() {
    var greeting;
    var hours = parseInt(prompt("Enter the hour: "));
    if(hours >= 0000 && hours < 1200) {
        greeting = "Good Morning!";
    }
    else if(hours >= 1200 && hours < 1700) {
        greeting = "Good Afternoon!";
    }
    else if(hours >= 1700 && hours < 2100) {
        greeting = "Good Evening!";
    }
    else if(hours >= 2100 && hours <= 2359) {
        greeting = "Good Night!";
    }
    document.write("<p>" + greeting + "</p>");
    document.write("</br>Press refresh to go home page");
}
// Chapter # 14-16 Qno 1
function assignment14_16Q1() {
    var studentNames = [];
    alert("var studentNames = [];");
}
// Chapter # 14-16 Qno 2
function assignment14_16Q2() {
    var studentNames = [];
    alert("var studentNames = [];");
}
// Chapter # 14-16 Qno 3
function assignment14_16Q3() {
    var studentNames = ["Adnan", "Talha", "Ali", "Raza"];
    document.write("<p>1. studentNames[0]: " + studentNames[0] + "</p>");
    document.write("<p>2. studentNames[1]: " + studentNames[1] + "</p>");
    document.write("<p>3. studentNames[2]: " + studentNames[2] + "</p>");
    document.write("<p>4. studentNames[3]: " + studentNames[3] + "</p>");
    document.write("</br>Press refresh to go home page");
}
// Chapter # 14-16 Qno 4
function assignment14_16Q4() {
    var numbersArray = [100, 80, 60, 40, 20];
    document.write("<p>1. numbersArray[0]: " + numbersArray[0] + "</p>");
    document.write("<p>2. numbersArray[1]: " + numbersArray[1] + "</p>");
    document.write("<p>3. numbersArray[2]: " + numbersArray[2] + "</p>");
    document.write("<p>4. numbersArray[3]: " + numbersArray[3] + "</p>");
    document.write("<p>5. numbersArray[4]: " + numbersArray[4] + "</p>");
    document.write("</br>Press refresh to go home page");
}
// Chapter # 14-16 Qno 5
function assignment14_16Q5() {
    var booleanArray = [true, false];
    document.write("<p>1. booleanArray[0]: " + booleanArray[0] + "</p>");
    document.write("<p>2. booleanArray[1]: " + booleanArray[1] + "</p>");
    document.write("</br>Press refresh to go home page");
}
// Chapter # 14-16 Qno 6
function assignment14_16Q6() {
    var mixedArray = ["Adnan", "Talha", "Ali", "Raza", 100, 80, 60, 40, 20, true, false];
    document.write("<p>1. mixedArray[0]: " + mixedArray[0] + "</p>");
    document.write("<p>2. mixedArray[1]: " + mixedArray[1] + "</p>");
    document.write("<p>3. mixedArray[2]: " + mixedArray[2] + "</p>");
    document.write("<p>4. mixedArray[3]: " + mixedArray[3] + "</p>");
    document.write("<p>5. mixedArray[4]: " + mixedArray[4] + "</p>");
    document.write("<p>6. mixedArray[5]: " + mixedArray[5] + "</p>");
    document.write("<p>7. mixedArray[6]: " + mixedArray[6] + "</p>");
    document.write("<p>8. mixedArray[7]: " + mixedArray[7] + "</p>");
    document.write("<p>9. mixedArray[8]: " + mixedArray[8] + "</p>");
    document.write("<p>10. mixedArray[9]: " + mixedArray[9] + "</p>");
    document.write("<p>11. mixedArray[10]: " + mixedArray[10] + "</p>");
    document.write("</br>Press refresh to go home page");
}
// Chapter # 14-16 Qno 7
function assignment14_16Q7() {
    var qualificationa = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
    document.write("<h2>Qualifications:</h2>")
    document.write("<p>1. " + qualificationa[0] + "</p>");
    document.write("<p>2. " + qualificationa[1] + "</p>");
    document.write("<p>3. " + qualificationa[2] + "</p>");
    document.write("<p>4. " + qualificationa[3] + "</p>");
    document.write("<p>5. " + qualificationa[4] + "</p>");
    document.write("<p>6. " + qualificationa[5] + "</p>");
    document.write("<p>7. " + qualificationa[6] + "</p>");
    document.write("<p>8. " + qualificationa[7] + "</p>");
    document.write("</br>Press refresh to go home page");
}
// Chapter # 14-16 Qno 8
function assignment14_16Q8() {
    var studentNames = [];
    studentNames[0] = prompt("Enter 1st Student Name: ");
    studentNames[1] = prompt("Enter 2nd Student Name: ");
    studentNames[2] = prompt("Enter 3rd Student Name: ");
    var studentScores = [];
    studentScores[0] = parseInt(prompt("Enter 1st Student Score: "));
    studentScores[1] = parseInt(prompt("Enter 2nd Student Score: "));
    studentScores[2] = parseInt(prompt("Enter 3rd Student Score: "));
    var totalMarks = 500;
    document.write("<h2>Student Data:</h2>")
    document.write("<p>Score of " + studentNames[0] + " is "+ studentScores[0] + ". Percentage: " + (studentScores[0] * 100 / totalMarks) + "%</p>");
    document.write("<p>Score of " + studentNames[1] + " is "+ studentScores[1] + ". Percentage: " + (studentScores[1] * 100 / totalMarks) + "%</p>");
    document.write("<p>Score of " + studentNames[2] + " is "+ studentScores[2] + ". Percentage: " + (studentScores[2] * 100 / totalMarks) + "%</p>");
    document.write("</br>Press refresh to go home page");
}
// Chapter # 14-16 Qno 9
var colorNames = ["Red", "Yellow", "Green", "Blue"];
function assignment14_16Q9() {
    document.write("<p>" + colorNames + "</p>");
    document.write("<button onclick='beginningColor(colorNames)'>Update beginning color</button>");
}
function beginningColor(colorNames) {
    var userColor = prompt("What color you want to add on the beginning?");
    colorNames[0] = userColor; 
    document.write("<p>" + colorNames + "</p>");
    document.write("<button onclick='endColor(colorNames)'>Update last color</button>");
}
function endColor(colorNames) {
    var userColor = prompt("What color you want to add at the last?");
    var last = colorNames.length - 1;
    colorNames[last] = userColor;
    document.write("<p>" + colorNames + "</p>");
    document.write("<button onclick='addTwoColor(colorNames)'>Add two colors on the beginning color</button>");
}
function addTwoColor(colorNames) {
    var firstColor = prompt("1st Color?");
    var secondColor = prompt("2nd Color?");
    colorNames.unshift(firstColor, secondColor);
    document.write("<p>" + colorNames + "</p>");
    document.write("<button onclick='deleteBeginning(colorNames)'>Delete beginning color</button>");
}
function deleteBeginning(colorNames) {
    colorNames.shift();
    document.write("<p>" + colorNames + "</p>");
    document.write("<button onclick='deleteEnd(colorNames)'>Delete last color</button>");
}
function deleteEnd(colorNames) {
    colorNames.pop();
    document.write("<p>" + colorNames + "</p>");
    document.write("<button onclick='addOnDesiredPlace(colorNames)'>Add color on desired location</button>");
}
function addOnDesiredPlace(colorNames) {
    var index = parseInt(prompt("Enter index where you want to add color"));
    var colorName = prompt("Enter color Name?");
    colorNames.splice(index, 1, colorName);
    document.write("<p>" + colorNames + "</p>");
    document.write("<button onclick='deleteOnDesiredPlace(colorNames)'>Add color on desired location</button>");
}
function deleteOnDesiredPlace(colorNames) {
    var index = parseInt(prompt("Enter index what color you want to delete"));
    var deleteAmount = parseInt(prompt("Enter how many colors you want to delete"));
    colorNames.splice(index, deleteAmount);
    document.write("<p>" + colorNames + "</p>");
    document.write("</br>Press refresh to go home page");
}
// Chapter # 14-16 Qno 10
function assignment14_16Q10() {
    var studentMarks = [320, 230, 480, 120];
    document.write("<h2>Student Data:</h2>")
    document.write("<p>Scores of Students: " + studentMarks + "</p>");
    var sortedMarks = studentMarks.sort(function(a, b) {return a - b});
    document.write("<p>Ordered Scores of Students: " + sortedMarks + "</p>");
    document.write("</br>Press refresh to go home page");
}
// Chapter # 14-16 Qno 11
function assignment14_16Q11() {
    var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
    var selected = [];
    selected.push(cities[1], cities[2], cities[3]); 
    document.write("<h2>Cities List:</h2>")
    document.write("<p>" + cities + "</p>");
    document.write("<h2>Selected cities List:</h2>")
    document.write("<p>" + selected + "</p>");
    document.write("</br>Press refresh to go home page");
}
// Chapter # 14-16 Qno 12
function assignment14_16Q12() {
    var arr = ["This", "is", "my", "cat"];
    var string = arr.join(" "); 
    document.write("<h2>Array:</h2>")
    document.write("<p>" + arr + "</p>");
    document.write("<h2>String:</h2>")
    document.write("<p>" + string + "</p>");
    document.write("</br>Press refresh to go home page");
}
// Chapter # 14-16 Qno 13
var fifoArray = [];
function assignment14_16Q13() {
    document.write("<p>First In First Out (FIFO)</p>");
    document.write("<button onclick='pushFunction(fifoArray)'>Push</button>	&nbsp;	&nbsp;");
    document.write("<button onclick='popFunction(fifoArray)'>Pop</button>");
}
function pushFunction(fifoArray) {
    var userInput = prompt("User Input: ");
    fifoArray.push(userInput);
    document.write("<p>" + fifoArray + "</p>");
    document.write("<button onclick='pushFunction(fifoArray)'>Push</button>	&nbsp;	&nbsp;");
    document.write("<button onclick='popFunction(fifoArray)'>Pop</button>");
}
function popFunction(fifoArray) {
    var tempVar;
    if (fifoArray.length != 0) {
        tempVar = fifoArray[0];
        fifoArray.shift();
        document.write("<p>Out: </p>");
        document.write("<p>" + tempVar + "</p>");   
    }
    else {
        document.write("<p>This is an empty array. It can't pop</p>")
        document.write("</br>Press refresh to go home page</br>");
    }
    document.write("<button onclick='pushFunction(fifoArray)'>Push</button>	&nbsp;	&nbsp;");
    document.write("<button onclick='popFunction(fifoArray)'>Pop</button>");
}
// Chapter # 14-16 Qno 14
var lifoArray = [];
function assignment14_16Q14() {
    document.write("<p>Last In First Out (LIFO)</p>");
    document.write("<button onclick='pushFunction(lifoArray)'>Push</button>	&nbsp;	&nbsp;");
    document.write("<button onclick='popFunction(lifoArray)'>Pop</button>");
}
function pushFunction(lifoArray) {
    var userInput = prompt("User Input: ");
    lifoArray.push(userInput);
    document.write("<p>" + lifoArray + "</p>");
    document.write("<button onclick='pushFunction(lifoArray)'>Push</button>	&nbsp;	&nbsp;");
    document.write("<button onclick='popFunction(lifoArray)'>Pop</button>");
}
function popFunction(lifoArray) {
    var tempVar;
    if (lifoArray.length != 0) {
        tempVar = lifoArray[lifoArray.length - 1];
        lifoArray.pop();
        document.write("<p>Out: </p>");
        document.write("<p>" + tempVar + "</p>");   
    }
    else {
        document.write("<p>This is an empty array. It can't pop</p>");
        document.write("</br>Press refresh to go home page</br>");
    }
    document.write("<button onclick='pushFunction(lifoArray)'>Push</button>	&nbsp;	&nbsp;");
    document.write("<button onclick='popFunction(lifoArray)'>Pop</button>");
}
// Chapter # 14-16 Qno 15
function assignment14_16Q15() {
    var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier", "Others"];
    document.write("<h2>Select Your Mobile Company</h2>");;
    document.write("<select>");
        for (var i = 0; i < manufacturers.length; i++) {
            document.write("<option>" + manufacturers[i] + "</option>");
        }
    document.write("</select>");
    document.write("</br></br></br>Press refresh to go home page</br>");
}
// Chapter # 17-20 Qno 1
function assignment17_20Q1() {
    alert("Open Console.log");
    var multiDimensionArr = [ [10, 11, 12],
                              [13, 14, 15],
                              [16, 17, 18]
    ];

    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            console.log(multiDimensionArr[i][j]);
        }
    }
}
// Chapter # 17-20 Qno 2
function assignment17_20Q2() {
    var multiDimensionArr = [ 
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];
    document.write("<h2>Multi-Dimension Array</h2>");
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 4; j++) {
            document.write(multiDimensionArr[i][j] + "&nbsp;");
        }
        document.write("</br>");
    }
    document.write("</br>Press refresh to go home page</br>");
}
// Chapter # 17-20 Qno 3
function assignment17_20Q3() {
    document.write("<h2>Numeric counting from 1 to 10</h2>");
    for (var i = 0; i <= 10; i++) {
        document.write("<p>" + i + "</p>");
    }
    document.write("</br>Press refresh to go home page</br>");
}
// Chapter # 17-20 Qno 4
function assignment17_20Q4() {
    var tableNumber = parseInt(prompt("Enter a number to show its multiplication table: "));
    var tableLength = parseInt(prompt("Enter length multiplication table: "));
    document.write("<h2>Table Print</h2>");
    document.write("<h3>Multiplication table of " + tableNumber + "</h3>");
    document.write("<h3>Length " + tableLength + "</h3>");
    for (var i = 1; i <= tableLength; i++) {
        document.write("<p>" + tableNumber + "&nbsp; &nbsp; x &nbsp; &nbsp;" + i + "&nbsp; &nbsp; = &nbsp; &nbsp;" + (tableNumber*i) + "</p>");
    }
    document.write("</br>Press refresh to go home page</br>");
}
// Chapter # 17-20 Qno 5
function assignment17_20Q5() {
    var fruitNames = ["apple", "banana", "mango", "orange", "strawberry"];
    document.write("<h2>Fruit Names</h2>");
    for (var i = 0; i < fruitNames.length; i++) {
        document.write("<p>" + fruitNames[i] + "</p>");
    }
    document.write("</br></br>");
    for (var j = 0; j < fruitNames.length; j++) {
        document.write("<p>Element at index " + j + " is " + fruitNames[j] + "</p>");
    }
    document.write("</br>Press refresh to go home page</br>");
}
// Chapter # 17-20 Qno 6
function assignment17_20Q6() {
    document.write("<h2>Counting:</h2>");
    for (var i = 1; i <= 15; i++) {
        document.write(i + ", ");
    }
    document.write("</br>");
    document.write("<h2>Reverse counting:</h2>");
    for (var i = 10; i >= 1; i--) {
        document.write(i + ", ");
    }
    document.write("</br>");
    document.write("<h2>Even:</h2>");
    for (var i = 0; i <= 20; i++) {
        document.write(i + ", ");
        i++;
    }
    document.write("</br>");
    document.write("<h2>Odd:</h2>");
    for (var i = 1; i <= 20; i++) {
        document.write(i + ", ");
        i++;
    }   
    document.write("</br>");
    document.write("<h2>Series:</h2>");
    for (var i = 2; i <= 20; i++) {
        document.write(i + "k, ");
        i++;
    }   
    document.write("</br></br>Press refresh to go home page</br>");
}
// Chapter # 17-20 Qno 7
function assignment17_20Q7() {
    var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
    var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
    var pointer = false;
    document.write("<h2>ABC BAKERY</h2>");
    for (var i = 0; i < bakeryItems.length; i++) {
        if (userInput === bakeryItems[i]) {
            pointer = true;
            break;
        }
    }
    if (pointer === true) {
        document.write("<p>" + userInput + " is <b>available</b> at index " + i + " in our bakery" + "</p>");
    }
    else {
        document.write("<p>We are sorry, " + userInput + " is <b>not available</b> in our bakery" + "</p>")
    }
    document.write("</br>Press refresh to go home page</br>");
}
// Chapter # 17-20 Qno 8
function assignment17_20Q8() {
    var numbersArr = [24, 53, 78, 91, 12];
    var temp = numbersArr[0];
    document.write("<p>Array items: " + numbersArr + "</p>");
    for (var i = 0; i < numbersArr.length; i++) {
        if (temp < numbersArr[i]) {
            temp = numbersArr[i];
            i = 0;
        }
    }
    document.write("<p>The largest number is " + temp + "</p>");
    document.write("</br>Press refresh to go home page</br>");
}
// Chapter # 17-20 Qno 9
function assignment17_20Q9() {
    var numbersArr = [24, 53, 78, 91, 12];
    var temp = numbersArr[0];
    document.write("<p>Array items: " + numbersArr + "</p>");
    for (var i = 0; i < numbersArr.length; i++) {
        if (temp > numbersArr[i]) {
            temp = numbersArr[i];
            i = 0;
        }
    }
    document.write("<p>The smallest number is " + temp + "</p>");
    document.write("</br>Press refresh to go home page</br>");
}
// Chapter # 17-20 Qno 10
function assignment17_20Q10() {
    var multiple = 5;
    var ans = 1
    for (var i = 1; i <= 100; i++) {
        ans = multiple * i;
        if (ans > 100) {
            break;
        }
        document.write(ans + ", ");
    }
    document.write("</br>Press refresh to go home page</br>");
}