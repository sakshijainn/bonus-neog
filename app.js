
var btnCheck  = document.querySelector('#btnCheck');
var output = document.querySelector('#output');
document.getElementById("output").style.display = "none";

btnCheck.addEventListener("click" ,checkLeapYear)

function checkLeapYear()
{
    var leapYear = document.querySelector('#year').value;

    if(leapYear=="")
    {
        alert('enter the year?')
    }

    else if((leapYear%4==0) && (leapYear%100!=0) || (leapYear%400==0))
    {
        // alert('leap year');
        document.getElementById("output").style.display = "block";
        output.innerText = "Wohhoooo" + " "+ leapYear + " " + "is a leap year!"
    }

    else 
    {
        // alert('no');
        document.getElementById("output").style.display = "block";
        output.innerText = leapYear + " " + "is a common year!"

    }

}


var btnCheck1  = document.querySelector('#btnCheck1');
var output1 = document.querySelector('#output1');
document.getElementById("output1").style.display = "none";

btnCheck1.addEventListener("click" ,checkPrimeNumber);

function checkPrimeNumber()
{
    var PrimeNumber = parseInt(document.querySelector('#prime').value);

      var result =true;
      for(var i=2;i<PrimeNumber;i++)
      {
        if(PrimeNumber%i==0)
        {
            result=false;
            break;
        }
      }
      if(result==true)
      {
        document.getElementById("output1").style.display = "block";
        output1.innerText = PrimeNumber + " " + "is a prime number!"
      }
      else 
      {
        document.getElementById("output1").style.display = "block";
        output1.innerText = PrimeNumber + " " + "is not a prime number!"
      }


    }



























// 

// console.log(inputText.value);

//


//     if((year%100!=0) && (year%4==0) || (year%400==0))
//     {
//         document.getElementById("output").style.display = "block";
//         output.innerText = "Wohhoooo" + " "+ year + " " + "is a leap year!"
//         return;
//     }
//     else 
//     {
//         
//     }

// });



