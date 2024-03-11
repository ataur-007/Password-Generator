function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += allLowerCase[Math.floor(Math.random() * allLowerCase.length)];
    password += allNumber[Math.floor(Math.random() * allNumber.length)];
    password += allSumbol[Math.floor(Math.random() * allSumbol.length)];

   for(var i = 0; i<8; i++){
    password += allCharecter[Math.floor(Math.random() * allCharecter.length)];
   }
    passBox.value = password;
}