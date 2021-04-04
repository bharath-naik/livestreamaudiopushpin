var http=require('http');
var masterPushpinAddress = 'http://localhost:7999';
http.get(masterPushpinAddress, function(res){
    res.on('data', function(chunk){
        // UintArray below is just a view (kind of eyeglass)
        // and doesn't store anything under memory
        // it is just a different representation of ArrayBuffer
        var bufferToArray = new Uint8Array(chunk);
        popped = bufferToArray.subarray((bufferToArray.length - 1) - 4,(bufferToArray.length - 1) - 2);
        arrayToBuffer = popped.buffer;
        console.log(arrayToBuffer);
    });
    res.on('end', function(chunk){
        console.log('ho gaya');
    });
});