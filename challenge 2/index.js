const body=document.querySelector("body");

function handleWindowResize(){
    const middleResizeClass="middleResize";
    const smallResizeClass="smallResize";
    const currentWidth=window.innerWidth;    

    if(currentWidth<700){
        body.classList.remove(middleResizeClass);
        body.classList.add(smallResizeClass);
    }
    else if(currentWidth<1000){
        body.classList.remove(smallResizeClass);
        body.classList.add(middleResizeClass);
    }
    else{
        body.classList.remove(middleResizeClass);
        body.classList.remove(smallResizeClass);
    }
}

window.addEventListener("resize", handleWindowResize);