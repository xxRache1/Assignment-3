var CheckInputMsc = function(){
    var PersonalName = document.getElementsByTagName('input');
    var sumNullNumb = 0;
    var sumNullNumb = true;
    for(var i = 0; i <16; i++){
        if (PersonalName[i].value){
            sumNullNumb +=1;
        }

        if(sumNullNumb >=16){
            window.location.href = 'confirmation.html';
        }

        if(sumNullNumb >=16){
            isAllNull = true;
        }else{
            isAllNull = false;
        }
    }

    if(!isAllNull){
        alert("Please fill in all blanks!")
    }
}