"use strict";function FORMrequest(e,n,t){var a=new XMLHttpRequest;a.onreadystatechange=function(){4===a.readyState&&t(JSON.parse(a.responseText))},a.open("POST",e,!0),a.send(n)}document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll(".sidenav");M.Sidenav.init(e,{edge:"right",draggable:!0})});var contact_form=function(e){var n=new FormData(e),t=null;t=n.has("phone")?"\n        <html>\n            <body>\n                <h1>Afspraak Formulier</h1>\n                <p>\n                    Beste Bart,<br />\n                    Je hebt een afspraak verzoek gekregen.\n                </p>\n                <p>\n                    Naam: <b>".concat(n.get("name"),'</b><br />\n                    Email: <b><a href="mailto:').concat(n.get("email"),'">').concat(n.get("email"),'</a></b><br />\n                    Telefoonnummer: <b><a href="tel:').concat(n.get("phone"),'">').concat(n.get("phone"),'</a></b><br />\n                    Adres: <b><a href="https://www.google.com/maps/dir/?api=1&travelmode=driving&destination=').concat(n.get("adress"),'">').concat(n.get("adress"),"</a></b><br />\n                    Bericht: <b>").concat(n.get("description"),"</b>\n                </p>\n            </body>\n        </html>\n    "):"\n        <html>\n            <body>\n                <h1>Contact Formulier</h1>\n                <p>\n                    Beste Bart,<br />\n                    Je hebt een bericht gekregen.\n                </p>\n                <p>\n                    Naam: <b>".concat(n.get("name"),'</b><br />\n                    Email: <b><a href="mailto:').concat(n.get("email"),'">').concat(n.get("email"),"</a></b><br />\n                    Bericht: <b>").concat(n.get("message"),"</b>\n                </p>\n            </body>\n        </html>\n    "),n.append("subject","Formulier || Website"),n.append("body",t),FORMrequest("/mail.php",n,function(e){console.log(e),e.success?(M.toast({html:"Uw bericht is verstuurd!"}),document.querySelector("#form").reset()):M.toast({html:"Oeps, er ging iets mis!"})})};