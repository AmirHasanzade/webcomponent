// Custom elements
class MyComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = "<h1>\
        Hello there!\
        </h1>";
    }
}

customElements.define("web-comp", MyComponent);



// Shadow DOM
const shadowRoot = document.getElementById("shadow").attachShadow({ mode: 'open' });
shadowRoot.innerHTML = "<style>button { background-color: dodgerblue; } </style> \
<button>My button</button> \
<p>Paragraph</p> \
<slot></slot> SHADOW ROOT TEXT  \
";

let p = document.createElement("p");
p.innerHTML = "A new paragraph";
document.getElementById("shadow").shadowRoot.appendChild(p); // if mode: 'open'



// HTML templates
const books = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { title: 'A Farewell to Arms', author: 'Ernest Hemingway' },
    { title: 'Catch 22', author: 'Joseph Heller' }
];

const fragment = document.getElementById("book-template");

books.forEach(book => {
    const instance = document.importNode(fragment.content, true);

    instance.querySelector(".title").innerHTML = book.title;
    instance.querySelector(".author").innerHTML = book.author;

    document.getElementById("books").appendChild(instance);
});