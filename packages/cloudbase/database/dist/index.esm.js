var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { Db } from '@cloudbase/database';
import { constants } from '@cloudbase/utilities';
var getSdkName = constants.getSdkName, ERRORS = constants.ERRORS;
var COMPONENT_NAME = 'database';
function database(dbConfig) {
    if (!this.authInstance) {
        console.warn("[" + getSdkName() + "][" + ERRORS.INVALID_OPERATION + "] not login ");
        return;
    }
    var _a = this.platform, adapter = _a.adapter, runtime = _a.runtime;
    Db.reqClass = this.request.constructor;
    Db.wsClass = adapter.wsClass;
    Db.getAccessToken = this.authInstance.getAccessToken.bind(this.authInstance);
    Db.runtime = runtime;
    if (!Db.ws) {
        Db.ws = null;
    }
    return new Db(__assign(__assign({}, this.config), dbConfig));
}
var component = {
    name: COMPONENT_NAME,
    entity: {
        database: database
    }
};
try {
    cloudbase.registerComponent(component);
}
catch (e) { }
export function registerDatabase(app) {
    app.registerComponent(component);
}
