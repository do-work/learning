;(function () {
    /**
     * Node logging
     *
     * Usage:
     * var logger = c9logger.log('log_file');
     * logger(c9logger.warning('writing out to log');
     *
     * or
     *
     * c9logger.log('log_file')(c9logger.warning('writing out to log');
     *
     * Outputs:
     * [Aug-11-2017 10:50:57] [WARNING] writing out to log
     */

    // fs is required
    if (typeof fs === 'undefined') {
        var fs = require('fs')
    }

    var error = function(msg) {
        return '[ERROR] ' + msg;
    };

    var warning = function (msg) {
        return '[WARNING] ' + msg;
    };

    var info = function (msg) {
        return '[INFO] ' + msg;
    };

    var fatal = function (msg) {
        return '[FATAL] ' + msg;
    };

    var debug = function (msg) {
        return '[DEBUG] ' + msg;
    };

    /**
     * Get log date format
     * @returns {string}
     * @private
     */
    var _getDateTime = function (withTime) {
        withTime = typeof withTime === 'undefined' ? true : withTime;
        var n = new Date();
        var monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        var dt = (monthNames[n.getMonth()].substring(0, 3))
            + "-" + n.getDate()
            + "-" + n.getFullYear();
        return withTime ? dt + ' ' + n.getHours() + ':' + n.getMinutes() : dt;
    };

    var getDate = function() {
        return _getDateTime(false);
    };

    /**
     * Write simple log
     * @param file
     * @returns function
     */
    var log = function (file) {
        return function (msg) {
            var datetime = '[' + _getDateTime() + '] ';
            msg = datetime + msg;
            if (fs.appendFile) {
                // CasperJS doesn't have appendFile
                fs.appendFile(file, msg + '\r\n', function (err) {
                    throw err
                });
                return msg
            } else {
                fs.write(file, msg + '\r\n', 'a');
                return msg``
            }``
        }
    };

    var c9logger = {
        debug: debug,
        error: error,
        fatal: fatal,
        getDate: getDate,
        info: info,
        log: log,
        warning: warning,
    };

    if (typeof exports === 'object') {
        module.exports = c9logger;
    } else if (typeof define === 'function' && define.amd) {
        define(function () {
            return b9lib;
        });
    } else {
        this.c9logger = c9logger;
    }

}.call(this, fs));