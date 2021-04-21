const injectDeliverables = () => {
    const target = document.getElementById("sectionDeliverablesBody")

    deliverables.forEach((deliverable, index) => {

        // body 
        const body = deliverable.body.join(`</br></br>`)
        // notes
        const notes = deliverable.notes.join(`<br/><br/>`)

        // HTML
        const html = `
        <!-- DELIVERABLE -->
        <div id="deliverable${++index}" class="deliverable" data-maki="scroll-in">

            <!-- RAIL -->
            <div class="rail-top ">
                <h5 class="label">⟶ ${index}. ${deliverable.label}</h5>
                <div class="btn-mark">
                    <h6>+ MARK AS DONE</h6>
                </div>
            </div>

            <!-- BODY -->
            <div class="body cols-8">
                <p>${body}</p>
            </div>
            <aside class="cols-4">
                <p class="small">${notes}</p>
            </aside>

            <!-- FOOTER -->
            <footer class="rail-bottom">
                <h5 class="label">${deliverable.format}</h5>
            </footer>
        </div>
        <!--  -->
        `

        target.appendChild(toFragment(html))
    })
}