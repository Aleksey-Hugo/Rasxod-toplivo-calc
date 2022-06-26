function nan(rrr) {
if (Number.isNaN(rrr)) rrr = 0;
if (rrr == "NaN") rrr = "Ошибка";
if (rrr == "-Infinity") rrr = "&#8722;&infin;";
if (rrr == "-Infinity") rrr = "&#8722;&infin;";
if (rrr == "Infinity") rrr = "&infin;";
return rrr;
}
Math.pow_ = Math.pow;
Math.pow = function(_base, _exponent) {
if (_base < 0) {
if (Math.abs(_exponent) < 1) {
if (1 / _exponent % 2 === 0) {
return NaN;
}
return -Math.pow_(Math.abs(_base), _exponent);
}
}
return Math.pow_(_base, _exponent);
};
function sFact(num) {
var rval=1;
for (var i = 2; i <= num; i++)
rval = rval * i;
return rval;
}
function no_Exponents(n) {
var data = String(n).split(/[eE]/);
if (data.length == 1) return data[0];
var z = '',
sign = n < 0 ? '-' : '',
str = data[0].replace('.', ''),
mag = Number(data[1]) + 1;
if (mag < 0) {
z = sign + '0.';
while (mag++) z += '0';
return z + str.replace(/^\-/, '');
}
mag -= str.length;
while (mag--) z += '0';
return str + z;
}
function kzpz(n) {
n = (typeof n == 'string') ? n : n.toString();
if (n.indexOf('e') !== -1) return parseInt(n.split('e')[1]) * -1;
var separator = (1.1).toString().split('1')[1];
var parts = n.split(separator);
return parts.length > 1 ? parts[parts.length - 1].length : 0;
}
function okr(n,s) {
return Math.round(n*Math.pow(10,s))/Math.pow(10,s);
}
function rrr_okr(n) {
return okr(n,kzpz(n)-1);
}
function  plavtochki(n){
string=no_Exponents(n)+"";
aa1 = "0001";
aa2 = "0002";
aa4 = "9999";
aa5 = "9998";
ii1 = string.indexOf(aa1) !== -1;
ii2 = string.indexOf(aa2) !== -1;
ii4 = string.indexOf(aa4) !== -1;
ii5 = string.indexOf(aa5) !== -1;
var itg = 0;
if (ii1 == true || ii2 == true || ii4 == true || ii5 == true) {itg=1;}
return itg;
}
function r_okr(n) {
if (n > 10 && plavtochki(n) == 1){
return no_Exponents(okr(n,kzpz(n)-1));
}
else{
return no_Exponents(okr(n,11));
}
}
function rrrr_okr(n) {
if (n > 100 && kzpz(n)>3){
return no_Exponents(okr(n,kzpz(n)-1));
}
else{
return no_Exponents(okr(n,12));
}
}