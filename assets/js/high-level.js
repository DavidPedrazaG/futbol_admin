import { getIFrameUrl } from "./main_script.js";

document.addEventListener("DOMContentLoaded", function() {
    //Class Diagram
    getIFrameUrl('https://gist.githubusercontent.com/DavidPedrazaG/949c2784864b202749ffdc095fa21ad2/raw/132172a367792784e6901d7eb1d9fe5e4077ca3b/class.drawio.xml', 'class.drawio.xml');

    //Deploy Diagram
    getIFrameUrl('https://gist.githubusercontent.com/DavidPedrazaG/0bd04d59f07435cf09bcec5644045cf4/raw/1eef2749039501488f1b5551dfac2a8e2a7a85be/deploy.drawio.xml', 'deploy.drawio.xml')
});