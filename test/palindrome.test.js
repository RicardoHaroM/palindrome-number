const {isAPalindrome} = require('../app')


test('Check if a palindrome number is a palindrome',()=>{
    
    const number = 1221

    const result = isAPalindrome(number);
    
    expect(result).toStrictEqual(true)
});
test('Check if a non-palindrome number is a palindrome',()=>{
    
    const number = 1231

    const result = isAPalindrome(number);
    
    expect(result).toStrictEqual(false)
});