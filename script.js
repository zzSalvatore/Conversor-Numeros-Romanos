//SELECIONA TODOS OS ELEMENTOS
const numberToConvert = document.querySelector('#numberToConvert');
const btnClean = document.querySelector('#btnClean');
const btnConvert = document.querySelector('#btnConvert');

//FUNÇÕES
function clean(){
    const textResult = document.querySelector('#result');

    numberToConvert.value = '';
    textResult.innerText = '';
}

function romanToArabic(romanNumeral) {
    const romanMap = {  'I': 1, 
                        'V': 5, 
                        'X': 10, 
                        'L': 50, 
                        'C': 100, 
                        'D': 500, 
                        'M': 1000 
    };

    let arabicNum = 0;
    let previousValue = 0;
    let repeatCount = 0;

    for (let i = romanNumeral.length - 1; i >= 0; i--) {
        const currentNum = romanMap[romanNumeral[i]];

        if (currentNum === previousValue) {
            repeatCount++;
            if (repeatCount > 3) {
                alert('Algarismo romano inválido: ' + romanNumeral);
                clean();
            }
        } else {
            repeatCount = 1;
        }

        if (currentNum < previousValue) {
            arabicNum -= currentNum;
        } else {
            arabicNum += currentNum;
            if (previousValue < currentNum && (previousValue === 1 || previousValue === 10 || previousValue === 100)) {
                arabicNum -= previousValue * 2;
            }
        }

        previousValue = currentNum;
    }

    return arabicNum;
}

function arabicToRoman(arabicNum) {
    const arabicMap = [
        { arabic: 1000, roman: 'M' },
        { arabic: 900, roman: 'CM' },
        { arabic: 500, roman: 'D' },
        { arabic: 400, roman: 'CD' },
        { arabic: 100, roman: 'C' },
        { arabic: 90, roman: 'XC' },
        { arabic: 50, roman: 'L' },
        { arabic: 40, roman: 'XL' },
        { arabic: 10, roman: 'X' },
        { arabic: 9, roman: 'IX' },
        { arabic: 5, roman: 'V' },
        { arabic: 4, roman: 'IV' },
        { arabic: 1, roman: 'I' }
    ];

    let romanNum = '';

    for (let i = 0; i < arabicMap.length; i++) {
        while (arabicNum >= arabicMap[i].arabic) {
            romanNum += arabicMap[i].roman;
            arabicNum -= arabicMap[i].arabic;
        }
    }

    return romanNum;
}


//EVENTOS

btnClean.addEventListener("click", (e) => {
    e.preventDefault();
    clean();
})

btnConvert.addEventListener("click", (e) => {
    e.preventDefault();

    let inputNumber = parseInt(numberToConvert.value);
    let inputString = numberToConvert.value.toUpperCase();;

    const textResult = document.querySelector('#result');
       
    if(inputNumber){
        textResult.innerText = arabicToRoman(inputNumber);
    }else if(inputString){
        textResult.innerText = romanToArabic(inputString);
    }

})




