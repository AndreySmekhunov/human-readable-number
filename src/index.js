module.exports = function toReadable (number) {

        let l = number.toString().length;
        let str = "";
        let arrstr = number.toString().split('').reverse(); 
        let arr = [0,0,0,0,0,0];
        for (let i = 0; i < l; i++)
          arr[i] = parseInt(arrstr[i]);
          console.log(arr);
        let arr19 = ["","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
        let arr2090 = ["","","twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]  
          if (number < 1) return "zero";
          if (arr[1] < 2) str = arr19[arr[0] + arr[1]*10]
            else str = arr2090[arr[1]] + " " + arr19[arr[0]];
        str = str.trim();
          
        if (number < 100) return str
          else return (arr19[arr[2]] + " hundred " + str).trim();
     
}
