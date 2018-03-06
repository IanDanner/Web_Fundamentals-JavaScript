function declareTheTime(HOUR,MINUTE,PERIOD){
    if (MINUTE<=30 && PERIOD=="AM"){
        console.log("It's just after ",HOUR," in the morning");
    }
    else if (MINUTE<=30 && PERIOD=="PM"){
        console.log("It's just after ",HOUR," in the evening");
    }
    else if (MINUTE>30 && PERIOD=="AM"){
        HOUR++;
        console.log("It's almost ",HOUR," in the morning");
    }
    else if (MINUTE>30 && PERIOD=="PM"){
        HOUR++;
        console.log("It's almost ",HOUR," in the evening");
    }
}
declareTheTime(8,50,"AM")
declareTheTime(7,15,"PM")