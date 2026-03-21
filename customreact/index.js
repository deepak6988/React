function customRender(Element,container){
    const domEle = document.createElement(Element.type);
    domEle.innerHTML = Element.children;
    for(let prop in Element.props){
        domEle.setAttribute(prop,Element.props[prop]);
    }
    container.appendChild(domEle);
}

const reactElement = {
    type: 'a',
    props: {
        href : 'https://www.google.com',
        target : '_blank'
    },
    children : 'Click me to visit google'
}

const container = document.querySelector('#root');

customRender(reactElement,container);