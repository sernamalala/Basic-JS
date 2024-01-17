let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegister = true;
let athleteAge = 1;

if (athleteAge >= 18 && earlyRegister === true){
    raceNumber+=1000;
}

if(athleteAge > 18 && earlyRegister === true){
    console.log(`Member ${raceNumber}: race at 9:30 am.`);
}

else if(athleteAge > 18 && earlyRegister === false){
    console.log(`Member ${raceNumber}: race at 11:00 am.`); 
}

else if(athleteAge <18){
    console.log(`Member ${raceNumber}: Youth registrants run at 12:30 pm.`);
}

else{
    console.log(`Member ${raceNumber}: got to the registration desk.`);
}