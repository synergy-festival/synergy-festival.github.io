import ReactPixel from 'react-facebook-pixel';

const options = { autoConfig: true, debug: false };

export function initPixel () {
    ReactPixel.init('1109142783156081', {}, options);
}

export function pagePixel() {
    ReactPixel.pageView();
}

export function customPixel(title, data) {
    ReactPixel.trackCustom(title, {'type': data});
}