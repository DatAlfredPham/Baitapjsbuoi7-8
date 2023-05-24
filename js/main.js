var numArray = [];
var numArrayFloat = [];

function getEle(id) {
    return document.getElementById(id);
}

function addNumber() {
    var n = Number(getEle("inputNum").value);
    numArray.push(n), (getEle("txtArray").innerHTML = numArray);
}


// EXERCISE1
function totalPositive() {
    for (var n = 0, i = 0; i < numArray.length; i++) numArray[i] > 0 && (n += numArray[i]);
    getEle("txtTotalPositive").innerHTML = "Tổng số dương là: " + n;
}


// EXERCISE2
function countPositive() {
    for (var n = 0, i = 0; i < numArray.length; i++) numArray[i] > 0 && n++;
    getEle("txtCountPositive").innerHTML = "Số dương: " + n;
}


// EXERCISE3
function findMinNumber() {
    for (var n = numArray[0], i = 1; i < numArray.length; i++) numArray[i] < n && (n = numArray[i]);
    getEle("txtMinNumber").innerHTML = "Số nhỏ nhất là: " + n;
}


// EXERCISE4
function findMinPositive() {
    for (var n = [], i = 0; i < numArray.length; i++) numArray[i] > 0 && n.push(numArray[i]);
    if (n.length > 0) {
        for (var p = n[0], i = 1; i < n.length; i++) n[i] < p && (p = n[i]);
        getEle("txtMinPositive").innerHTML = "Số dương nhỏ nhất là: " + p;
    } else getEle("txtMinPositive").innerHTML = "Không có số dương trong mảng";
}


// EXERCISE5
function findLastEvenNumber() {
    for (var n = 0, i = 0; i < numArray.length; i++) numArray[i] % 2 == 0 && (n = numArray[i]);
    getEle("txtEven").innerHTML = "Số chẵn cuối cùng là: " + n;
}


// EXERCISE6
function swap(a,b) {
    var c = numArray[a];
    (numArray[a] = numArray[b]), (numArray[b] = c);
}
function changePosition() {
    swap(getEle("inputIndex1").value, getEle("inputIndex2").value), (getEle("txtChangePosition").innerHTML = "Mảng sau khi đổi: " + numArray);
}


// EXERCISE7
function sortUpAscending() {
    for (var n = 0; n < numArray.length; n++) 
    for (var i = 0; i < numArray.length - 1; i++) numArray[i] > numArray[i + 1] && swap(i, i + 1);
     getEle("txtSortUpAscending").innerHTML = "Mảng sau khi sắp xếp: " + numArray;
}


// EXERCISE8
function checkPrime(n) {
    if (n < 2) return !1;
    for (var i = 2; i <= Math.sqrt(n); i++) if (n % i == 0) return !1;
    return !0;
}
function findFirstPrime() {
    for (var i = 0; i < numArray.length; i++) {
        if (checkPrime(numArray[i])) {
            n = numArray[i];
            break;
        }else getEle("txtFirstPrime").innerHTML = "Không có số nguyên tố trong mảng";
    }
    getEle("txtFirstPrime").innerHTML = "Số nguyên tố đầu tiên là: " + n;
}


// EXERCISE9
function addFloatNumber() {
    var n = Number(getEle("inputFloat").value);
    numArrayFloat.push(n), (getEle("txtnumArrayFloat").innerHTML = numArrayFloat);
}
function countInteger() {
    for (var n = 0, i = 0; i < numArrayFloat.length; i++) Number.isInteger(numArrayFloat[i]) && n++;
    getEle("txtCountInteger").innerHTML = "Số nguyên: " + n;
}


// EXERCISE10
function comparePosAndNeg() {
    for (var p = 0, n = 0, i = 0; i < numArray.length; i++) numArray[i] > 0 ? p++ : numArray[i] < 0 && n++;
    getEle("txtComparePosAndNeg").innerHTML = p > n ? "Số dương > Số âm" : p < n ? "Số dương < Số âm" : "Số dương = Số âm";
}

