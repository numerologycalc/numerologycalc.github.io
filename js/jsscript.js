$(function(){
     // initialize tooltipster on text input elements
    $('#userDetails input[type="text"], input[type="date"]').tooltipster({
        trigger: 'custom',
        onlyOne: false,
        position: 'top',
        content:"Input Please"
    });

jQuery.validator.addMethod("lettersDotSpaceonly", function(value, element) {
  return this.optional(element) || /^[a-z." "]+$/i.test(value);
},"Only Allowed: Alphabets | Dot | Space");
jQuery.validator.addMethod("NoSpaceOnly", function(value, element) {
  return this.optional(element) ||value.replace(/^\s+/, '');;
},"Spaces are invalid Input");
jQuery.validator.addMethod("OneSpaceonly", function(value, element) {
  return this.optional(element) || /^(\w+\.)*(\w+\s)*\w+$/i.test(value);
},"Only One Space | Dot Allowed Only Between Names");

    $("#userDetails").validate({
        errorPlacement: function (error, element) {
            $(element).tooltipster('update', $(error).text());
            $(element).tooltipster('show');
        },
        success: function (label, element) {
            $(element).tooltipster('hide');
        },
        rules: {
            firstName: {
                required: true,
                lettersDotSpaceonly: true,
                NoSpaceOnly:true,
                OneSpaceonly:true
            },
            lastName: {
                required: true,
                lettersDotSpaceonly: true,
                NoSpaceOnly:true,
                OneSpaceonly:true
            },
            bday: {
                required: true,
            }
        },
        messages:{
        firstName:{
        required: "Enter your First Name"
        },
        lastName:{
        required: "Enter your Last Name"
        },
        bday:{
            required: "Enter your DOB"
        }
        },
        submitHandler: function (form) {
            var firstName=$(form).find('input[name="firstName"]').val();
            var lastName=$(form).find('input[name="lastName"]').val();
            var dob=$(form).find('input[name="bday"]').val();
            localStorage.setItem("firstName",firstName);
            localStorage.setItem("lastName",lastName);
            localStorage.setItem("dob",dob);
            return true;
        }
    });
});

