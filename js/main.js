let app = new Vue({
    // options object
    el: '#app',
    data: {
        title: "John Doe Portfolio",
        titleHTLM : "John Doe <span class='badge'>Portfolio</span>",
        projects: [
            {title: "portolio", desc: "Lorem ipum"},
            {title: "twitter clone", desc: "Lorem ipum"}
        ]
    }
});