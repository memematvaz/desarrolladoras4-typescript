"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Phone = void 0;
var Phone = /** @class */ (function () {
    function Phone(_type, _numberPhone) {
        this._type = _type;
        this._numberPhone = _numberPhone;
    }
    Object.defineProperty(Phone.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (type) {
            this._type = type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Phone.prototype, "numberPhone", {
        get: function () {
            return this._numberPhone;
        },
        set: function (numberPhone) {
            this._numberPhone = numberPhone;
        },
        enumerable: false,
        configurable: true
    });
    return Phone;
}());
exports.Phone = Phone;
