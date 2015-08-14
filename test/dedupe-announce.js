var fs = require('fs')
var parseTorrentFile = require('../')
var test = require('tape')

var leavesDuplicateTracker = fs.readFileSync(__dirname + '/torrents/leaves-duplicate-tracker.torrent')

var expectedAnnounce = [
  'http://tracker.bittorrent.am/announce',
  'http://tracker.thepiratebay.org/announce',
  'udp://fr33domtracker.h33t.com:3310/announce',
  'udp://tracker.ccc.de:80',
  'udp://tracker.openbittorrent.com:80',
  'udp://tracker.publicbt.com:80'
]

test('dedupe announce list', function (t) {
  t.deepEqual(parseTorrentFile(leavesDuplicateTracker).announce, expectedAnnounce)
  t.end()
})
