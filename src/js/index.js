import 'bootstrap';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/common.scss';
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";
import '@fancyapps/ui/dist/fancybox.css';
let $ = require( "jquery" );

import logo from '../assets/images/logo-new.png';
import newSectionImg from '../assets/images/form-reservation-bigcolor.jpg';
import aboutSectionImg from '../assets/images/2razmera_books_preview_1200_c.png';
import slideImg1 from '../assets/images/first-class-stylish-help-chat-1.jpg'; 
import slideImg2 from '../assets/images/first-class-stylish-help-chat-2.jpg';
import slideImg3 from '../assets/images/first-class-stylish-help-chat-3.jpg';
import slideImg4 from '../assets/images/first-class-stylish-help-chat-4.jpg';

$(".logo-img").attr("src", logo);
$(".new-img").attr("src", newSectionImg);
$(".about-img").attr("src", aboutSectionImg);

$(".slide-img--1").attr("src", slideImg1);
$(".slide-img--2").attr("src", slideImg2);
$(".slide-img--3").attr("src", slideImg3);
$(".slide-img--4").attr("src", slideImg4);

$(function() {
    $(".btn-up").bind('click', function(e) {
        e.preventDefault();
        $('body,html').animate({scrollTop: 0}, 400);    
    });
});

/**
 * Toggle .header-scrolled class to #header when page is scrolled
 */
const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
}

let selectHeader = document.querySelector('.header');

if (selectHeader) {
    const headerScrolled = () => {
        if (window.scrollY > 300) {
            selectHeader.classList.add('header-scrolled');
        } else {
            selectHeader.classList.remove('header-scrolled');
        }
    }
    window.addEventListener('load', headerScrolled);
    onscroll(document, headerScrolled);
}