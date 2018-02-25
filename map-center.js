class MapCenter {
    constructor(coords, zoom = null) {
        this.coords = coords;
        this.zoom = (null === zoom) ? 15 : parseInt(zoom, 10);
    }

    toGoogleMapsUrl() {
        if (this.zoom) {
            return `https://www.google.com/maps/@${this.coords.latitude},${this.coords.longitude},${this.zoom}z/data=!3m1!1e3`;
        }
        return false;
    }
}