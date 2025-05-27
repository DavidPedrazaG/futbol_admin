export function getCarouselItems(diagrams, containerId) {
    diagrams.forEach((diagram, index) => {
        const container = document.getElementById(`${containerId}-inner`);
        const indicators = document.getElementById(`${containerId}-indicators`);

        if (!container || !indicators) {
            console.error(`No se encontró el contenedor con id: ${containerId}-inner o los indicadores ${containerId}-indicators`);
            return;
        }


        const indicator = `
            <button type="button" data-bs-target="#${containerId}-carousel" data-bs-slide-to="${index}" ${index === 0 ? 'class="active"' : ''} aria-current="true" aria-label="Slide ${index+1}"></button>
        `
        indicators.innerHTML += indicator;

        const item = `
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
                <iframe id="${diagram.diagram.fileName}"></iframe>
                <div class="carousel-caption d-none d-md-block">
                    <h5>${diagram.title}</h5>
                    <p>${diagram.description}</p>
                </div>
            </div>
        `
        container.innerHTML += item;
        
        getIFrameUrl(diagram.diagram.url, diagram.diagram.fileName);
    });
}

export function getIFrameUrl(url, fileName){    
    const encodedUrl = encodeURIComponent(url);
    const visorUrl = `https://viewer.diagrams.net/?url=${encodedUrl}&zoom=page&edit=_blank&nav=0&layers=1&title=${fileName}&ui=dark`;
    document.getElementById(fileName).src = visorUrl;
}