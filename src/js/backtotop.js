


const btnUp = {
    el: document.querySelector('.back-to-top'),
    show() {

        this.el.classList.remove('back-to-top__hide');
    },
    hide() {

        this.el.classList.add('back-to-top__hide');
    },
    addEventListener() {

        window.addEventListener('scroll', () => {

            const scrollY = window.scrollY || document.documentElement.scrollTop;

            scrollY > 400 ? this.show() : this.hide();
        });

        // document.querySelector('.back-to-top').onclick = () => {

        //     window.scrollTo({
        //         top: 0,
        //         left: 0,
        //         behavior: 'smooth'
        //     });
        // }

        // $(scrollElem).trigger("click", function () {
        //     $('html, body').animate({ scrollTop: 0 }, 600, scrollStyle); return false;
        // });

    }
}
btnUp.addEventListener();



