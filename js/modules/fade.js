export function fadeInSlow(ele){
    ele.style.opacity = 0;
    function aparecer() {
        ele.style.opacity =+ ele.style.opacity + 0.01; //velocidad del fade
    if (ele.style.opacity < 1) {
        (window.requestAnimationFrame && requestAnimationFrame(aparecer)) || setTimeout(aparecer, 16)
        };
    }
    aparecer();
}

export function fadeInFast(ele){
    ele.style.opacity = 0;
    function aparecer() {
        ele.style.opacity =+ ele.style.opacity + 0.04; //velocidad del fade
    if (ele.style.opacity < 1) {
        (window.requestAnimationFrame && requestAnimationFrame(aparecer)) || setTimeout(aparecer, 16)
        };
    }
    aparecer();
}