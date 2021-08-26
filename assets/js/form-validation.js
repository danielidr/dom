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

    getLi ("list-group-item d-flex justify-content-between bg-light", 0);

    let promo_div = getDiv ("text-success");
    document.getElementsByTagName('li')[3].appendChild(promo_div);

    let h6 = document.createElement("h6");
    h6.setAttribute("class", "my-0");
    let h6_text = document.createTextNode("Promo code");
    h6.appendChild(h6_text);
    document.getElementsByTagName('div')[7].appendChild(h6);

    let small_prod = document.createElement("small");
    let small_text = document.createTextNode("EXAMPLECODE");
    small_prod.appendChild(small_text);
    document.getElementsByTagName('div')[7].appendChild(small_prod);

    let span = getSpan("text-success", "-$5");
    document.getElementsByTagName('li')[3].appendChild(span);

    getLi ("list-group-item d-flex justify-content-between", 0);

    let span2 = getSpan("", "Total (USD)");
    document.getElementsByTagName('li')[4].appendChild(span2);

    let strong_total = getStrong("", "$20");
    document.getElementsByTagName('li')[4].appendChild(strong_total);

    let form_promo = getForm ("card p-2");
    document.getElementsByTagName('div')[3].appendChild(form_promo);

    let code_div = getDiv ("input-group");
    document.getElementsByTagName('form')[0].appendChild(code_div);

    let code_input = getInput ("form-control");
    document.getElementsByTagName('div')[8].appendChild(code_input);
    code_input.type = "text";
    code_input.placeholder = "Promo code";

    let button_div = getDiv ("input-group-append");
    document.getElementsByTagName('div')[8].appendChild(button_div);

    let redeem = getButton ("btn btn-secondary", "Redeem");
    document.getElementsByTagName('div')[9].appendChild(redeem);
    redeem.type = "submit";

    let form_div = getDiv ("col-md-8 order-md-1");
    document.getElementsByTagName('div')[2].appendChild(form_div);

    let h4_form = document.createElement("h4");
    let h4_text_form = document.createTextNode("Billing address");
    h4_form.appendChild(h4_text_form);
    h4_form.setAttribute("class", "mb-3");
    document.getElementsByTagName('div')[10].appendChild(h4_form);

    let form_name = getForm ("needs-validation");
    document.getElementsByTagName('div')[10].appendChild(form_name);
    form_name.noValidate = true;

    let div_row_name = getDiv("row");
    document.getElementsByTagName('form')[1].appendChild(div_row_name);

    let div_first = getDiv ("col-md-6 mb-3");
    document.getElementsByTagName('div')[11].appendChild(div_first);

    let label_first = getLabel ("First name", "firstName");
    document.getElementsByTagName('div')[12].appendChild(label_first);

    let input_first = getInput ("form-control");
    document.getElementsByTagName('div')[12].appendChild(input_first);
    input_first.type = "text";
    input_first.placeholder = "";
    input_first.id = "firstName";
    input_first.value = "";
    input_first.required = true;

    let div_valid_name = getDiv("invalid-feedback");
    document.getElementsByTagName('div')[12].appendChild(div_valid_name);
    let valid_name_text = document.createTextNode("Valid first name is required.");
    div_valid_name.appendChild(valid_name_text);

    let div_last = getDiv ("col-md-6 mb-3");
    document.getElementsByTagName('div')[11].appendChild(div_last);
    let label_last = getLabel ("Last name", "lastName");
    document.getElementsByTagName('div')[14].appendChild(label_last);
    let input_last = getInput ("form-control");
    document.getElementsByTagName('div')[14].appendChild(input_last);
    input_first.type = "text";
    input_first.placeholder = "";
    input_first.id = "lastName";
    input_first.value = "";
    input_first.required = true;
    let div_valid_last = getDiv("invalid-feedback");
    document.getElementsByTagName('div')[14].appendChild(div_valid_last);
    let valid_last_text = document.createTextNode("Valid last name is required.");
    div_valid_last.appendChild(valid_last_text);

    let div_username = getDiv ("mb-3");
    document.getElementsByTagName('form')[1].appendChild(div_username);
    let label_username = getLabel ("Username", "username");
    document.getElementsByTagName('div')[16].appendChild(label_username);
    let div_inputg = getDiv ("input-group");
    document.getElementsByTagName('div')[16].appendChild(div_inputg);
    let div_inputgp = getDiv ("input-group-prepend");
    document.getElementsByTagName('div')[17].appendChild(div_inputgp);
    let span_username = getSpan("input-group-text", "@");
    document.getElementsByTagName('div')[18].appendChild(span_username);
    let input_username = getInput ("form-control");
    document.getElementsByTagName('div')[17].appendChild(input_username);
    input_username.type = "text";
    input_username.placeholder = "Username";
    input_username.id = "username";
    input_username.required = true;
    let div_valid_username = getDiv("invalid-feedback");
    document.getElementsByTagName('div')[17].appendChild(div_valid_username);
    let valid_username_text = document.createTextNode("Your username is required.");
    div_valid_username.appendChild(valid_username_text);
    div_valid_username.style = "width: 100%";

    let div_email = getDiv ("mb-3");
    document.getElementsByTagName('form')[1].appendChild(div_email);
    let label_email = getLabel ("Email ", "email");
    document.getElementsByTagName('div')[20].appendChild(label_email);
    let span_email = getSpan("text-muted", "(Optional)");
    document.getElementsByTagName('label')[3].appendChild(span_email);
    let input_email = getInput ("form-control");
    document.getElementsByTagName('div')[20].appendChild(input_email);
    input_email.type = "email";
    input_email.placeholder = "you@example.com";
    input_email.id = "email";
    let div_valid_email = getDiv("invalid-feedback");
    document.getElementsByTagName('div')[20].appendChild(div_valid_email);
    let valid_email_text = document.createTextNode("Please enter a valid email address for shipping updates.");
    div_valid_email.appendChild(valid_email_text);

    let div_address = getDiv ("mb-3");
    document.getElementsByTagName('form')[1].appendChild(div_address);
    let label_address = getLabel ("Address", "address");
    document.getElementsByTagName('div')[22].appendChild(label_address);
    let input_address = getInput ("form-control");
    document.getElementsByTagName('div')[22].appendChild(input_address);
    input_address.type = "text";
    input_address.placeholder = "1234 Main St";
    input_address.id = "address";
    input_address.required = true;
    let div_valid_address = getDiv("invalid-feedback");
    document.getElementsByTagName('div')[22].appendChild(div_valid_address);
    let valid_address_text = document.createTextNode("Please enter your shipping address.");
    div_valid_address.appendChild(valid_address_text);

    let div_address2 = getDiv ("mb-3");
    document.getElementsByTagName('form')[1].appendChild(div_address2);
    let label_address2 = getLabel ("Address 2 ", "address2");
    document.getElementsByTagName('div')[24].appendChild(label_address2);
    let span_address2 = getSpan("text-muted", "(Optional)");
    document.getElementsByTagName('label')[5].appendChild(span_address2);
    let input_address2 = getInput ("form-control");
    document.getElementsByTagName('div')[24].appendChild(input_address2);
    input_address2.type = "text";
    input_address2.placeholder = "Apartment or suite";
    input_address2.id = "address2";

    let div_details = getDiv ("row");
    document.getElementsByTagName('form')[1].appendChild(div_details);
    let div_country = getDiv ("col-md-5 mb-3");
    document.getElementsByTagName('div')[25].appendChild(div_country);
    let label_country = getLabel ("Country", "country");
    document.getElementsByTagName('div')[26].appendChild(label_country);
    let select_country = getSelect ("custom-select d-block w-100", "country", "United States");
    document.getElementsByTagName('div')[26].appendChild(select_country);
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
    return span;
}

