const maxMediaTypeId = 25;
const maxGenreId = 25;

const maxTrackId = 1000000;
const maxPlaylistId = 100000;
const maxPlaylistTrackId = 1000000;

function randomString(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function generateTrackRows() {
  for (let i = 0; i < 1000000; i++) {
    console.log(`INSERT INTO [Track] ([Name], [AlbumId], [MediaTypeId], [GenreId], [Composer], [Milliseconds], [Bytes], [UnitPrice]) 
        VALUES ('${randomString(8)}', 1, ${randomInt(
      1,
      maxMediaTypeId + 1,
    )}, ${randomInt(1, maxGenreId + 1)}, '${randomString(8)}', ${randomInt(
      1,
      12345678,
    )}, ${randomInt(1, 12345678)}, 0.99);`);
  }
}

function generatePlaylistRows() {
  for (let i = 0; i < 100000; i++) {
    console.log(
      `INSERT INTO [Playlist] ([Name]) VALUES ('${randomString(8)}');`,
    );
  }
}

function generatePlaylistTrackRows() {
  for (let i = 0; i < 1000000; i++) {
    console.log(
      `INSERT INTO [PlaylistTrack] ([PlaylistId], [TrackId]) VALUES (${randomInt(
        1,
        maxPlaylistId + 1,
      )}, ${randomInt(1, maxTrackId + 1)});`,
    );
  }
}

// generateTrackRows();
// generatePlaylistRows();
// generatePlaylistTrackRows();
