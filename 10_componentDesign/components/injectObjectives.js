const injectObjectives = () => {
    const target = document.getElementById("sectionObjectivesBody")

    objectives.forEach((objective, index) => {

        // HTML
        const html = `
            <div id="objective${++index}" class="objective" data-maki="scroll-in">
                <h4>${objective}</h4>
            </div>
        `

        target.appendChild(toFragment(html))
    })
}