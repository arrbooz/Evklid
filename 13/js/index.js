window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burger').addEventListener('click', function() {
        document.querySelector('#menu').classList.toggle('is-active')

    })
})

$( function() {
$( "#accordion" ).accordion({
    'icons' : false,
    'heightStyle' : 'content' 
});    
} );