let mostImportantWords = confirm ("Tell me three most important words 💚"); 
let firstWord; 
let secondWord; 
let thirdWord; 
let variantsOfForm;
 
 
if(mostImportantWords){ 
    do{
        firstWord = prompt('Please enter first word.');
        wordHasNumber = false;
        if(firstWord){
            for(let letter=0; letter<firstWord.length; letter++) { 
                let currentLetter = firstWord[letter], 
                    convertToNumber = +currentLetter, 
                    letterIsNumber = isNaN(convertToNumber); 
                if(!letterIsNumber) wordHasNumber = true; 
            } 
        }
    } while(!firstWord || wordHasNumber)
    do{
        secondWord = prompt('Please enter second word.');
        wordHasNumber = false;
        if(secondWord){
            for(let letter=0; letter<secondWord.length; letter++) { 
                let currentLetter = secondWord[letter], 
                    convertToNumber = +currentLetter, 
                    letterIsNumber = isNaN(convertToNumber); 
                if(!letterIsNumber) wordHasNumber = true; 
            } 
        }
    } while(!secondWord || wordHasNumber)
    do{
       
        thirdWord = prompt('Please enter third word.');
        wordHasNumber = false;
        
        if(thirdWord){
            
            for(let letter=0; letter<thirdWord.length; letter++) { 
                let currentLetter = thirdWord[letter], 
                    convertToNumber = +currentLetter, 
                    letterIsNumber = isNaN(convertToNumber); 
                if(!letterIsNumber) wordHasNumber = true; 
            } 
        }
    } while(!thirdWord || wordHasNumber)
    if(firstWord){
        let firstVariant = "uppercase";
        let secondVariant = "lowercase";
        let thirdVariant = "capitalize";
        let arrVariant=[firstVariant, secondVariant, thirdVariant];
        correctWordFound = false;
        do{
            variantsOfForm = prompt(`Please choose the variant of formation  for first word: 
            1. ${firstVariant};
            2. ${secondVariant};
            3. ${thirdVariant}`)

            for(let letter=0; letter<arrVariant.length; letter++) {
                if(arrVariant[letter]=== variantsOfForm) correctWordFound = true;
            }    
        } while(!variantsOfForm || !correctWordFound)

        if(variantsOfForm == firstVariant ){
            firstWord = firstWord.toUpperCase();
        } else if(variantsOfForm == secondVariant){
            firstWord = firstWord.toLowerCase();
        } else if(variantsOfForm == thirdVariant){
            firstWord = firstWord.charAt(0).toUpperCase() + firstWord.slice(1).toLowerCase();
        }  
    } 
    if(secondWord){
        let firstVariant = "uppercase";
        let secondVariant = "lowercase";
        let thirdVariant = "capitalize";
        let arrVariant=[firstVariant, secondVariant, thirdVariant];
        correctWordFound = false;
        do{
            variantsOfForm = prompt(`Please choose the variant of formation for second word: 
            1. ${firstVariant};
            2. ${secondVariant};
            3. ${thirdVariant}`)

            for(let letter=0; letter<arrVariant.length; letter++) {
                if(arrVariant[letter]=== variantsOfForm) correctWordFound = true;
            }    
        } while(!variantsOfForm || !correctWordFound)

        if(variantsOfForm == firstVariant ){
            secondWord =secondWord.toUpperCase();
        } else if(variantsOfForm == secondVariant){
            secondWord =secondWord.toLowerCase();
        } else if(variantsOfForm == thirdVariant){
            secondWord = secondWord.charAt(0).toUpperCase() + secondWord.slice(1).toLowerCase();
        }  
    } 
    if(thirdWord){
        let firstVariant = "uppercase";
        let secondVariant = "lowercase";
        let thirdVariant = "capitalize";
        let arrVariant=[firstVariant, secondVariant, thirdVariant];
        correctWordFound = false;
        do{
            variantsOfForm = prompt(`Please choose the variant of formation for third word: 
            1. ${firstVariant};
            2. ${secondVariant};
            3. ${thirdVariant}`)

            for(let letter=0; letter<arrVariant.length; letter++) {
                if(arrVariant[letter]=== variantsOfForm) correctWordFound = true;
            }    
        } while(!variantsOfForm || !correctWordFound)

        if(variantsOfForm == firstVariant ){
            thirdWord = thirdWord.toUpperCase();
        } else if(variantsOfForm == secondVariant){
            thirdWord = thirdWord.toLowerCase();
        } else if(variantsOfForm == thirdVariant){
            thirdWord = thirdWord.charAt(0).toUpperCase() + thirdWord.slice(1).toLowerCase();
        }  
    } 
    console.log(`${firstWord} ${secondWord} ${thirdWord}!`) 
}


