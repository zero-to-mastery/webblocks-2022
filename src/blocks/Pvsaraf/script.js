var btn = document.getElementById("team_submit");
var team = document.getElementsByName("team");
var labels = document.getElementsByTagName("label");
var len = team.length;

var url = {
    0: "https://www.cricbuzz.com/cricket-series/ipl-2023/auction/teams/62",
    1: "https://www.cricbuzz.com/cricket-series/ipl-2023/auction/teams/58",
    2: "https://www.cricbuzz.com/cricket-series/ipl-2023/auction/teams/65",
    3: "https://www.cricbuzz.com/cricket-series/ipl-2023/auction/teams/966",
    4: "https://www.cricbuzz.com/cricket-series/ipl-2023/auction/teams/63",
    5: "https://www.cricbuzz.com/cricket-series/ipl-2023/auction/teams/971",
    6: "https://www.cricbuzz.com/cricket-series/ipl-2023/auction/teams/61",
    7: "https://www.cricbuzz.com/cricket-series/ipl-2023/auction/teams/59",
    8: "https://www.cricbuzz.com/cricket-series/ipl-2023/auction/teams/64",
    9: "https://www.cricbuzz.com/cricket-series/ipl-2023/auction/teams/255",
}

btn.addEventListener("click", function() {
    for(let i=0;i<len;i++)
    {
        if(team[i].checked)
        {
            window.location.href = url[i];
        }
    }
});

