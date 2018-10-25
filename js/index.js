// я використала "var" там де потрібно було щоб змінні були доступні за межами блоку в якому вони були визначені
// спочатку тут було не багато коду але почали вилазити помилки з від'ємним дискримінантом і так получилося
// я знаю що виконала завдання не зовсім так як ви просили, але я хотіла щось трошки складніше попрактикувати

button.onclick = function(){
    var d; // discriminator
    var solution = document.getElementById("solution"); // variable for paragraph with answer
        
    
function getResults(a, b, c){
    d = b * b - 4 * a * c;
    if(d >= 0){
        console.log(-b);
        var x1 = (-b + Math.sqrt(d)) / (2 * a); 
        var x2 = (b - Math.sqrt(d)) / (2 * a);
    } 

    let resultArr = [x1, x2];
    return resultArr;
}
    

// getting values of variables from user
let a = document.getElementById("a").value;
let b = document.getElementById("b").value;
let c = document.getElementById("c").value;
    
// showing quadratic equation
document.getElementById("equation").innerHTML = a + "x<sup>2</sup> " + "+ " + b + "x + " + c + " = 0";

// call function
getResults(a,b,c);

    
// answer when discriminator is positive or negative;
    if (d >= 0){
        solution.innerHTML = "Solution one is " + getResults(a,b,c)[0] + "<br>Solution two is " + getResults(a,b,c)[1];
    }
    else {
        solution.textContent = "The discriminator is negative";
    }

// show answer block
document.getElementById("answer").style.display = "block";
}
