import { getIFrameUrl } from "./main_script.js";

//MER
getIFrameUrl('https://gist.githubusercontent.com/DavidPedrazaG/497a93c99b8dbaa436a35cb7afa8f08c/raw/60c5ca8176b742392b92d16523366035e9b522eb/mer.drawio.xml', 'mer.drawio.xml');

document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("btn-descargar").onclick = () => {
      const contenido = document.getElementById("codigoSQL").innerText;
      const blob = new Blob([contenido], { type: "text/sql" });
      const enlace = document.createElement("a");
      enlace.href = URL.createObjectURL(blob);
      enlace.download = "futbol_admin.sql";
      enlace.click();
    };

    document.getElementById("btn-copiar").onclick = () => {
      const codigo = document.getElementById("codigoSQL").innerText;
      navigator.clipboard.writeText(codigo)
        .then(() => alert("¡Código copiado al portapapeles!"))
        .catch(() => alert("Ups... no se pudo copiar."));
    };

});