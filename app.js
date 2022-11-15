const reverse = function(number){
    const numberArray=number.toString().split('')
    const reverseArray = numberArray.reverse()

    return reverseArray.join("")
}

const isAPalindrome = function(number){
    if(reverse(number)==number.toString()) return true;

    return false
}

const main = () =>{
    console.log(isAPalindrome(121))
    console.log(isAPalindrome(-121))
}

main()

module.exports={
    isAPalindrome
}