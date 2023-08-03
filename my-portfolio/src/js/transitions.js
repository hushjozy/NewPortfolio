 window.onload = () => {
     const transition_el = document.querySelector('.transition');
     const anchors = document.querySelector('a');
setTimeout(() => {
    transition_el.classList.remove('is-active');
}, 200);
for (let i = 0; i < anchors.length; i++){
    const anchor = anchors[i];

    anchor.addEventListener('click', e =>{
        e.preventDefault();
        let target = e.target.href;
        console.log(target);
        transition_el.classList.add('is-active');

        setTimeout(() => {
window.location.href = target;
        }, 500);
        });
    }
   
 }
 $(window).scroll(function(){
     var distanceScrolled = $(window).scrollTop();
     var opacityVal = (distanceScrolled*30.0);
    // '-webkit-filter', 'blur('+distanceScrolled/30+'px)');
if(distanceScrolled >= 5){
    $('.bg-top').css ('opacity', 0.5);
    $('.bg-top').css ('backdrop-filter', 'blur('+6+'px)');
}else if(distanceScrolled < 5){
    $('.bg-top').css ('opacity', 1);
    $('.bg-top').css ('backdrop-filter', 'blur('+0+'px)');
}
     console.log(distanceScrolled);
    
     });
     const observer = new IntersectionObserver(entries => {
        entries.forEach(entry =>{
            const square = entry.target.querySelector('.skills-animation');
            // if elem is visible
            if(entry.isIntersecting){
                square.classList.add('card-animation');
                return;
            }
            square.classList.remove('card-animation');
        });
     });
     observer.observe(document.querySelector('.anima-wrap'));