var playerInfo={
    player1:{
        name:'player1',
        num1:0,
        num2:0,
        num3:0
    }
}
function playerInfoChange(player,type,inputName)
{
    playerInfo[player][type]=document.getElementById(inputName).value;
    document.getElementById(player+type).innerText=playerInfo[player][type];
}