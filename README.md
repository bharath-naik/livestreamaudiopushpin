# liveAudioPushpin
record a live microphone stream from browser and let listeners listen to the live stream via pushpin. backend is nodejs server.

Project structure:

*edgepushpinserver* : receives all the buffer data from masterpushpin server and broadcasts to every connected P Server to edge P Server

*websocketServer.js* : receive live mic audio in blobs and push to pushpin

*backend.js* : nodejs server which is reverse proxied by pushpin. This is where headers for subscribing to pushpin channels are set. Throttling and chunk sizes are adjusted. On http request, first audio chunk containing headers from a file is sent in response. This file's bitrate is same as microphone bitrate (32000 bits per second).
