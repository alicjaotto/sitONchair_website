document.addEventListener("DOMContentLoaded", function(){

//znikanie podpisu przy najechaniu na obrazek

    var image1 = document.querySelector(".first_img");
    var image2 = document.querySelector(".second_img");
    var title1 = image1.querySelector(".description");
    var title2 = image2.querySelector(".description");

    // console.log(image1);
    // console.log(image2);
    // console.log(title1);
    // console.log(title2);

    image1.addEventListener("mouseover", function(event){
        title1.style.display="none";
    });

    image1.addEventListener("mouseout", function(event) {
        title1.style.display="block";
    });

    image2.addEventListener("mouseover", function(event){
        title2.style.display="none";
    });
    image2.addEventListener("mouseout", function(event) {
        title2.style.display="block";
    });

    //slider

    var slides = document.querySelectorAll(".slider_ul .slide");
    var currentSlide = 0;
    // var slideInterval = setInterval(nextSlide, 3000);
    var arrows = document.querySelectorAll(".arrows .highlighted"); //tablica
    // console.log(arrows);
    var arrowForward = arrows[1];
    // console.log(arrowForward);
    var arrowBackward = arrows[0];
    // console.log(arrowBackward);
    timeInterval = setInterval(nextSlide, 3000);


    function nextSlide() {
        slides[currentSlide].className = 'slide';
        currentSlide = (currentSlide+1)%slides.length;
        slides[currentSlide].className = 'slide showing';
    }

    nextSlide();

    arrowBackward.addEventListener("click", function(event){
        slides[currentSlide].className = 'slide';
        currentSlide = (currentSlide-1)%slides.length;
        if (currentSlide < 0) {
            currentSlide=0;
        }
        slides[currentSlide].className = 'slide showing';
    });

    arrowForward.addEventListener("click", function(event){
        slides[currentSlide].className = 'slide';
        currentSlide = (currentSlide+1)%slides.length;
        slides[currentSlide].className = 'slide showing';
    });

    //form validator
    var form = document.querySelector("form");
    // console.log(form);
    var errorDiv = document.querySelector(".error-message");
    var successDiv = document.querySelector(".success-message");

    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var textarea = document.getElementById("message");
    var checkbox = document.getElementById("checkbox");
    // console.log(name);
    // console.log(email);
    // console.log(textarea);
    // console.log(checkbox);
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        var formValidation = true;
        var allErrors = [];
        errorDiv.innerText = "";

        if (email.value. indexOf("@") < 0 ) {
            allErrors.push("There should be '@' in your email address!");
            formValidation = false;
        }

        if (name.value.length < 1) {
            allErrors.push("You have to write your name!");
            formValidation = false;
        }

        if (textarea.value.length < 10) {
            allErrors.push("We do not accept empty messages!");
            formValidation = false;
        }

        if(checkbox.checked === false) {
            allErrors.push("You have to agree for terms and conditions!");
            formValidation = false;
        }

        if (formValidation === true) {
            successDiv.innerText = "Your message was succesfully sent!";
            setTimeout(function() {
                form.submit();
            }, 2000);
        } else {
            for (var i=0; i<allErrors.length; i++) {
                var p = document.createElement("p");
                p.innerText = allErrors[i];
                errorDiv.appendChild(p);
            }
        }
    });

    //application
    //dropdown lists
    var models = document.querySelectorAll(".models li"); //array
    console.log(models);
    var colors = document.querySelectorAll(".colors li"); //array
    var fabrics = document.querySelectorAll(".fabrics li"); //array
    console.log(fabrics);

    var listArrows = document.querySelectorAll(".list_arrow"); //array
    console.log(listArrows);
    var listPanels = document.querySelectorAll(".list_panel"); //array
    console.log(listPanels[0]);

    var listLabels = document.querySelectorAll(".list_label");

    var modelsPrice = 0;
    var fabricsPrice = 0;
    var colorsPrice = 0;
    var sum = modelsPrice+fabricsPrice+colorsPrice;
    var total = document.querySelector(".sum strong");
    total.innerText = sum +"$";

    var showModel = document.querySelector("");

    //events in models list
    listArrows[0].addEventListener("click", function(event) {
            listPanels[0].classList.toggle("show");

    });

    for (var i=0; i<models.length; i++) {
        models[i].addEventListener("click", function(event) {
            listLabels[0].innerText=this.innerText;
            showModel.innerText=this.innerText;
            modelsPrice = this.dataset.price;
        });

    }

    //events in colors list
    listArrows[1].addEventListener("click", function(event) {
                    listPanels[1].classList.toggle("show");

    });

    //events in fabrics list
    listArrows[2].addEventListener("click", function(event) {
                listPanels[2].classList.toggle("show");

    });


});
