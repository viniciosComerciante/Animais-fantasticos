export default function initDropdownMenu(){


}

const dropdownMenus = document.querySelectorAll('[data-dropdown]');

dropdownMenus.forEach((menu)=>{
    ['click', 'touchstart'].forEach((event)=>{
        menu.addEventListener(event, handleClick);
    })
    
})


function handleClick(event){
    event.preventDefault();
    this.classList.add('ativo');

    outsideClick(this, () =>{
        this.classList.remove('ativo');
    });

}

function outsideClick(element, callback){
    const html = document.documentElement;

    html.addEventListener('click', handleOusideClick);


    function handleOusideClick(event){
        
        if(!element.contains(event.target)){
            callback();
        }
        
        
    }
}