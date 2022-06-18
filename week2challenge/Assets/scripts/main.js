/*var refreshes = parseInt(sessionStorage.getItem('refreshes'), 10) || 0;
$('.counter h2').text('Refreshed ' + refreshes + ' time(s)');

$('button').click(function() {
    sessionStorage.setItem('refreshes', ++refreshes);
    window.location.reload();
})*/
document.addEventListener( 'DOMContentLoaded', () =>{

    document.querySelectorAll('h2.clearg').forEach(h2 => {
        
        h2.addEventListener('click', () => {

            if(h2.nextElementSibling.style.display === 'block'){
                h2.nextElementSibling.style.display = 'none';
            }else{
                let divs = document.querySelectorAll('div.portfoliosection');
                for( let i=0; i < divs.length; i++ ){
                    divs[i].style.display = 'none';
                }
                h2.nextElementSibling.style.display = 'block';
            }

        })

    })

});