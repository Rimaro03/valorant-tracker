import { playerRequest } from "../../API/request";

export const getMatchesList = (player) => {
    const availableModes = [
        "escalation",
        "spikerush",
        "deathmatch",
        "competitive",
        "unrated",
        "replication",
    ];

    let matchList = [];
    availableModes.forEach((mode) => {
        playerRequest(
            `v3/matches/eu/${player.name}/${player.tag}?filter=${mode}`
        ).then((res) => {
            let datas = res.data;
            datas.forEach(matchData => {
                let date = matchData.metadata.game_start_patched
                /*const longDate = new Date(`${date.split(" ")[1]} ${date.split(" ")[2]} ${date.split(" ")[3]}`)*/
                let longDate = new Date(date)
                date = matchData.metadata.game_start_patched.split(new Date().getFullYear())[0].trim()
                let object = matchList.find(list => list.date === date);
                if (object) {
                    object.datas.push(matchData)
                }
                else {
                    matchList.push({ date: date, longDate: longDate, datas: [matchData] });
                }
            })
            matchList.sort((a, b) => { return a.longDate - b.longDate }).reverse()
        });
    });
    return matchList;
}