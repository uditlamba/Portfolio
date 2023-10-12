let typed=new Typed('.typedText',{
    String:['Web Developers...','Apps Developers..'],
    typedSpeed:100,
    backSpeed:50,
    backDelay:1000,
    loop:true,
    
});
function udit(){
    const name="udit";
    let result = name.split('');
    result.forEach(i => {
        console.log(i);
        setTimeout(1000);
    });
    return NaN
}
let moon=document.querySelector('.moon');
let sun=document.querySelector('.sun');

moon.addEventListener('onclick',()=>{
    console.log('nightMode');
    sun.style.display='inline-block'
    moon.style.display='none'
    document.querySelector('body').classList.add('nightMode');
});
sun.addEventListener('click',()=>{
    sun.style.display='none'
    moon.style.display='inline-block'
    document.querySelector('body').classList.remove('nightMode');
});

//Project filter JS...............
let AllTabs=document.querySelectorAll('.tab');
let AllProject=document.querySelectorAll('.project');

const removeActive=()=>AllTabs.forEach(tab=>{
    tab.classList.remove('active')
})

const filterGallery=()=>AllTabs.forEach(tab=>{
    tab.addEventListener('click',(event)=>{
        tab.classList.add('active');

        let filterName=event.target.getAttribute('data-name')

        AllProject.forEach(project=>{
            let projectName=project.target.getAttribute('data-name')
            if(projectName==filterName || filterName=='All'){
                project.style.display='block'
            }else{
                project.style.display='none'
            }
        })
    })
});
window.addEventListener('load',filterGallery())

//..........nav Active........
let phoneMenuA=document.querySelectorAll('a')
let navlinkA=document.querySelectorAll('.nav-link li a');
//removeactive link
const removeNavActive=()=>navlinkA.forEach(link=>{
    link.classList.remove('active');
})
//AddActiveLink
navlinkA.forEach(link=>{
    link.addEventListener('click',()=>{
        removeNavActive();
        link.classList.add('active');
    })

})
//remove MenuActive
const removeMenuActive =()=>phoneMenuA.forEach(menu=>{
    menu.classList.remove('active')
})
//Add MenuActive
phoneMenuA.forEach(menu=>{
    menu.addEventListener('click',()=>{
        removeMenuActive();
        menu.classList.add('active')
    })
})