// create vue app
const app = Vue.createApp({
  //data, functions
  // template: "<h2>I am the template</h2>"
  data () {
    return ({
      showBooks: "true",
      books: [
        { title: "Little Big Town", author: "Donald Kim"},
        { title: "Service Road", author: "NLEX Guy"},
        { title: "Big Bike is Cool", author: "Jay Kamote"},
      ],
      age: "23",
      x: "0",
      y: "0",
      eventType: ""
    })
  },
  methods: {
    changeBookTitle() {
      this.title = 'Little Old Man'
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    },
    handleEvent(e) {
      console.log(e, e.type)
      this.eventType = e.type;
    },
    handleMousemove(e) {
      console.log(e)
      this.x = e.offsetX
      this.y = e.offsetY
      this.eventType = e.type;
    }
  },
})

// mount the app to an element in the DOM
app.mount('#app') //mounts to an element with an id of 'app'
