// made variables with arrays for options to choose from for the password.
var specialCharacters= ['!','#','$','%','&','(','*','+','-','.','/',':',';','<','=','>','?','@','[','[','^','_','`','{','|','}','~'];
var lowerCasedCharacters= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCasedCharacters= lowerCasedCharacters.map[ x=> x.toUpperCase()];
var numbers= ["0","1","2","3","4","5","6","7","8","9"]

function generatepassword(){
    var passLength= parseInt(prompt("How many characters would you like in your password?")) ;


        if(isNaN(passLength)=== true){
            alert("Password length must be a number!");
            return;
        }
        if(passLength < 8 || passLength > 128){
            alert("Password length must be between 8 and 128 characters!")
            return
        }

        if(!hasNumbers && !hasLowerCase && !hasUpperCase && !hasSpecialCharacters){
            alert("You must select atleast one character type!")
            return;
        }


    var hasNumbers = confirm("Select 'ok' to include numbers.");
    var hasLowerCase = confirm("Select 'ok' to include lower case letters.");
    var hasUpperCase = confirm("Select 'ok' to include upper case letters.");
    var hasSpecialCharacters= confirm("Select 'ok' to include special characters.");

    var password= {
        passLength: passLength, 
        hasNumbers: hasNumbers,
        hasUpperCase: hasUpperCase,
        hasSpecialCharacters: hasSpecialCharacters
    };
    return password;


     
    var password= '';
    for( i=0; i<passLength; i++){
        if(hasLowerCase && password.length < passLength){
           password += getRandom(lowerCasedCharacters);
        }
        if(hasUpperCase && password.length < passwordLength){
            pasword +=getRandom(upperCasedCharacters);    
        }
        if(hasNumbers && password.length < passwordLength){
           password +=getRandom(numericCharacters); 
        }
        if(hasSpecialCharacters && password.length < passwordlength){
           password +=getRandom(specialCharacters);
       }   
    }  
    return password;

}
    var button= document.querySelector("#generate")


    // function to click on generate button 
    // function to write the password 

    function getRandom(array){
        var position= Math.floor(Math.random() * array.length) ;
        var arrayIndex= array[position] ;
        return arrayIndex ;
       }
    
       function writePassword(){
           var password = generatepassword();
           var passwordText= document.querySelector("#password") 

           passwordText.value= password;
           
       }

button.addEventlistener("click", writePassword);




 