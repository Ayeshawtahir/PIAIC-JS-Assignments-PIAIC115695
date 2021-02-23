/**
 User input value in Number through prompt Example value=5
Factorialize a Number use Function
print value in console.log() console.log(value); the result is 120

 */

var value = prompt("Enter a digit to get its Factors", 78);

function fact(num)
{
    let b = 2;
    let ans = "";
    while (num > b){
        while(num%b==0){
            num/=b;
            ans += b + ',';
        }
        b++;
        if(num==b){
            ans += b;
        }
    }
    return ans;
}

console.log("Factors of " + value +": "+ fact(value));