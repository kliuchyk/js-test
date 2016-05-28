function getAge(age) {
    var result;
    if(age<18){
        result = 'young';
    } else if (age>60){
        result='old'
    } else {
        result = 'adult';
    }
    
    return result;
}


var age = Number(prompt('how old are you?'));
var message = 'You are ' + getAge(age);
alert(message);




