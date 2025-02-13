/**
 * APP PWA - Etanol x Gasolina
 * @author Patrick
 * @version 2.0
 */

//==============================================================
// Registro do service worker

// Se o navegador de internet suportar esse recurso
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js')
        .then(() => {
            console.log("Service worker registrado!")
        })
}
//==============================================================

function calcular() {
    // capturar os valores das caixas de input
    let gasolina = document.getElementById('gasolina').value
    let etanol = document.getElementById('etanol').value
    let kmlGasolina = document.getElementById('kmGasolina').value
    let kmlEtanol = document.getElementById('kmEtanol').value

    // Calculo da vantagem
    if (etanol < (kmlEtanol / kmlGasolina) * gasolina) {
        document.getElementById('status').src = "img/etanol.png"
    } else {
        document.getElementById('status').src = "img/gasolina.png"
    }

}