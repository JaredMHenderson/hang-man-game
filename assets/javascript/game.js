$(document).ready(function(){


    var teams = ["denver broncos", "new england patriots", "houston texans", "dallas cowboys", "oakland raiders",
             "philidelphia eagles", "new york giants", "seattle seahawks", "pittsburgh steelers", "green bay packers",
             "san fransisco 49ers", "chicago bears", "minnesota vikings", "carolina panthers", "cleveland browns", "los angeles rams",
             "kansas city chiefs", "washington redskins", "atlanta falcons", "baltimore ravens", "detroit lions", "new york jets",
             "los angeles chargers", "arizona cardinals", "buffalo bills", "new orleans saints", "miami dolphins", "jacksonville jaguars",
             "cincinnati bengals", "tampa bay buccaneers", "indianapolis colts", "tennessee titans"];

    $("#clickToStart").click(function() {

    var randomIndex = Math.floor(Math.random() * teams.length);
    var randomTeam = teams[randomIndex];

    $("#displayWord").html(randomTeam);

    });



});