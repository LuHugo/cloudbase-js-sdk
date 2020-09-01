"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.printGroupLog = exports.throwError = exports.printInfo = exports.printError = exports.printWarn = exports.execCallback = exports.createPromiseCallback = exports.removeParam = exports.getHash = exports.getQuery = exports.toQueryString = exports.createSign = exports.formatUrl = exports.genSeqId = exports.isFormData = exports.isInstanceOf = exports.isNull = exports.isPalinObject = exports.isUndefined = exports.isString = exports.isArray = void 0;
var hmac_sha256_1 = __importDefault(require("crypto-js/hmac-sha256"));
var enc_base64_1 = __importDefault(require("crypto-js/enc-base64"));
var enc_utf8_1 = __importDefault(require("crypto-js/enc-utf8"));
var constants_1 = require("../constants");
function isArray(val) {
    return Object.prototype.toString.call(val) === '[object Array]';
}
exports.isArray = isArray;
function isString(val) {
    return typeof val === 'string';
}
exports.isString = isString;
function isUndefined(val) {
    return typeof val === 'undefined';
}
exports.isUndefined = isUndefined;
function isPalinObject(val) {
    return Object.prototype.toString.call(val) === '[object Object]';
}
exports.isPalinObject = isPalinObject;
function isNull(val) {
    return Object.prototype.toString.call(val) === '[object Null]';
}
exports.isNull = isNull;
function isInstanceOf(instance, construct) {
    return instance instanceof construct;
}
exports.isInstanceOf = isInstanceOf;
function isFormData(val) {
    return Object.prototype.toString.call(val) === '[object FormData]';
}
exports.isFormData = isFormData;
function genSeqId() {
    return Math.random().toString(16).slice(2);
}
exports.genSeqId = genSeqId;
function formatUrl(PROTOCOL, url, query) {
    if (query === void 0) { query = {}; }
    var urlHasQuery = /\?/.test(url);
    var queryString = '';
    for (var key in query) {
        if (queryString === '') {
            !urlHasQuery && (url += '?');
        }
        else {
            queryString += '&';
        }
        queryString += key + "=" + encodeURIComponent(query[key]);
    }
    url += queryString;
    if (/^http(s)?\:\/\//.test(url)) {
        return url;
    }
    return "" + PROTOCOL + url;
}
exports.formatUrl = formatUrl;
function base64url(source) {
    var encodedSource = enc_base64_1.default.stringify(source);
    encodedSource = encodedSource.replace(/=+$/, '');
    encodedSource = encodedSource.replace(/\+/g, '-');
    encodedSource = encodedSource.replace(/\//g, '_');
    return encodedSource;
}
function createSign(payload, secret) {
    var header = {
        alg: 'HS256',
        typ: 'JWT'
    };
    var headerStr = base64url(enc_utf8_1.default.parse(JSON.stringify(header)));
    var payloadStr = base64url(enc_utf8_1.default.parse(JSON.stringify(payload)));
    var token = headerStr + "." + payloadStr;
    var sign = base64url(hmac_sha256_1.default(token, secret));
    return token + "." + sign;
}
exports.createSign = createSign;
function toQueryString(query) {
    if (query === void 0) { query = {}; }
    var queryString = [];
    for (var key in query) {
        queryString.push(key + "=" + encodeURIComponent(query[key]));
    }
    return queryString.join('&');
}
exports.toQueryString = toQueryString;
function getQuery(name, url) {
    if (typeof window === 'undefined') {
        return false;
    }
    var u = url || window.location.search;
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
    var r = u.substr(u.indexOf('?') + 1).match(reg);
    return r != null ? r[2] : '';
}
exports.getQuery = getQuery;
;
exports.getHash = function (name) {
    if (typeof window === 'undefined') {
        return '';
    }
    var matches = window.location.hash.match(new RegExp("[#?&/]" + name + "=([^&#]*)"));
    return matches ? matches[1] : '';
};
function removeParam(key, sourceURL) {
    var rtn = sourceURL.split('?')[0];
    var param;
    var params_arr = [];
    var queryString = sourceURL.indexOf('?') !== -1 ? sourceURL.split('?')[1] : '';
    if (queryString !== '') {
        params_arr = queryString.split('&');
        for (var i = params_arr.length - 1; i >= 0; i -= 1) {
            param = params_arr[i].split('=')[0];
            if (param === key) {
                params_arr.splice(i, 1);
            }
        }
        rtn = rtn + '?' + params_arr.join('&');
    }
    return rtn;
}
exports.removeParam = removeParam;
;
function createPromiseCallback() {
    var cb;
    if (!Promise) {
        cb = function () { };
        cb.promise = {};
        var throwPromiseNotDefined = function () {
            throw new Error('Your Node runtime does support ES6 Promises. ' +
                'Set "global.Promise" to your preferred implementation of promises.');
        };
        Object.defineProperty(cb.promise, 'then', { get: throwPromiseNotDefined });
        Object.defineProperty(cb.promise, 'catch', { get: throwPromiseNotDefined });
        return cb;
    }
    var promise = new Promise(function (resolve, reject) {
        cb = function (err, data) {
            if (err)
                return reject(err);
            return resolve(data);
        };
    });
    cb.promise = promise;
    return cb;
}
exports.createPromiseCallback = createPromiseCallback;
;
function execCallback(fn, err, data) {
    if (data === void 0) { data = null; }
    if (fn && typeof fn === 'function') {
        return fn(err, data);
    }
    if (err) {
        throw err;
    }
    return data;
}
exports.execCallback = execCallback;
function printWarn(error, msg) {
    console.warn("[" + constants_1.getSdkName() + "][" + error + "]:" + msg);
}
exports.printWarn = printWarn;
function printError(error, msg) {
    console.error({
        code: error,
        msg: "[" + constants_1.getSdkName() + "][" + error + "]:" + msg
    });
}
exports.printError = printError;
function printInfo(error, msg) {
    console.log("[" + constants_1.getSdkName() + "][" + error + "]:" + msg);
}
exports.printInfo = printInfo;
function throwError(error, msg) {
    throw new Error(JSON.stringify({
        code: error,
        msg: "[" + constants_1.getSdkName() + "][" + error + "]:" + msg
    }));
}
exports.throwError = throwError;
function printGroupLog(options) {
    var title = options.title, _a = options.subtitle, subtitle = _a === void 0 ? '' : _a, _b = options.content, content = _b === void 0 ? [] : _b, _c = options.printTrace, printTrace = _c === void 0 ? false : _c, _d = options.collapsed, collapsed = _d === void 0 ? false : _d;
    if (collapsed) {
        console.groupCollapsed(title, subtitle);
    }
    else {
        console.group(title, subtitle);
    }
    for (var _i = 0, content_1 = content; _i < content_1.length; _i++) {
        var tip = content_1[_i];
        var type = tip.type, body = tip.body;
        switch (type) {
            case 'info':
                console.log(body);
                break;
            case 'warn':
                console.warn(body);
                break;
            case 'error':
                console.error(body);
                break;
        }
    }
    if (printTrace) {
        console.trace('stack trace:');
    }
    console.groupEnd();
}
exports.printGroupLog = printGroupLog;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWJzL3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsc0VBQTBDO0FBQzFDLG9FQUEwQztBQUMxQyxnRUFBc0M7QUFFdEMsMENBQTBDO0FBRTFDLFNBQWdCLE9BQU8sQ0FBQyxHQUFRO0lBQzlCLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLGdCQUFnQixDQUFDO0FBQ2xFLENBQUM7QUFGRCwwQkFFQztBQUNELFNBQWdCLFFBQVEsQ0FBQyxHQUFRO0lBQy9CLE9BQU8sT0FBTyxHQUFHLEtBQUssUUFBUSxDQUFDO0FBQ2pDLENBQUM7QUFGRCw0QkFFQztBQUNELFNBQWdCLFdBQVcsQ0FBQyxHQUFRO0lBQ2xDLE9BQU8sT0FBTyxHQUFHLEtBQUssV0FBVyxDQUFDO0FBQ3BDLENBQUM7QUFGRCxrQ0FFQztBQUNELFNBQWdCLGFBQWEsQ0FBQyxHQUFRO0lBQ3BDLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLGlCQUFpQixDQUFDO0FBQ25FLENBQUM7QUFGRCxzQ0FFQztBQUNELFNBQWdCLE1BQU0sQ0FBQyxHQUFRO0lBQzdCLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLGVBQWUsQ0FBQztBQUNqRSxDQUFDO0FBRkQsd0JBRUM7QUFDRCxTQUFnQixZQUFZLENBQUMsUUFBWSxFQUFFLFNBQWE7SUFDdEQsT0FBTyxRQUFRLFlBQVksU0FBUyxDQUFDO0FBQ3ZDLENBQUM7QUFGRCxvQ0FFQztBQUNELFNBQWdCLFVBQVUsQ0FBQyxHQUFRO0lBQ2pDLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLG1CQUFtQixDQUFD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SUFBSSxHQUFLLEdBQUcsS0FBUixDQUFTO1FBQzNCLFFBQU8sSUFBSSxFQUFDO1lBQ1YsS0FBSyxNQUFNO2dCQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2xCLE1BQU07WUFDUixLQUFLLE1BQU07Z0JBQ1QsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbkIsTUFBTTtZQUNSLEtBQUssT0FBTztnQkFDVixPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNwQixNQUFNO1NBQ1Q7S0FDRjtJQUNELElBQUcsVUFBVSxFQUFDO1FBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztLQUMvQjtJQUNELE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUNyQixDQUFDO0FBekJELHNDQXlCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBoczI1NiBmcm9tICdjcnlwdG8tanMvaG1hYy1zaGEyNTYnO1xuaW1wb3J0IGJhc2U2NCBmcm9tICdjcnlwdG8tanMvZW5jLWJhc2U2NCc7XG5pbXBvcnQgdXRmOCBmcm9tICdjcnlwdG8tanMvZW5jLXV0ZjgnO1xuaW1wb3J0IHsgS1YgfSBmcm9tICdAY2xvdWRiYXNlL3R5cGVzJztcbmltcG9ydCB7IGdldFNka05hbWUgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheSh2YWw6IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcodmFsOiBhbnkpOiBib29sZWFuIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbDogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1BhbGluT2JqZWN0KHZhbDogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNOdWxsKHZhbDogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgTnVsbF0nO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzSW5zdGFuY2VPZihpbnN0YW5jZTphbnksIGNvbnN0cnVjdDphbnkpOiBib29sZWFuIHtcbiAgcmV0dXJuIGluc3RhbmNlIGluc3RhbmNlb2YgY29uc3RydWN0O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzRm9ybURhdGEodmFsOiBhbnkpOiBib29sZWFuIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGb3JtRGF0YV0nO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdlblNlcUlkKCk6c3RyaW5nIHtcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpLnNsaWNlKDIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybChQUk9UT0NPTDogc3RyaW5nLCB1cmw6IHN0cmluZywgcXVlcnk6IEtWPGFueT4gPSB7fSk6IHN0cmluZyB7XG4gIGNvbnN0IHVybEhhc1F1ZXJ5ID0gL1xcPy8udGVzdCh1cmwpO1xuICBsZXQgcXVlcnlTdHJpbmcgPSAnJztcbiAgZm9yIChsZXQga2V5IGluIHF1ZXJ5KSB7XG4gICAgaWYgKHF1ZXJ5U3RyaW5nID09PSAnJykge1xuICAgICAgIXVybEhhc1F1ZXJ5ICYmICh1cmwgKz0gJz8nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlTdHJpbmcgKz0gJyYnO1xuICAgIH1cbiAgICBxdWVyeVN0cmluZyArPSBgJHtrZXl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHF1ZXJ5W2tleV0pfWA7XG4gIH1cbiAgdXJsICs9IHF1ZXJ5U3RyaW5nO1xuICBpZiAoL15odHRwKHMpP1xcOlxcL1xcLy8udGVzdCh1cmwpKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICByZXR1cm4gYCR7UFJPVE9DT0x9JHt1cmx9YDtcbn1cblxuZnVuY3Rpb24gYmFzZTY0dXJsKHNvdXJjZTogS1Y8YW55Pik6c3RyaW5nIHtcbiAgbGV0IGVuY29kZWRTb3VyY2UgPSBiYXNlNjQuc3RyaW5naWZ5KHNvdXJjZSk7XG5cbiAgZW5jb2RlZFNvdXJjZSA9IGVuY29kZWRTb3VyY2UucmVwbGFjZSgvPSskLywgJycpO1xuICBlbmNvZGVkU291cmNlID0gZW5jb2RlZFNvdXJjZS5yZXBsYWNlKC9cXCsvZywgJy0nKTtcbiAgZW5jb2RlZFNvdXJjZSA9IGVuY29kZWRTb3VyY2UucmVwbGFjZSgvXFwvL2csICdfJyk7XG5cbiAgcmV0dXJuIGVuY29kZWRTb3VyY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTaWduKHBheWxvYWQ6IEtWPGFueT4sIHNlY3JldDogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgaGVhZGVyID0ge1xuICAgIGFsZzogJ0hTMjU2JyxcbiAgICB0eXA6ICdKV1QnXG4gIH07XG4gIGNvbnN0IGhlYWRlclN0ciA9IGJhc2U2NHVybCh1dGY4LnBhcnNlKEpTT04uc3RyaW5naWZ5KGhlYWRlcikpKTtcbiAgY29uc3QgcGF5bG9hZFN0ciA9IGJhc2U2NHVybCh1dGY4LnBhcnNlKEpTT04uc3RyaW5naWZ5KHBheWxvYWQpKSk7XG5cbiAgY29uc3QgdG9rZW4gPSBgJHtoZWFkZXJTdHJ9LiR7cGF5bG9hZFN0cn1gO1xuICBjb25zdCBzaWduID0gYmFzZTY0dXJsKGhzMjU2KHRva2VuLCBzZWNyZXQpKTtcbiAgcmV0dXJuIGAke3Rva2VufS4ke3NpZ259YDtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0b1F1ZXJ5U3RyaW5nKHF1ZXJ5OiBLVjxhbnk+ID0ge30pIHtcbiAgbGV0IHF1ZXJ5U3RyaW5nID0gW107XG4gIGZvciAobGV0IGtleSBpbiBxdWVyeSkge1xuICAgIHF1ZXJ5U3RyaW5nLnB1c2goYCR7a2V5fT0ke2VuY29kZVVSSUNvbXBvbmVudChxdWVyeVtrZXldKX1gKTtcbiAgfVxuICByZXR1cm4gcXVlcnlTdHJpbmcuam9pbignJicpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UXVlcnkgKG5hbWU6IHN0cmluZywgdXJsPzogc3RyaW5nKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyDlj4LmlbDvvJrlj5jph4/lkI3vvIx1cmzkuLrnqbrliJnooajku47lvZPliY3pobXpnaLnmoR1cmzkuK3lj5ZcbiAgbGV0IHUgPSB1cmwgfHwgd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcbiAgbGV0IHJlZyA9IG5ldyBSZWdFeHAoJyhefCYpJyArIG5hbWUgKyAnPShbXiZdKikoJnwkKScpO1xuICBsZXQgciA9IHUuc3Vic3RyKHUuaW5kZXhPZignPycpICsgMSkubWF0Y2gocmVnKTtcbiAgcmV0dXJuIHIgIT0gbnVsbCA/IHJbMl0gOiAnJztcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRIYXNoID0gZnVuY3Rpb24gKG5hbWU6IHN0cmluZykge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgY29uc3QgbWF0Y2hlcyA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLm1hdGNoKFxuICAgIG5ldyBSZWdFeHAoYFsjXFw/JlxcL10ke25hbWV9PShbXiYjXSopYClcbiAgKTtcbiAgcmV0dXJuIG1hdGNoZXMgPyBtYXRjaGVzWzFdIDogJyc7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGFyYW0oa2V5OiBzdHJpbmcsIHNvdXJjZVVSTDogc3RyaW5nKSB7XG4gIGxldCBydG4gPSBzb3VyY2VVUkwuc3BsaXQoJz8nKVswXTtcbiAgbGV0IHBhcmFtO1xuICBsZXQgcGFyYW1zX2FyciA9IFtdO1xuICBsZXQgcXVlcnlTdHJpbmcgPVxuICAgIHNvdXJjZVVSTC5pbmRleE9mKCc/JykgIT09IC0xID8gc291cmNlVVJMLnNwbGl0KCc/JylbMV0gOiAnJztcbiAgaWYgKHF1ZXJ5U3RyaW5nICE9PSAnJykge1xuICAgIHBhcmFtc19hcnIgPSBxdWVyeVN0cmluZy5zcGxpdCgnJicpO1xuICAgIGZvciAobGV0IGkgPSBwYXJhbXNfYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaSAtPSAxKSB7XG4gICAgICBwYXJhbSA9IHBhcmFtc19hcnJbaV0uc3BsaXQoJz0nKVswXTtcbiAgICAgIGlmIChwYXJhbSA9PT0ga2V5KSB7XG4gICAgICAgIHBhcmFtc19hcnIuc3BsaWNlKGksIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBydG4gPSBydG4gKyAnPycgKyBwYXJhbXNfYXJyLmpvaW4oJyYnKTtcbiAgfVxuICByZXR1cm4gcnRuO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb21pc2VDYWxsYmFjaygpIHtcbiAgbGV0IGNiOiBhbnk7XG4gIGlmICghUHJvbWlzZSkge1xuICAgIGNiID0gKCkgPT4geyB9O1xuICAgIGNiLnByb21pc2UgPSB7fTtcblxuICAgIGNvbnN0IHRocm93UHJvbWlzZU5vdERlZmluZWQgPSAoKSA9PiB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdZb3VyIE5vZGUgcnVudGltZSBkb2VzIHN1cHBvcnQgRVM2IFByb21pc2VzLiAnICtcbiAgICAgICAgJ1NldCBcImdsb2JhbC5Qcm9taXNlXCIgdG8geW91ciBwcmVmZXJyZWQgaW1wbGVtZW50YXRpb24gb2YgcHJvbWlzZXMuJ1xuICAgICAgKTtcbiAgICB9O1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNiLnByb21pc2UsICd0aGVuJywgeyBnZXQ6IHRocm93UHJvbWlzZU5vdERlZmluZWQgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNiLnByb21pc2UsICdjYXRjaCcsIHsgZ2V0OiB0aHJvd1Byb21pc2VOb3REZWZpbmVkIH0pO1xuICAgIHJldHVybiBjYjtcbiAgfVxuXG4gIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY2IgPSAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICBpZiAoZXJyKSByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICByZXR1cm4gcmVzb2x2ZShkYXRhKTtcbiAgICB9O1xuICB9KTtcbiAgY2IucHJvbWlzZSA9IHByb21pc2U7XG4gIHJldHVybiBjYjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBleGVjQ2FsbGJhY2soZm46RnVuY3Rpb258bnVsbHx1bmRlZmluZWQsZXJyOmFueSxkYXRhPW51bGwpe1xuICBpZihmbiYmdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKXtcbiAgICByZXR1cm4gZm4oZXJyLGRhdGEpO1xuICB9XG4gIGlmKGVycil7XG4gICAgdGhyb3cgZXJyO1xuICB9XG4gIHJldHVybiBkYXRhO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRXYXJuKGVycm9yOnN0cmluZyxtc2c6c3RyaW5nKXtcbiAgY29uc29sZS53YXJuKGBbJHtnZXRTZGtOYW1lKCl9XVske2Vycm9yfV06JHttc2d9YCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmludEVycm9yKGVycm9yOnN0cmluZyxtc2c6c3RyaW5nKXtcbiAgY29uc29sZS5lcnJvcih7XG4gICAgY29kZTogZXJyb3IsXG4gICAgbXNnOiBgWyR7Z2V0U2RrTmFtZSgpfV1bJHtlcnJvcn1dOiR7bXNnfWBcbiAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gcHJpbnRJbmZvKGVycm9yOnN0cmluZyxtc2c6c3RyaW5nKXtcbiAgY29uc29sZS5sb2coYFske2dldFNka05hbWUoKX1dWyR7ZXJyb3J9XToke21zZ31gKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd0Vycm9yKGVycm9yOnN0cmluZyxtc2c6c3RyaW5nKXtcbiAgdGhyb3cgbmV3IEVycm9yKEpTT04uc3RyaW5naWZ5KHtcbiAgICBjb2RlOiBlcnJvcixcbiAgICBtc2c6IGBbJHtnZXRTZGtOYW1lKCl9XVske2Vycm9yfV06JHttc2d9YFxuICB9KSk7XG59XG5cbmludGVyZmFjZSBJUHJpbnRHcm91cExvZ09wdGlvbnMge1xuICB0aXRsZTogc3RyaW5nO1xuICBzdWJ0aXRsZTogc3RyaW5nfG9iamVjdDtcbiAgY29udGVudDoge1xuICAgIHR5cGU6ICdpbmZvJ3wnd2Fybid8J2Vycm9yJyxcbiAgICBib2R5OiBzdHJpbmd8RXJyb3I7XG4gIH1bXTtcbiAgcHJpbnRUcmFjZT86IGJvb2xlYW47XG4gIGNvbGxhcHNlZD86IGJvb2xlYW47XG59XG5leHBvcnQgZnVuY3Rpb24gcHJpbnRHcm91cExvZyhvcHRpb25zOklQcmludEdyb3VwTG9nT3B0aW9ucyl7XG4gIGNvbnN0IHsgdGl0bGUsIHN1YnRpdGxlPScnLCBjb250ZW50PVtdLHByaW50VHJhY2U9ZmFsc2UsY29sbGFwc2VkPWZhbHNlIH0gPSBvcHRpb25zO1xuICBpZihjb2xsYXBzZWQpe1xuICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQodGl0bGUsc3VidGl0bGUpO1xuICB9ZWxzZXtcbiAgICBjb25zb2xlLmdyb3VwKHRpdGxlLHN1YnRpdGxlKTtcbiAgfVxuICBmb3IoY29uc3QgdGlwIG9mIGNvbnRlbnQpe1xuICAgIGNvbnN0IHsgdHlwZSwgYm9keSB9ID0gdGlwO1xuICAgIHN3aXRjaCh0eXBlKXtcbiAgICAgIGNhc2UgJ2luZm8nOlxuICAgICAgICBjb25zb2xlLmxvZyhib2R5KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd3YXJuJzpcbiAgICAgICAgY29uc29sZS53YXJuKGJvZHkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgY29uc29sZS5lcnJvcihib2R5KTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIGlmKHByaW50VHJhY2Upe1xuICAgIGNvbnNvbGUudHJhY2UoJ3N0YWNrIHRyYWNlOicpO1xuICB9XG4gIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbn0iXX0=