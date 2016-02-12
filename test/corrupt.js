var fs = require('fs')
var parseTorrentFile = require('../')
var path = require('path')
var test = require('tape')

var leavesCorrupt = fs.readFileSync(path.join(__dirname, 'torrents/leaves-corrupt.torrent'))

test('exception thrown when torrent file is missing `name` field', function (t) {
  t.throws(function () {
    parseTorrentFile(leavesCorrupt)
  })
  t.end()
})
