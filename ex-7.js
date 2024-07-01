function isPalindrome(string) {
    if (string == string.split("").reverse().join("")){
        return true;
    }else {
        return false;
    }
  }
  
  //Example case
  console.log(isPalindrome("reviver"));// true
  console.log(isPalindrome("บวบ"));// true
  console.log(isPalindrome("deliver"));// false