function get(){
    var first=localStorage.getItem("firstName");
    var last=localStorage.getItem("lastName");
    var dob=localStorage.getItem("dob");
    
    document.getElementById('dispFirstName').innerHTML=first;
    document.getElementById('dispLastName').innerHTML=last;

    var name=first.concat(last);
    var finalName=name.replace(/[\W_]/g,"");
    var finalName=finalName.toLowerCase();
    var nameArray=finalName.split("");
    var nameSum=0;

    for (let i = 0; i < nameArray.length; i++) {
        
        if(nameArray[i]==='a' || nameArray[i]==='j' || nameArray[i]==='s')
        {
            nameArray[i]=1;
        }
        else if(nameArray[i]==='b' || nameArray[i]==='k' || nameArray[i]==='t')
        {
            nameArray[i]=2;
        }
        else if(nameArray[i]==='c' || nameArray[i]==='l' || nameArray[i]==='u')
        {
            nameArray[i]=3;
        }
        else if(nameArray[i]==='d' || nameArray[i]==='m' || nameArray[i]==='v')
        {
            nameArray[i]=4;
        }
        else if(nameArray[i]==='e' || nameArray[i]==='n' || nameArray[i]==='w')
        {
            nameArray[i]=5;
        }
        else if(nameArray[i]==='f' || nameArray[i]==='o' || nameArray[i]==='x')
        {
            nameArray[i]=6;
        }
        else if(nameArray[i]==='g' || nameArray[i]==='p' || nameArray[i]==='y')
        {
            nameArray[i]=7;
        }
        else if(nameArray[i]==='h' || nameArray[i]==='q' || nameArray[i]==='z')
        {
            nameArray[i]=8;
        }
        else if(nameArray[i]==='i' || nameArray[i]==='r')
        {
            nameArray[i]=9;
        }
    }
    
    for(let j=0;j<nameArray.length;j++){
        nameSum=nameSum+nameArray[j];
    }
    
    if(getLength(nameSum)!=1)
    {
        var subNameSum,arraySum;
        while(true){
            subNameSum=0,arraySum=0;
            arraySum=nameSum.toString().split("").map(function(t){return parseInt(t)});
            for(let k=0;k<arraySum.length;k++){
                subNameSum=subNameSum+arraySum[k];
            }
            nameSum=subNameSum;
            if(getLength(nameSum)===1){
                break;
            }
        }   
    }
    document.getElementById('dispNameNo').innerHTML=nameSum;

    var dobArray=dob.split("-");
    document.getElementById('dispDob').innerHTML=dobArray[2]+' / '+dobArray[1]+' / '+dobArray[0];
    
    var dobDateArray=dobArray[2].toString().split("").map(function(t){return parseInt(t)});
    var dobDateSum=0;
    for(let j=0;j<dobDateArray.length;j++){
        dobDateSum=dobDateSum+dobDateArray[j];
    }
    
    if(getLength(dobDateSum)!=1)
    {
        var subDobDateSum,arrayDobDateSum;
        while(true){
            subDobDateSum=0,arrayDobDateSum=0;
            arrayDobDateSum=dobDateSum.toString().split("").map(function(t){return parseInt(t)});
            for(let k=0;k<arrayDobDateSum.length;k++){
                subDobDateSum=subDobDateSum+arrayDobDateSum[k];
            }
            dobDateSum=subDobDateSum;
            if(getLength(dobDateSum)===1){
                break;
            }
        }
    }
    document.getElementById('dispDobDateNo').innerHTML=dobDateSum;


    var dobDateMonthYear=dobArray[1].concat(dobArray[0],dobArray[2]);
    var dobDateMonthYearArray=dobDateMonthYear.toString().split("").map(function(t){return parseInt(t)});
    var dobDateMonthYearSum=0;
    for(let j=0;j<dobDateMonthYearArray.length;j++){
        dobDateMonthYearSum=dobDateMonthYearSum+dobDateMonthYearArray[j];
    }
    
    if(getLength(dobDateMonthYearSum)!=1)
    {
        var subDobDateMonthYearSum,arrayDobDateMonthYearSum;
        while(true){
            subDobDateMonthYearSum=0,arrayDobDateMonthYearSum=0;
            arrayDobDateMonthYearSum=dobDateMonthYearSum.toString().split("").map(function(t){return parseInt(t)});
            for(let k=0;k<arrayDobDateMonthYearSum.length;k++){
                subDobDateMonthYearSum=subDobDateMonthYearSum+arrayDobDateMonthYearSum[k];
            }
            dobDateMonthYearSum=subDobDateMonthYearSum;
            if(getLength(dobDateMonthYearSum)===1){
                break;
            }
        }
    }
    document.getElementById('dispDobNo').innerHTML=dobDateMonthYearSum; 

    var resultFlag=0;
    if(nameSum!=4 && nameSum!=7 && nameSum!=8){
        if(nameSum===1 && (dobDateSum===1 || dobDateMonthYearSum===1)){
            resultFlag=1;
        }
        else if(nameSum===2 && (dobDateSum===2 || dobDateMonthYearSum===2)){
            resultFlag=1;   
        }
        else if(nameSum===3 && (dobDateSum===3 || dobDateMonthYearSum===3)){
            resultFlag=1;
        }
        else if(nameSum===5 && (dobDateSum===5 || dobDateMonthYearSum===5)){
            resultFlag=1;
        }
        else if(nameSum===6 && (dobDateSum===6 || dobDateMonthYearSum===6)){
            resultFlag=1;
        }
        else if(nameSum===9 && (dobDateSum===9 || dobDateMonthYearSum===9)){
            resultFlag=1;
        }
        else if(nameSum===0){
            resultFlag=2;
        }
        else{
            resultFlag=3;
        } 
    }
    else
    {
        document.getElementById('dispResultFail').innerHTML="Your Name is Incorrect!";
    }

    if(resultFlag===1){
        document.getElementById('dispResultPass').innerHTML="Your Name is Perfectly Acceptable!";
    }
    else if(resultFlag===2){
        document.getElementById('dispResultFail').innerHTML="You Entered Invalid Details!"; 
    }
    else if(resultFlag===3){
        document.getElementById('dispResultMod').innerHTML="Your Name is Moderately Acceptable!";   
    }
}

function getLength(number){
    return number.toString().length;
}

 function toggle_visibility(id) {
       var e = document.getElementById(id);
       if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
  }

  var myVar;

function delayFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
function chooseFile() {
      $("#fileInput").click();
   }