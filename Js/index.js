
const elements = document.querySelectorAll('.hidden')

const observer = new IntersectionObserver ( (entries) => {
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    })
})


elements.forEach( (element) => observer.observe(element))

const arrow = document.querySelector('.arrow')


function isAtBottom() {
    const scrollY = window.scrollY; 
    const windowHeight = window.innerHeight; 
    const documentHeight = document.documentElement.scrollHeight; 

    
    return scrollY + windowHeight >= documentHeight - 100;
  }

  
  window.addEventListener('scroll', function() {
    if (isAtBottom()) {
      console.log('O cliente chegou ao final da página!');
      arrow.style.opacity = '1';
    }
    else
    {
        arrow.style.opacity = '0';
    }
  });