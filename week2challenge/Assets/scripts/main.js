/*var refreshes = parseInt(sessionStorage.getItem('refreshes'), 10) || 0;
$('.counter h2').text('Refreshed ' + refreshes + ' time(s)');

$('button').click(function() {
    sessionStorage.setItem('refreshes', ++refreshes);
    window.location.reload();
})*/
document.addEventListener( 'DOMContentLoaded', () =>{

    document.querySelectorAll('h4.clearg').forEach(h4 => {
        
        h4.addEventListener('click', () => {

            if(h4.nextElementSibling.style.display === 'block'){

                h4.nextElementSibling.style.display = 'none';

            }else{

                let divs = document.querySelectorAll('div.portfoliosection');

                for( let i=0; i < divs.length; i++ ){

                    divs[i].style.display = 'none';

                }

                h4.nextElementSibling.style.display = 'block';
                
            }

        })

    })

});