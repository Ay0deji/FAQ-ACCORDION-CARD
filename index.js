document.querySelectorAll('.accordion-question').forEach( item =>{
    item.addEventListener('click', (event) =>{

        // Add "open" class to accordion-question(parent)
        // This toggles or controls the pseudo-element on the parent
        item.classList.toggle('open');


         // Add "true" to aria expanded in accordion-question(parent)
        // This toggles or control the style on the parent
        const visibility = item.getAttribute("aria-expanded");

        if (visibility === "false"){
        item.setAttribute("aria-expanded", true)
        }else if(visibility === "true"){
        item.setAttribute('aria-expanded', false)
        }


        // Open accordion item
        if (item.classList.contains("open")){

            // set the style of the sibling 
            item.nextElementSibling.style.display = "block";
            let accHeight = item.nextElementSibling.clientHeight;

            
            // after X amount of time, set the height,
            // and return the style back to the default
            setTimeout( () =>{
                item.nextElementSibling.style.height = accHeight + 'px';
                item.nextElementSibling.style.display = "";
            } ,1);
            

            // Remove "collapse", add "collapsing" class 
            item.nextElementSibling.classList = 'accordion-collapse collapsing';




            // After X amount of time, remove "collapsing" class and add " collapse open" class to accordion-collapse (sibling)
            setTimeout( () =>{
                item.nextElementSibling.classList = 'accordion-collapse collapse open';
                item.nextElementSibling.style.height = '';

            } ,300);

        }
        //  Close accordion item
        else{

            // Remove "collapse open" from "accordion-collapse", add "collapsing"
            item.nextElementSibling.classList = 'accordion-collapse collapsing';

            // after X amount of time, set the height to 0,
            setTimeout( () =>{
                item.nextElementSibling.style.height = '0px';
            } ,1);

            // After X amount of time, remove "collapsing class" and add "collapse" class to accordion-collapse (sibling)
            // and return the height back to default
            setTimeout( () =>{
                item.nextElementSibling.classList = 'accordion-collapse collapse';
                item.nextElementSibling.style.height = '';
            } ,300);
        }
       

    })


   
})