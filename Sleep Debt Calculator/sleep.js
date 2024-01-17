function getSleepHours(day){
    
    switch (day) {
        case 'monday':
            return 8;
            break;
    
        case 'tuesday':
            return 6;
            break;

        case 'wednesday':
            return 9;
            break;

        case 'thursday':
            return 8;
            break;

        case 'friday':
            return 7;
            break;

        case 'saturday':
            return 4;
            break;

        case 'sunday':
            return 5;
            break;
            
        default:
            break;
    }
}

//get total sleep hours

function getActualSleepHours(){
  let sum = getSleepHours('monday') +  getSleepHours('tuesday') +  getSleepHours('wednesday') +  getSleepHours('thursday') +  getSleepHours('friday') +  getSleepHours('saturday') +  getSleepHours('sunday');

  return sum;
}

//ideal sleep hours

function getIdealSleepHours(hours){
  let idealHours = hours ;
  return idealHours * 7;

}

//sleep debt

function calculateSleepDebt(hours){

  let idealHours = hours ;
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(idealHours);

  if(actualSleepHours === idealSleepHours){
    console.log('You have gotten the perfect amount of sleep.');
  }

  else if(actualSleepHours > idealSleepHours){
    let hoursOver = actualSleepHours - idealSleepHours;
    console.log(`You have gotten ${hoursOver} more hour(s) sleep than needed.`);
  }

  else{
    let hoursUnder = idealSleepHours - actualSleepHours ;
    console.log(`You should get ${hoursUnder} hours of rest.`);
  }
}
console.log(getSleepHours('wednesday'));
console.log(getActualSleepHours());
console.log(getIdealSleepHours(7));
calculateSleepDebt(7);