import React from 'react'
// funcion para poner dos numeritos en el timer(00/00)
function leftPad(number){
    const pad='00';
    // substring(pos a reemplazar, que va a poner)
    return pad.substring(0,pad.length-number.length)+number;
}

export default leftPad;