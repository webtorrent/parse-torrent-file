var fs = require('fs')
var parseTorrentFile = require('../')
var path = require('path')
var test = require('tape')

var leaves = fs.readFileSync(path.join(__dirname, 'torrents/leaves.torrent'))

test('encode', function (t) {
  var parsedTorrent = parseTorrentFile(leaves)
  var buf = parseTorrentFile.encode(parsedTorrent)
  var doubleParsedTorrent = parseTorrentFile(buf)

  t.deepEqual(doubleParsedTorrent.infoBuffer, parsedTorrent.infoBuffer)
  t.equal(doubleParsedTorrent.created.getDate(), parsedTorrent.created.getDate())
  t.deepEqual(doubleParsedTorrent.announce, parsedTorrent.announce)

  t.end()
})
