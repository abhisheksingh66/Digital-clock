$(document).ready(function(){
    function showTime(){
        var date= new Date()
        var hour=date.getHours()
        var min=date.getMinutes()
        var sec=date.getSeconds()

        var session="AM"

        if(hour==0){
            hour=12
        }
        if(hour>=12){
            session="PM"
        }
        if(hour>12){
            hour=hour-12
        }
        hour=hour<10?"0"+hour:hour
        min=min<10?"0"+min:min
        sec=sec<10?"0"+sec:sec



        $('#hour').text(hour)
        
        $('#min').text(min)
        
        $('#sec').text(sec)
        
        $('#period').text(session)
        setTimeout(showTime,1000)
    }
    showTime()
})