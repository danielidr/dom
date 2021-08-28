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
    let select_country = getSelect ("custom-select d-block w-100", "country");
    document.getElementsByTagName('div')[26].appendChild(select_country);
    getOptions ("country", "United States");
    let div_valid_country = getDiv("invalid-feedback");
    document.getElementsByTagName('div')[26].appendChild(div_valid_country);
    let valid_address_country = document.createTextNode("Please select a valid country.");
    div_valid_country.appendChild(valid_address_country);

    let div_state = getDiv ("col-md-4 mb-3");
    document.getElementsByTagName('div')[25].appendChild(div_state);
    let label_state = getLabel ("State", "state");
    document.getElementsByTagName('div')[28].appendChild(label_state);
    let select_state = getSelect ("custom-select d-block w-100", "state");
    document.getElementsByTagName('div')[28].appendChild(select_state);
    getOptions ("state", "California");
    let div_valid_state = getDiv("invalid-feedback");
    document.getElementsByTagName('div')[28].appendChild(div_valid_state);
    let valid_address_state = document.createTextNode("Please provide a valid state.");
    div_valid_state.appendChild(valid_address_state);

    let div_zip = getDiv ("col-md-3 mb-3");
    document.getElementsByTagName('div')[25].appendChild(div_zip);
    let label_zip = getLabel ("Zip", "zip");
    document.getElementsByTagName('div')[30].appendChild(label_zip);
    let input_zip = getInput ("form-control");
    document.getElementsByTagName('div')[30].appendChild(input_zip);
    input_zip.type = "text";
    input_zip.placeholder = "";
    input_zip.id = "zip";
    input_zip.required = true;
    let div_valid_zip = getDiv("invalid-feedback");
    document.getElementsByTagName('div')[30].appendChild(div_valid_zip);
    let valid_text_zip = document.createTextNode("Zip code required.");
    div_valid_zip.appendChild(valid_text_zip);

    let hr_shiping = getHr ("mb-4");
    document.getElementsByTagName('form')[1].appendChild(hr_shiping);
    let div_shiping = getDiv ("custom-control custom-checkbox");
    document.getElementsByTagName('form')[1].appendChild(div_shiping);
    let input_shiping = getInput ("custom-control-input");
    document.getElementsByTagName('div')[32].appendChild(input_shiping);
    input_shiping.type = "checkbox";
    input_shiping.id = "same-address";
    let label_shiping = getLabel ("Shipping address is the same as my billing address", "same-address");
    document.getElementsByTagName('div')[32].appendChild(label_shiping);
    label_shiping.setAttribute("class", "custom-control-label");

    let div_save = getDiv ("custom-control custom-checkbox");
    document.getElementsByTagName('form')[1].appendChild(div_save);
    let input_save = getInput ("custom-control-input");
    document.getElementsByTagName('div')[33].appendChild(input_save);
    input_save.type = "checkbox";
    input_save.id = "save-info";
    let label_save = getLabel ("Save this information for next time", "save-info");
    document.getElementsByTagName('div')[33].appendChild(label_save);
    label_save.setAttribute("class", "custom-control-label");

    let hr_payment = getHr ("mb-4");
    document.getElementsByTagName('form')[1].appendChild(hr_payment);
    let h4_payment = document.createElement("h4");
    let h4_text_payment = document.createTextNode("Payment");
    h4_payment.appendChild(h4_text_payment);
    h4_payment.setAttribute("class", "mb-3");
    document.getElementsByTagName('form')[1].appendChild(h4_payment);
    let div_payment = getDiv ("d-block my-3");
    document.getElementsByTagName('form')[1].appendChild(div_payment);

    let div_credit = getDiv ("custom-control custom-radio");
    document.getElementsByTagName('div')[34].appendChild(div_credit);
    let input_credit = getInput ("custom-control-input");
    document.getElementsByTagName('div')[35].appendChild(input_credit);
    input_credit.type = "radio";
    input_credit.id = "credit";
    input_credit.name = "paymentMethod";
    input_credit.defaultChecked = true; 
    input_credit.required = true;
    let label_credit = getLabel ("Credit card", "credit");
    document.getElementsByTagName('div')[35].appendChild(label_credit);
    label_credit.setAttribute("class", "custom-control-label");

    let div_debit = getDiv ("custom-control custom-radio");
    document.getElementsByTagName('div')[34].appendChild(div_debit);
    let input_debit = getInput ("custom-control-input");
    document.getElementsByTagName('div')[36].appendChild(input_debit);
    input_debit.type = "radio";
    input_debit.id = "debit";
    input_debit.name = "paymentMethod";
    input_debit.required = true;
    let label_debit = getLabel ("Debit card", "debit");
    document.getElementsByTagName('div')[36].appendChild(label_debit);
    label_debit.setAttribute("class", "custom-control-label");

    let div_paypal = getDiv ("custom-control custom-radio");
    document.getElementsByTagName('div')[34].appendChild(div_paypal);
    let input_paypal = getInput ("custom-control-input");
    document.getElementsByTagName('div')[37].appendChild(input_paypal);
    input_paypal.type = "radio";
    input_paypal.id = "paypal";
    input_paypal.name = "paymentMethod";
    input_paypal.required = true;
    let label_paypal = getLabel ("PayPal", "paypal");
    document.getElementsByTagName('div')[37].appendChild(label_paypal);
    label_paypal.setAttribute("class", "custom-control-label");

    let div_card = getDiv ("row");
    document.getElementsByTagName('form')[1].appendChild(div_card);
    let div_name = getDiv ("col-md-5 mb-3");
    document.getElementsByTagName('div')[38].appendChild(div_name);
    let label_name = getLabel ("Name on card", "cc-name");
    document.getElementsByTagName('div')[39].appendChild(label_name);
    let input_name = getInput ("form-control");
    document.getElementsByTagName('div')[39].appendChild(input_name);
    input_name.type = "text";
    input_name.placeholder = "";
    input_name.id = "cc-name";
    input_name.required = true;
    let small = document.createElement("small");
    let text_small = document.createTextNode("Full name as displayed on card");
    small.appendChild(text_small);
    small.setAttribute("class", "text-muted");
    document.getElementsByTagName('div')[39].appendChild(small);
    let div_name_card = getDiv("invalid-feedback");
    document.getElementsByTagName('div')[39].appendChild(div_name_card);
    let valid_name = document.createTextNode("Name on card is required");
    div_name_card.appendChild(valid_name);

    let div_number = getDiv ("col-md-5 mb-3");
    document.getElementsByTagName('div')[38].appendChild(div_number);
    let label_number = getLabel ("Credit card number", "cc-number");
    document.getElementsByTagName('div')[41].appendChild(label_number);
    let input_number = getInput ("form-control");
    document.getElementsByTagName('div')[41].appendChild(input_number);
    input_number.type = "text";
    input_number.placeholder = "";
    input_number.id = "cc-number";
    input_number.required = true;
    let div_valid_number= getDiv("invalid-feedback");
    document.getElementsByTagName('div')[41].appendChild(div_valid_number);
    let valid_number = document.createTextNode("Credit card number is required");
    div_valid_number.appendChild(valid_number);

    let div_exp = getDiv ("row");
    document.getElementsByTagName('form')[1].appendChild(div_exp);
    let div_expiration = getDiv ("col-md-3 mb-3");
    document.getElementsByTagName('div')[43].appendChild(div_expiration);
    let label_exp = getLabel ("Expiration", "cc-expiration");
    document.getElementsByTagName('div')[44].appendChild(label_exp);
    let input_exp = getInput ("form-control");
    document.getElementsByTagName('div')[44].appendChild(input_exp);
    input_exp.type = "text";
    input_exp.placeholder = "";
    input_exp.id = "cc-expiration";
    input_exp.required = true;
    let div_valid_exp = getDiv("invalid-feedback");
    document.getElementsByTagName('div')[44].appendChild(div_valid_exp);
    let valid_exp = document.createTextNode("Expiration date required");
    div_valid_exp.appendChild(valid_exp);

    let div_cvv = getDiv ("col-md-3 mb-3");
    document.getElementsByTagName('div')[43].appendChild(div_cvv);
    let label_cvv = getLabel ("CVV", "cc-cvv");
    document.getElementsByTagName('div')[46].appendChild(label_cvv);
    let input_cvv = getInput ("form-control");
    document.getElementsByTagName('div')[46].appendChild(input_cvv);
    input_cvv.type = "text";
    input_cvv.placeholder = "";
    input_cvv.id = "cc-cvv";
    input_cvv.required = true;
    let div_valid_cvv = getDiv("invalid-feedback");
    document.getElementsByTagName('div')[46].appendChild(div_valid_cvv);
    let valid_cvv = document.createTextNode("Security code required");
    div_valid_cvv.appendChild(valid_cvv);

    let hr_button = getHr ("mb-4");
    document.getElementsByTagName('form')[1].appendChild(hr_button);
    let button = document.createElement("button");
    let text_button = document.createTextNode("Continue to checkout");
    button.appendChild(text_button);
    button.setAttribute("class", "btn btn-primary btn-lg btn-block");
    document.getElementsByTagName('form')[1].appendChild(button);

    let footer = document.createElement("footer");
    footer.setAttribute("class", "my-5 pt-5 text-muted text-center text-small");
    document.getElementsByTagName('div')[0].appendChild(footer);
    let p_footer = document.createElement("p");
    p_footer.setAttribute("class", "mb-1");
    let text_p = document.createTextNode("© 2017-2019 Company Name");
    p_footer.appendChild(text_p);
    document.getElementsByTagName('footer')[0].appendChild(p_footer);
    
    let ul_footer = document.createElement("ul");
    ul_footer.setAttribute("class", "list-inline");
    document.getElementsByTagName('footer')[0].appendChild(ul_footer);
    let li_1 = getLi ("list-inline-item", 1);
    getA ("Privacy", 5);
    let li_2 = getLi ("list-inline-item", 1);
    getA ("Terms", 6);
    let li_3 = getLi ("list-inline-item", 1);
    getA ("Terms", 7);
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
    return select;
}

function getOptions (id_s, option) {
    let chose = document.getElementById(id_s);
    let c = document.createElement("option");
    c.text = "Choose...";
    chose.options.add(c, 0);
    c.value = "";
    let n = document.createElement("option");
    n.text = option;
    chose.options.add(n, 1);
}

function getHr(classname) {
    let hr = document.createElement("hr");
    hr.setAttribute("class", classname);
    return hr;
}

function getLi (classname, n_ul) {
    let li = document.createElement("li");
    li.setAttribute("class", classname);
    document.getElementsByTagName('ul')[n_ul].appendChild(li);
}

function getA (text, n_li) {
    let a = document.createElement("a");
    let text_a = document.createTextNode(text);
    a.appendChild(text_a);
    a.href = "#";
    document.getElementsByTagName('li')[n_li].appendChild(a);
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
