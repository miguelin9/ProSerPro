function circuferencia (radio){
    _radio = radio;
    return {
        perimetro:  function() { return 2 * Math.PI * _radio; },
        area:       function() { return Math.PI * Math.pow(_radio, 2) }
    }
}

module.exports = circuferencia;
