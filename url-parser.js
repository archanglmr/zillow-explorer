class UrlParser {
    static parse(url) {
        let prefix = 'https://www.zillow.com',
            center = null;

        if (url && url.substr(0, prefix.length) === prefix) {
            let results = [];

            /* Search for the zillow map square  */
            results = url.match(/\/(-?[0-9]+\.[0-9]+),(-?[0-9]+\.[0-9]+),(-?[0-9]+\.[0-9]+),(-?[0-9]+\.[0-9]+)_rect\//);
            if (results && results.length) {
                center = new MapCenter(
                    Coords.findCenter(
                        new Coords(results[1], results[2]),
                        new Coords(results[3], results[4])
                    )
                );

                /* found the square, lets see the zoom level */
                results = url.match(/\/([0-9]{1,2})_zm\//);
                if (results && results.length) {
                    center.zoom = parseInt(results[1], 10);
                }
            }
        }

        return center;
    }
}