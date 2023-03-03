function getBotResponse(input) {
    //rock paper scissors
    if (input == "1") 
        return "Hii Students!!\u000a 11.Acedemics & Subject \n 12.Cometitions \n  13.Exam Schedules \n 14.Hostel Booking" ;
              
 
 
    


    else if (input == "11") 

       return "Acedemics: https://academia.srmist.edu.in/ \n";

    else if (input == "12") 

       return "Cometitions : Upcoming Hackathons & FEST";  
        

     else if (input == "13") 

        return "Exams Schedules : Subject Wise";
    
     else if (input == "14") 

        return "Hostel Booking : https://sp.srmist.edu.in/srmiststudentportal/students/loginManager/youLogin.jsp";
 // Faculty
    if (input == "2") 
        return "Hii Dear Faculties!!\u000a 21.Marks Entry \n 22.Attendence Entry \n  23.Timetable \n 24.Quicklrn" ;

    else if (input == "21") 

        return "Marks Entry : Student Wise";

    else if (input == "22") 

       return "Attendence Entry : According to REG no";  
        

    else if (input == "23") 

        return "Timetable For Each Day";
    
    else if (input == "24") 

        return "Quicklrn link : https://quiklrn.com/login.php";

// Parents: 
    if (input == "3") 
        return "Hii Dear Faculties!!\u000a 31.Marks Entry \n 32.Attendence  \n 33.Feekart" ;

    else if (input == "31") 

        return "Marksheet: Semester Wise";

    else if (input == "32") 

        return "Attendence Entry : According to REG no";  


    else if (input == "33") 

        return "Feekart : https://feekart.srmist.edu.in/srmopp/";

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "0") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}


function speak(string) {
    const u = new SpeechSynthesisUtterance();
    allVoices = speechSynthesis.getVoices();
    u.voice = allVoices.filter(voice => voice.name === "Alex")[0];
    u.text = string;
    u.lang = "en-US";
    u.volume = 1; //0-1 interval
    u.rate = 1;
    u.pitch = 1; //0-2 interval
    speechSynthesis.speak(u);
  }