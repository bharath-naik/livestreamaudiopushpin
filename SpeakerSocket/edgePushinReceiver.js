var http=require('http');
var masterPushpinAddress = 'http://localhost:7999';
var channelIdLength = 2 // in bytes
http.get(masterPushpinAddress, function(res){
    res.on('data', function(chunk){
        // UintArray below is just a view (kind of eyeglass)
        // and doesn't store anything under memory
        // it is just a different representation of ArrayBuffer
        // also, we have to be sure that data is received in full bytes to avoid bit padding problems
        var bufferToArray = new Uint8Array(chunk);
        audioPackets = bufferToArray.subarray(0,(bufferToArray.length - 1) - channelIdLength);
        channelId = bufferToArray.subarray((bufferToArray.length - 1) - channelIdLength, bufferToArray.length - 1);
        audioPackets = Buffer.from(audioPackets);
        console.log(audioPackets);
        console.log('channelID: ', Buffer.from(channelId).toString());
    });
    res.on('end', function(chunk){
        console.log('ho gaya');
    });
});