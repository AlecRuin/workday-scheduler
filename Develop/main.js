var today = new Date();
var hour= today.getHours();//Get time and convert it to hour
var HourBlocks = []
for (x=0;x<24;x++){//make table containing all the textboxes for the hours
    HourBlocks.splice(HourBlocks.length+1,0,document.getElementById(x))
}
console.log(HourBlocks)
function PopulateHourBlocks(){//Populate and color the textboxes on startup
    var SavedData= localStorage.getItem("Agenda");
    console.log(SavedData)
    if (SavedData!=null){
        var SavedData=JSON.parse(localStorage.getItem("Agenda"))
        for (x=0;x<SavedData.length;x++){
            HourBlocks[x].value=SavedData[x]
        }
    }
    for (x=0;x<HourBlocks.length;x++){
    if (HourBlocks[x].id<hour){
        HourBlocks[x].classList.add("bg-secondary");
        }else if(HourBlocks[x].id==hour){
            HourBlocks[x].classList.add("bg-danger");
        }else{
            HourBlocks[x].classList.add("bg-success")
        }
    }
}
function SaveData(){//Save the data whenever the buttons are clicked
    var SaveData =[]
    for (x=0;x<HourBlocks.length;x++){
        SaveData.splice(SaveData.length+1,0,HourBlocks[x].value)
    }
    localStorage.setItem("Agenda",JSON.stringify(SaveData))
}


PopulateHourBlocks()