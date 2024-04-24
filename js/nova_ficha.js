function cal_mod_f() {
    var força = parseInt(document.getElementById("atributo_forca").value)
    document.getElementById("modificador_forca").value = Math.floor((força-10)/2)
    document.getElementById("mod_atletismo").value = document.getElementById("modificador_forca").value
    document.getElementById("tt_atletismo").value = document.getElementById("mod_atletismo").value
}

function atletismo() {
    var forca = parseInt(document.getElementById("modificador_forca").value)
    var modificador = parseInt(document.getElementById("mod_atletismo").value)
    var outros = parseInt(document.getElementById("other_atlestismo").value)
    modificador = forca
    document.getElementById("tt_atletismo").value = modificador + outros
}