if (typeof exports === 'object' && typeof module === 'object')
    module.exports = function(){};
else if (typeof define === 'function' && define.amd)
    define([], function(){});
else if (typeof exports === 'object')
    exports["appA"] = function(){};
else
    window["appA"] = function(){};
//# sourceMappingURL=upgrade.umd.js.map
