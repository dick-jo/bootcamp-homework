const objectives = [
    "Ability to plan, design and write effective case studies",
    "Optionally using frameworks such as Bootstrap to enhance your workflow",
    "Publishing your github repository to a live 'Github Pages' deployment",
]

const deliverables = [
    {
        label: "Setup",
        body: [
            `‣ Start a new <span class="bold">Github repository</span> and <span class="bold">call it UX_UI_HW-20</span>`,
            `‣ If necessary, copy across any of your existing portfolio css (some of it may already be applicable to your case studies pages), or if you want your case study pages to have their own stylesheet, start a fresh one`,
            `‣ Optionally, you may like to use Bootstrap for this - make sure you import the necessary bootstrap CDNs available at getbootstrap.com`,
            `‣ Optionally, publish your Github repo to Github Pages right away, or you can wait until you're done with everything and do this as the final step before submission`
        ],
        notes: [
            `There are two big optional strategies here - Carrying your existing css across from your homepage, and/or using Boostrap instead of 'vanilla' html/css/js`,
            `Both of these are optional and are decisions that should be made based on your personal style. If most of your homepage css is specifically concerned with what's on the homepage, then maybe a fresh start with a new stylesheet will benefit you. If you believe your homepage css will trickle through effectively enough to help you get started on your case studies, then go for it! In the real world, it's not uncommon for a single .css file to handle an entire site's style - it just takes a lot of forward thinking!`,
        ],
        format: "LINKS { GITHUB REPOSITORY + GITHUB PAGES }"
    },
    {
        label: "Code your case study page",
        body: [
            `‣ Pick <span class="bold">one initial case study</span> to develop, and begin translating your initial design into code`,
            `‣ Insert your content such as writing, screenshots and illustrations to fully flesh out your case study`
        ],
        notes: [
            `One case study is enough for this leg of the course. Why? Because if we get a template that works for one case study, it should work for ALL our case studies. Therefore to make more case studies, we will just copy/paste the html and replace the written content and images. Easy!`,
            `If you're using Bootstrap, a great way to start is to make a shortlist of components you want to use from the Bootstrap documentation, and then start slotting them in one by one, and then styling them all one by one`,
            `If you're staying Vanilla, take a similar approach by breaking your design into sections/modules/components, and focussing on just one at a time. Get the header section right, move on to your workflow section. Get that right, then move on to your annotated images section`,
            `Most importantly, if your case study has, say, 12 different sections, you don't want to code 12 unique sections/modules/components, you just want to code maybe 4-6 types, and then reuse them as much as possible. This is what effective coding is all about!`
        ],
        format: "CODE { 1x CASE STUDY PAGE }; IMAGES { SCREENSHOTS OF DESIGN }"
    },
    {
        label: "Connect your homepage and finish",
        body: [
            `‣ Take your homepage index.html from last week and integrate it into your latest repo`,
            `‣ Link your homepage to your case studies, and vice versa `,
            `‣ Put all links + images into a google drive folder for submission`,

        ],
        notes: [
            `No idea how to do this? No worries :) It's super easy, just make sure you show up bright and early on Thursday night so I can show you how`,
        ],
        format: "GOOGLE DRIVE LINK"
    },
]