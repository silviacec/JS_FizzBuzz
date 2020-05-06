
function fizzBuzz (x) {
      // if (Number.isInteger (x / 15))
      if (Number.isInteger (x/3) && Number.isInteger (x/5)){
        document.querySelector('.resultat').value = ('FizzBuzz !');
      }
      else if(Number.isInteger(x / 3)) {
        document.querySelector('.resultat').value = ('Fizz !');
      }
      else if (Number.isInteger(x / 5)){
        document.querySelector('.resultat').value = ('Buzz !');
      }
      else {
        document.querySelector('.resultat').value = ('Just ' + x);
    //    document.querySelector('.resultat').value = x;
      }
}

document.querySelector('.fizz').addEventListener('input', function () {
  let x = document.querySelector('.fizz').value
  fizzBuzz(x)
});
