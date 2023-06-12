// We're declaring a JavaScript class named SongEntity.
// This class will serve as a blueprint to create "Song" objects.
export default class SongEntity {

  // This is the constructor method for the class, which gets called when a new object is created.
  // It takes three arguments - name, images and icons.
  // Icons have a default value of an empty array if no value is provided.
  constructor(name, images, icons=[]) {
    this._name = name;
    this._images = images;
    this._icons = icons
  }

  // These are getter methods, which allow us to retrieve the private properties of the object in a controlled way.
  get name() {
    return this._name;
  }

  get images() {
    return this._images;
  }

  get icons() {
    return this._icons;
  }

  // fromJSON is a factory method that creates a new instance of SongEntity from a JSON object.
  static fromJSON(song) {
    return new SongEntity(song.name, song.images, song.icons);
  }

  // fromJSONArray is another factory method that creates an array of new SongEntity instances from an array of JSON objects.
  static fromJSONArray(songs) {
    return songs.map((song) => SongEntity.fromJSON(song));
  }
}
