$(document).ready(function () {
   $.get('articulo.json', function (data) {
       alert(data);
   })
});