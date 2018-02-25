class Coords {
    constructor(latitude, longitude) {
        this.latitude = parseFloat(latitude);
        this.longitude = parseFloat(longitude);
    }

    // @static
    static findCenter(topLeft, bottomRight) {
        return new Coords(
            Number(bottomRight.latitude + ((topLeft.latitude - bottomRight.latitude) / 2)).toFixed(6),
            Number(bottomRight.longitude + ((topLeft.longitude - bottomRight.longitude) / 2)).toFixed(6)
        );
    }
}