function getStrong(classname, text) {
    let strong = document.createElement("strong");
    let text_s = document.createTextNode(text);
    strong.appendChild(text_s);
    strong.setAttribute("class", classname);
    return strong;
}

function getForm(classname) {
    let form = document.createElement("form");
    form.setAttribute("class", classname);
    return form;
}

function getInput (classname) {
    let input = document.createElement("input");
    input.setAttribute("class", classname);
    return input;
}

function getButton(classname, text) {
    let button = document.createElement("button");
    let text_s = document.createTextNode(text);
    button.appendChild(text_s);
    button.setAttribute("class", classname);
    return button;
}

function getLabel (text, p_for) {
    let label = document.createElement("label");
    let text_s = document.createTextNode(text);
    label.appendChild(text_s);
    label.htmlFor = p_for;
    return label;
}

function getSelect (classname, id_s, option) {
    let select = document.createElement("select");
    select.setAttribute("class", classname);
    select.id = id_s;
    select.required = true;

    let chose = document.getElementById(id_s);
    let c = document.createElement("option");
    c.text = "Choose...";
    chose.options.add(c, 0);
    let n = document.createElement("option");
    n.text = option;
    chose.options.add(n, 1);
}

function getLi (classname, n_ul) {
    let li = document.createElement("li");
    li.setAttribute("class", classname);
    document.getElementsByTagName('ul')[n_ul].appendChild(li);
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
