function UrlException(message) {
    this.message = message;
    this.name = 'urlException';
}

var baseURL = window.location.hostname; // website.com
var pathURL = window.location.pathname; // '/gallery'
var adminPath = pathURL.includes('administrator');
var acyComponentQueryString = pathURL.includes('option=com_acymailing');

function redirectAdminToACY() {
    if (adminPath && !acyComponentQueryString) {
        window.location.assign(baseURL + '/administrator?option=com_acymailing');
    } else {
        throw new UrlException('This is not an admin url or is already at acy component');
    }
}

try {
    redirectAdminToACY();
} catch (e) {
    console.log(e.name + ":" + e.message);
}
