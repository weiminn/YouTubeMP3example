var fs = require('fs');

var youtubeDwl = require('youtube-mp3-downloader');
const google = require('googleapis');
const youtube = google.youtube('v3');

var yd = new youtubeDwl({
    'ffmpegPath': 'ffmpeg/bin/ffmpeg.exe',
    'outputPath': 'output',
    'youtubeVideoQuality': 'highest',
    'queueParallelism': 10,
    'progressTimeout': 2000
});

yd.on('finished', (data) => {
    console.log('finished: ' + JSON.stringify(data));
});

yd.on('error', (err) => {
    console.log('error: ' + JSON.stringify(err));
});

yd.on('progress', (progress) => {
    console.log('progress: ' + JSON.stringify(progress));
});

// youtube.playlistItems.list({
//     key: 'AIzaSyArkLTA0fGljeeCp86LaEQhRz3KW6aS34g',
//     part: 'id,snippet',
//     playlistId: 'PLp8oXTv1PUtHM8qq-aaF_4_o5JyszzNy8',
//     maxResults: 50
// }, (err, results) => {
//     for(let item of results.items){
//         yd.download(item.snippet.resourceId.videoId);
//     }
// });

var list = [
    'aInJQ7R7n6I'
];

for (let song of list) {
    yd.download(song);
}


// yd.download('kPBzTxZQG5Q');

// const album = 'All Tracks';

// fs.readdir('./output/JM/' + album, (err, files) => {
//     if (err) {
//         console.log(err);
//     };

//     if(files) {
//         for (let song of files){
//             const title = song.substring(13, song.length);
//             // const newtitle = 'John Mayer - ' + album +
//             // ' - ' + title;
            
//             // console.log(title);

//             fs.rename(
//                 './output/JM/' + album + '/' + song, 
//                 './output/JM/' + album + '/' + title, 
//                 (err) => {
//                 if (err) throw err;
//                 console.log('Rename completed!: ' + title);
//             });
//         }
//     }
// })