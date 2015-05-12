var fs = require('fs')
var parseTorrentFile = require('../')
var test = require('tape')

var leavesCorrupt = fs.readFileSync(__dirname + '/torrents/leaves-corrupt.torrent')

test('exception thrown when torrent file is missing `name` field', function (t) {
  t.throws(function () {
    parseTorrentFile(leavesCorrupt)
  })
  t.end()
})
