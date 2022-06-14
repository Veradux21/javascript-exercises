const ftoc = function(temp) { 
  temp -= 32;
  console.log("+32:"+temp)
  temp *= 5;
  console.log("*5: "+temp)
  temp /= 9;
  console.log("/9: "+temp)
  temp = temp.toPrecision(3);
  //toPrecision is a problem when output is not two digit whole number. Should use Math.round(num * 10)/10
  console.log("precision: "+temp)
  temp = parseFloat(temp)
  return temp
}; 
  
 const ctof = function(temp) {
  temp *= 9;
  temp /= 5;
  temp += 32;
  temp = Math.round(temp * 10) / 10
/*   temp = temp.toString;
  temp = parseFloat(temp) */
  return temp 
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
