// RUN SCRIPT :- node Remove-k-digits.js


/// TIME COMPLEXITY IS O(n) and SPACE COMPLEXITY IS O(n)

const removeKdigits = (num, k) => {
    if(k === 0) return num
    if(k === num.length) return "0"

    let res = []
    let nLen = num.length
    /* 
     In This Logic we are storing all the possible response digits and removing big number
     from front side so that we can get the smallest possible number
    */
    for(let i =0;i<nLen;i++){
        while(res.length && k && Number(res[res.length-1]) > Number(num[i])){
            res.pop()
            k = k-1
        }
        if((!res.length && Number(num[i]) > 0) || res.length){
            res.push(Number(num[i]))
        }
    }
    /*
     This part is to handle case in which all given digits are already in increasing order
     soo we will remove digits from last to make it smaller
    */
    while(res.length && k){
        res.pop()
        k = k-1
    }

    if(!res.length) return "0"
    return res.join('')
}

console.log(removeKdigits("1432219",3));
console.log(removeKdigits("10200", 1));
console.log(removeKdigits("10", 2));
