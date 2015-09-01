Reveal.initialize({
    // Display controls in the bottom right corner
    controls: false,

    // Display a presentation progress bar
    progress: false,

    // Display the page number of the current slide
    slideNumber: false,

    // Push each slide change to the browser history
    history: true,

    // Enable keyboard shortcuts for navigation
    keyboard: true,

    // Enable the slide overview mode
    overview: true,

    // Vertical centering of slides
    center: true,

    // Turns fragments on and off globally
    fragments: true,

    // Flags if we should show a help overlay when the questionmark
    // key is pressed
    help: true,

    // Transition style
    transition: 'default', // none/fade/slide/convex/concave/zoom

    // Transition speed
    transitionSpeed: 'default', // default/fast/slow

    // Transition style for full page slide backgrounds
    backgroundTransition: 'default', // none/fade/slide/convex/concave/zoom

    dependencies: [
        // { src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        // { src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },

        // Syntax highlight for <code> elements
        { src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },

        // Zoom in and out with Alt+click
        { src: 'plugin/zoom-js/zoom.js', async: true },

        // Speaker notes
        { src: 'plugin/notes/notes.js', async: true }
    ],

    zoomKey: 'ctrl'
});