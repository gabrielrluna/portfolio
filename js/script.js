var url = 'https://cdn.waplus.io/waplus-crm/settings/ossembed.js';
var s = document.createElement('script');
s.type = 'text/javascript';
s.async = true;
s.src = url;
var options = {
"enabled": true,
"chatButtonSetting": {
"backgroundColor": "#16BE45",
"ctaText": "Me chame no WhatsApp!",
"borderRadius": "8",
"marginLeft": "20",
"marginBottom": "20",
"marginRight": "20",
"position": "right",
"textColor": "#ffffff",
"phoneNumber": "+5511991541717",
"messageText": "👋🏻Olá! Quero saber mais sobre seus serviços!",
"trackClick": false
}
}
s.onload = function() {
CreateWhatsappBtn(options);
};
var x = document.getElementsByTagName('script')[0];
x.parentNode.insertBefore(s, x);