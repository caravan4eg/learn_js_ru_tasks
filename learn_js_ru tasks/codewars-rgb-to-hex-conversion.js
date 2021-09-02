/*
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

    Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

    The following are examples of expected output values:

    rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
*/
function rgb(r, g, b) {
    // complete this function
    let rgbToHex = function (dec_number) {
        if (dec_number > 255) return 'FF';
        if (dec_number <= 0) return '00';
        if ((dec_number > 0) && (dec_number < 16)) return '0' + dec_number.toString(16);
        return dec_number.toString(16);
    }

    let hexString = '';
    hexString += rgbToHex(r).toUpperCase();
    hexString += rgbToHex(g).toUpperCase();
    hexString += rgbToHex(b).toUpperCase();


    console.log(hexString);
    return hexString;
}


rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0, 0, 0) // returns 000000
rgb(148, 0, 211) // returns 9400D3

rgb(0, 0, 0);// '000000')
rgb(0, 0, -20); //, '000000')
rgb(300, 255, 255); //, 'FFFFFF')
rgb(173, 255, 47);//, 'ADFF2F')
rgb(201,59,13);
rgb(10,256,198);
