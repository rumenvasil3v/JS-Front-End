function solve(songsInfo) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    
        getSongName() {
            return this.name;
        }
    }
    
    const arrayOfSongs = songsInfo.slice(1, songsInfo[0] + 1);
    const songsFromTypeListToPrint = songsInfo.pop();

    const songs = [];

    for (const song of arrayOfSongs) {
        const songInfoArray = song.split('_');

        const [typeList, nameOfSong, duration] = songInfoArray;
        const currentSong = new Song(typeList, nameOfSong, duration);

        songs.push(currentSong);
    }
    
    const resultArray = [];

    if (!(songsFromTypeListToPrint === 'all')) {

        for (const song of songs) {
            if (song.typeList === songsFromTypeListToPrint) {
                resultArray.push(song.getSongName());
            }
        }  

    } else {

        for (const song of songs) {
            resultArray.push(song.getSongName());
        }
    }

    return resultArray.join('\n');
}

console.log(solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
));

// solve([4,
//     'favourite_DownTown_3:14',
//     'listenLater_Andalouse_3:24',
//     'favourite_In To The Night_3:58',
//     'favourite_Live It Up_3:48',
//     'listenLater']
// );

// solve([2,
//     'like_Replay_3:15',
//     'ban_Photoshop_3:48',
//     'all']
// );