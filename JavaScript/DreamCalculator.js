function getSleepHours(day) {
    switch (day) {
      case "monday":
        return 7;
        break;
  
      case "tuesday":
        return 8;
        break;
  
      case "wednesday":
        return 8;
        break;
  
      case "thursday":
        return 1;
        break;
  
      case "friday":
        return 8;
        break;
  
      case "saturday":
        return 8;
        break;
  
      case "sunday":
        return 8;
        break;
    }
  }
  
  function getActualSleepHours (){
   return getSleepHours("monday")+getSleepHours("tuesday")+getSleepHours("wednesday")+getSleepHours("thursday")+getSleepHours("friday")+getSleepHours("saturday")+getSleepHours("sunday");
  }
  
  function getIdealSleepHours (idealHours) {
    return idealHours*7;
  }
  
  function calculateSleepDebt (){
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours= getIdealSleepHours (15);
  
  if (actualSleepHours===idealSleepHours){
    return console.log ("You got the perfect amount of sleep")
  }
  if (actualSleepHours>idealSleepHours) {
    return console.log (`You sleep more than you need. You need to sleep 
    ${actualSleepHours-idealSleepHours} hour less`);
  }
  
  if (idealSleepHours>actualSleepHours) {
    return console.log ("You sleep more than you need. You need to sleep " + (Math.abs(actualSleepHours-idealSleepHours))+ " hours more");
  }
  }
  
  calculateSleepDebt();
  
  
  
  