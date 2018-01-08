export class FilmResult {
    public id: String;
    public title: String;
    public year: Number;
    public director: String;
    public cast: String[];
    public review: String;
    public castString(): String {
        return this.cast.join(', ');
    }
}
