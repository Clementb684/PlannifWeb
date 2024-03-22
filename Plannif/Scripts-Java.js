document.addEventListener("DOMContentLoaded", function () {

    const img_persona = document.querySelector("#img_persona");
    const img_valo = document.querySelector("#img_valo");
    const img_osu = document.querySelector("#img_osu");
    const img_celeste = document.querySelector("#img_celeste");


    function toggle_visible(e){
         const img_element=e.currentTarget;
         const invisible = img_element.nextElementSibling ;
         invisible.classList.toggle("invisible");

    }

    img_persona.addEventListener("click", toggle_visible);
    img_valo.addEventListener("click", toggle_visible);
    img_osu.addEventListener("click", toggle_visible);
    img_celeste.addEventListener("click", toggle_visible);
});

