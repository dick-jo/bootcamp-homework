const objectives = [
    "Creating and iterating on responsive components that look great on desktop <i>and</i> mobile",
    "Wireframing a homepage and navigation system for both mobile and desktop",
    "Implementing navigation into a clickable prototype",
    "Running rapid-fire usability tests on your prototypes",
    "Applying visual design to a homepage mockup using a UI style guide that you created"
]

const deliverables = [
    {
        label: "Design Navigation Components (top nav + footer)",
        body: [
            `‣ Work independently to <span class="bold">create</span> and/or <span class="bold">iterate your top nav and footer navigation components</span>`,
            `‣ <span class="bold">Make them responsive</span> by creating both a <span class="bold">desktop</span> and <span class="bold">mobile</span> variant `,
            `‣ <span class="bold">Demonstrate state</span> somewhere in your navigation components, where appropriate, such as with your top nav buttons, dropdowns, etc.`
        ],
        notes: [
            `If you're wondering how your nav should look on mobile, be sure to use reference. Inspect and analyse your favorite websites and take note of common strategies like burger menus`,
            `Managing multi-state components can be a lot of work. Be modest with the scope of your work this week and try not to overload yourselves. Isolate the most important element of your component and focus on that. The best place to start is with your top nav buttons as these are almost always present. What do they look like when the user hovers them? Clicks them? ...maybe they invoke a dropdown?`
        ],
        format: "IMAGES { TOP NAV COMPONENT + FOOTER COMPONENT + HOMEPAGE WIREFRAME }"
    },
    {
        label: "Homepage Responsive Wireframing & Prototyping",
        body: [
            `‣ Work independent to focus specifically to <span class="bold">wireframe a responsive new homepage for your government agency</span>`,
            `‣ Implement your <span class="bold">responsive navigation components</span> into your new homepage design`,
            `‣ <span class="bold">Demonstrate state</span> somewhere in your navigation components, where appropriate, such as with your top nav buttons, dropdowns, etc.`,
            `‣ <span class="bold">Link everything back up</span> to form a <span class="bold">clickable prototype</span>`,
            `<span class="bold">BONUS:</span> Consider creating components for other major players on your homepage - hero header, cards, action buttons, etc.`
        ],
        notes: [
            `The key to a good responsive page design is to change as few things as possible across desktop + mobile. If you want a better idea of how this looks in practice, go to your favorite website and resize the browser until you notice the mobile breakpoint kicking in. You'll notice most of the time, there's one basic change such as collapsing everything into a single column, and this does all the heavy lifting RE: making things responsive.`,
            `Other than that, remember that a good responsive design is cohesive across breakpoints. Desktop and mobile should definitely not look like completely different websites.`,
            `Remember, when linking pages up/prototyping, it's okay to send your nav links to placeholder artboards for now. You will grow out the completeness of your overall prototype over time.`
        ],
        format: "IMAGES { HOMEPAGE WIREFRAME (DESKTOP + MOBILE)}; PROTOTYPE { XD or FIGMA LINK }"
    },
    {
        label: "Rapid-fire Usability Testing",
        body: [
            `‣ Work in pairs to <span class="bold">conduct 4-5 rapid-fire tests of your homepage</span>. These should be microscopic in scope and take as little as five seconds to test basic ergonomics and basic actions like navigating to a key page`,
            `‣ <span class="bold">Iterate your homepage</span> by incorporating any test findings`
        ],
        notes: [
            `These tests should be extremely simple and focus on basic, fundamental usability. Can a user immediately sense that the information they want is available in the header? How long does it take them to find it?`
        ],
        format: "DOCUMENT { TESTING NOTES + FINDINGS }"
    },
    {
        label: "Create & Apply Visual Style",
        body: [
            `‣ <span class="bold>Create a UI style tile</span> based on your governmen agency's existing brand identity, but enhanced to better suit your proposed direction for the project`,
            `‣ <span class="bold>Apply your proposed style to your prototype,</span> starting with your homepage. This will bring your prototype to a <span class="bold">mid to high fidelity</span> standard.`
        ],
        notes: [
            `Once we start applying style, we are usually somewhere between mid and high fidelity. This means we should see as much of your style applied as possible, but there may still be some pages that are just loosely wireframed for now. The important part is your major pages ie homepage have been given a good level of cosmetic attention`,
            `Your new style guide can be conservative in it's approach, or boldly proposing a whole new identity. Whichever way you go, the trick to being a good designing and making a good proposal is justifying everything. If you can build a case for a radical change, you can go ahead and make a radical change.`
        ],
        format: "IMAGES { STYLE TILE + PROTOTYPE SCREENS };"
    }
]