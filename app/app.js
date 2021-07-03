let fas = document.querySelectorAll(".fas")



const validarCaja = (e) => {
    
    let nombreClase = e.target.classList[1]

    switch (nombreClase) {
        case "pregunta_1":
            validarCampo("pregunta__1")
            break
        case "pregunta_2":
            validarCampo("pregunta__2")
            break
        case "pregunta_3":
            validarCampo("pregunta__3")
            break
        case "pregunta_4":
            validarCampo("pregunta__4")
            break
        case "pregunta_5":
            validarCampo("pregunta__5")
            break
    }
}


const validarCampo = (caja) => {
    document.querySelector(`.${caja}`).classList.toggle("pregunta__activa")
}

fas.forEach(iconos => {
    iconos.addEventListener("click", validarCaja)
})



