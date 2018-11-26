var eventType= prompt('What type of event are you attending?');
var tempFahr= prompt('What will the temperature be?');
var clothes= ["something comfy", "a polo", "a suit", "a coat", "a jacket", "no jacket" ]
var result;
  
if(eventType === 'casual' && tempFahr < 54) {
  var result = "".concat("Since it is "+tempFahr+" degrees and you are going to a "+eventType+" event, you should wear "+clothes[0]+" and "+clothes[3]);
  alert(result);
  console.log(result);
  } else if (eventType === 'semi-formal' && tempFahr < 54) {
    var result = "".concat("Since it is "+tempFahr+" degrees and you are going to a "+eventType+" event, you should wear "+clothes[1]+" and "+clothes[3]);
    alert(result);    
    console.log(result);
      } else if (eventType === 'formal' && tempFahr < 54) {
        var result = "".concat("Since it is "+tempFahr+" degrees and you are going to a "+eventType+" event, you should wear "+clothes[2]+" and "+clothes[3]);
        alert(result); 
        console.log(result);
          } else if(eventType === 'casual' && tempFahr >= 54 && tempFahr <= 70 ) {
            var result = "".concat("Since it is "+tempFahr+" degrees and you are going to a "+eventType+" event, you should wear "+clothes[0]+" and "+clothes[4]+".");
            alert(result);
            console.log(result);
              } else if (eventType === 'semi-formal' && tempFahr >= 54 && tempFahr <= 70 ) {
                var result = "".concat("Since it is "+tempFahr+" degrees and you are going to a "+eventType+" event, you should wear "+clothes[1]+" and "+clothes[4]+".");
                alert(result);
                console.log(result);
                  } else if (eventType === 'formal' && tempFahr >= 54 && tempFahr <= 70 ) {
                    var result = "".concat("Since it is "+tempFahr+" degrees and you are going to a "+eventType+" event, you should wear "+clothes[2]+" and "+clothes[4]+".");
                    alert(result);
                    console.log(result);
                      } else if(eventType === 'casual' && tempFahr > 70 ) {
                        var result = "".concat("Since it is "+tempFahr+" degrees and you are going to a "+eventType+" event, you should wear "+clothes[0]+" and "+clothes[5]+".");
                        alert(result); 
                        console.log(result);
                        } else if (eventType === 'semi-formal' && tempFahr > 70 ) {
                          var result = "".concat("Since it is "+tempFahr+" degrees and you are going to a "+eventType+" event, you should wear "+clothes[1]+" and "+clothes[5]+".");
                          alert(result); 
                          console.log(result);
                            } else if (eventType === 'formal' && tempFahr > 70 ) {
                              var result = "".concat("Since it is "+tempFahr+" degrees and you are going to a "+eventType+" event, you should wear "+clothes[2]+" and "+clothes[5]+".");
                              alert(result); 
                              console.log(result);
                              } 