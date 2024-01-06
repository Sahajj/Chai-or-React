function customRender (reactElement, container){
   /* 
    //Creation of the tag using the react element input
    const domElement = document.createElement(reactElement.type);

    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);

    container.appendChild(domElement);
Version 1.0
    */

// Version 2.0
    // this is basically custom react 
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement);

}



// this is how react sees the thing that we return form the App.js / jsx
// after compiling it
const reactElement = {
    // React tries to make a tree out of
    type:'a', //tells what type of element we have.
    props: { 
        // our properties
        /// this is an objet 
        // we can include as many properties in this as we want 
        href: '#',
        target: '_blank'
    },
    children: "Click me to visit google",
}

const mainContainer  = document.getElementById("root");
// Rendering this main container 


// Method to render the react Element

customRender(reactElement, mainContainer);