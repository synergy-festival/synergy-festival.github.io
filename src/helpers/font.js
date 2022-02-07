import WebFont from 'webfontloader';


export function loadFont () {
    WebFont.load({
        google: {
            families: ['Noto+Sans+TC|Roboto+Mono|Work+Sans:400,700', 'Work Sans']
        }
    });   
};