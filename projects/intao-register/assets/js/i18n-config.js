let lang = 'en';

if (getQueryVariable('lang') && getQueryVariable('lang') in I18n.translations) {
    lang = getQueryVariable('lang');
}

I18n.locale = lang;
I18n.currentLocale();

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return (false);
}