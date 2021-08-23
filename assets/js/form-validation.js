getToDom();

function getToDom() {
    let body = document.getElementsByTagName("body");
    let new_class = document.createAttribute("class");
    new_class.value = "bg-light";
    body[0].setAttributeNode(new_class);

    let div_container = getDiv("container");
    document.getElementsByTagName('body')[0].appendChild(div_container);

    let div_py5 = getDiv("py-5 text-center");
    document.getElementsByTagName('div')[0].appendChild(div_py5);

    let img = document.createElement('img');
    img.setAttribute("class", "d-block mx-auto mb-4");
    img.src = "assets/img/bootstrap-solid.svg";
    img.alt = " ";
    img.width = "72";
    img.height = "72";
    document.getElementsByTagName('div')[1].appendChild(img);

    let h2 = document.createElement("h2");
    let h2_text = document.createTextNode("Checkout form");
    h2.appendChild(h2_text);
    document.getElementsByTagName('div')[1].appendChild(h2);

    let p_sup = document.createElement("p");
    p_sup.setAttribute("class", "lead");
    let p_text = document.createTextNode("Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.");
    p_sup.appendChild(p_text);
    document.getElementsByTagName('div')[1].appendChild(p_sup);

    let div_row = getDiv("row");
    document.getElementsByTagName('div')[0].appendChild(div_row);

    let div_cart = getDiv("col-md-4 order-md-2 mb-4");
    document.getElementsByTagName('div')[2].appendChild(div_cart);

    let h4 = document.createElement("h4");
    h4.setAttribute("class", "d-flex justify-content-between align-items-center mb-3");
    document.getElementsByTagName('div')[3].appendChild(h4);

    let span_cart = getSpan("text-muted", "Your cart");
    document.getElementsByTagName('h4')[0].appendChild(span_cart);

    let span_3 = getSpan("badge badge-secondary badge-pill", "3");
    document.getElementsByTagName('h4')[0].appendChild(span_3);

    let ul_product = document.createElement("ul");
    ul_product.setAttribute("class", "list-group mb-3");
    document.getElementsByTagName('div')[3].appendChild(ul_product);

    getH6Cart(0, "Product name", 4, "$12");

    getH6Cart(1, "Second product", 5, "$8");

    getH6Cart(2, "Third item", 6, "$5");
}

function getDiv(name) {
    let div = document.createElement("div");
    div.setAttribute("class", name);
    return div;
}

function getSpan(classname, text) {
    let span = document.createElement("span");
    let text_span = document.createTextNode(text);
    span.appendChild(text_span);
    span.setAttribute("class", classname);
    return span
}

function getH6Cart(li_n, text, div_n, price){
    let li = document.createElement("li");
    li.setAttribute("class", "list-group-item d-flex justify-content-between lhcondensed");
    document.getElementsByTagName('ul')[0].appendChild(li);

    let div_product = document.createElement("div");
    document.getElementsByTagName('li')[li_n].appendChild(div_product);

    let h6 = document.createElement("h6");
    h6.setAttribute("class", "my-0");
    let h6_text = document.createTextNode(text);
    h6.appendChild(h6_text);
    document.getElementsByTagName('div')[div_n].appendChild(h6);

    let small_prod = document.createElement("small");
    small_prod.setAttribute("class", "text-muted");
    let small_text = document.createTextNode("Brief description");
    small_prod.appendChild(small_text);
    document.getElementsByTagName('div')[div_n].appendChild(small_prod);

    let span = getSpan("text-muted", price);
    document.getElementsByTagName('li')[li_n].appendChild(span);
}