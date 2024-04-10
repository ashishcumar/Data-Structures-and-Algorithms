// RUN SCRIPT :- node lcd-gcd.js


const getGcd = (a,b) => {
   if(a === 0) return b
   return getGcd(b%a,a)
}

   // THIS FORMULA IN THIS FUNCTION COMES FROM THIS METTHOD ==> lcm * hcf = a*b
    // lcm = (a*b)/hcf
const lcm = (a,b) => { 
  return (a*b)/getGcd(a,b) 
}