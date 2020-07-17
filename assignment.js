function feetToMile(feet){

    if(feet<0){
        return 'distance can never be negative';
    }

    var mile = feet/5280;

    mile = mile.toFixed(4); // prints four digit after decimal point

    return mile;
}



function woodCalculator(chair, table, bed){

    if(chair<0 || table<0 || bed<0){
        return 'the number of chair or table or bed cannot be negative';
    }

    var requiredWood = (chair * 1) + (table * 3) + (bed * 5);

    return requiredWood;

}



function brickCalculator(numberOfFlat){

    var height = 0, i, bricks;

    if(numberOfFlat <= 0){
        return 'Number of flats cannot be zero or negative. It must be greater than zero.';
    }

    // the loop below calculates total height

    for(i = 1; i<=numberOfFlat; i++){
        if(i<=10){
            height = height + 15; 
        }
        else if(i>10 && i<=20){
            height = height + 12;
        }
        else{
            height = height + 10;
        }
    }

    bricks = height * 1000;

    return bricks;

}




function tinyFriend(array){

    if(array.length == 0){
        return 'the array cannot be empty';
    }

    var smallestName, i;

    smallestName = array[0];

    for(i=1; i<array.length; i++){

        checker = array[i];

        if(checker.length<smallestName.length){
            smallestName = checker;
        }

    }

    return smallestName;

}

