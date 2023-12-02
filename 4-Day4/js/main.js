//problem 1

// var phrase = prompt('Enter a phrase:');
// var letter = prompt('enter a letter:');
// var senstive = prompt('is it case senstive?(true/false):');
// var counter=0;
// var phraseArray = phrase.split('');
// if(senstive==="false"){
//     letter=letter.toLowerCase()
//     for(var i=0;i<phraseArray.length;i++){
//         phraseArray[i]=phraseArray[i].toLowerCase();
//     }
// }
// for(var i =0 ; i<phraseArray.length;i++){
//     if(phraseArray[i]===letter)
//         counter++;
// }
// document.write(`the number of repeats of ${letter} = ${counter}`);

//problem 2

// var input = prompt('enter a word to check is it palindrome?');
// var senstive = prompt('is it case senstive?(true/false):');
// if(senstive==="false"){
//     input=input.toLowerCase();
// }
// function isPalindrome(){
//     for(var i =0;i<input.length;i++){
//         if(input[i]!==input[input.length-i-1]){
//             document.write('the word is not palindrome');
//             return false;
//         }
//     }
//     document.write('the word is palindrome');
//     return true;
// }

// isPalindrome();

//problem 3

// var input = prompt("enter a phrase:")
// var inputArray = input.split(' ');
// var theBiggest;
// var max = inputArray[0].length;
// for(var i=0;i<inputArray.length-2;i++){
//     if(max<inputArray[i+1].length){
//         max= inputArray[i+1].length;
//         theBiggest = inputArray[i+1];
//     }
// }
// document.write(theBiggest)

//problem 4
do{
    var Name =prompt('enter a name:');
}while(!/^[a-z]+$/i.test(Name));
do{
    var phone =prompt('enter a home phone:');
}while(!/^[0-9]{8}$/.test(phone));
do{
    var phoneNumber =prompt('enter a Mobile phone:');
}while(!/^(010|011|012){1}[0-9]{8}$/.test(phoneNumber));
do{
    var email =prompt('enter a valid Email:');
}while(!/^[a-z1-9]+@[a-z]+\.(com|net|org)$/ig.test(email));
do{
    var color =prompt('enter color: (red-green-blue)');
}while(!/^(red|green|blue)$/i.test(color));

document.write(`<h1 class="${color}">${Name}</h1>
<p class="${color}">Home phone: ${phone}</p>
<p class="${color}">mobile phone: ${phoneNumber}</p>
<p class="${color}">email: ${phoneNumber}</p>
`)
