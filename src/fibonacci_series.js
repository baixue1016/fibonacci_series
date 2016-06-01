'use strict';

function fibonacci_series(n) {
    var fx = [0,1], i = 2;

    while(i <= n){
        fx.push(fx[i-1] + fx[i-2]);

        ++i;
    }

    return fx;

}

module.exports = fibonacci_series;
