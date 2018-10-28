button.onclick = function(){
    
    var number = parseFloat(document.getElementById("num").value);   

    document.getElementById("solutionByLoop").innerHTML = "Solution by array " + gettingNumberByArray(number);
    document.getElementById("solutionByArray").innerHTML = "Solution by array " + gettingNumberByArray(number);
    document.getElementById("solutionByRecursion").innerHTML = "Solution by recursion " + gettingNumberByRecursion(number); 

    document.getElementById("answer").style.display = "block";
}

function gettingNumberByLoop(num) {  
    let first = 1;
    let second = 1;
    let next = 0;
    for (let i = 0; i < num-2; i++){
        next = first + second;
        first = second;
        second = next;
    }
    return next;
}

function gettingNumberByArray(num){
    let fibArr = [1, 1];
    for (let i = 2; i < num; i++){
        fibArr.push(fibArr[i-1] + fibArr[i-2]);
    }
    return fibArr.pop();
}

function gettingNumberByRecursion(num){
//    (num === 1 || num === 2) ? return 1;
    if(num === 1 || num === 2){
        return 1;
    }
    for (let i = 0; i < num-2; i++){
        return gettingNumberByRecursion(num-1) + gettingNumberByRecursion(num-2);
    }
}