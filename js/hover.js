class Catch {
    constructor(el) {
        this.runner = document.querySelector(el.runner)
        function rndm(min, max) {
            const rand = min + Math.random() * (max - min + 1)
            return Math.floor(rand)
        }




        this.runner.addEventListener('mouseover', () => {
            this.runner.style = `position: absolute;
                             top: ${rndm(0, 90)}%;
                             left: ${rndm(0, 90)}%`
        })
    }
}




new Catch({
    runner: '.header__content'
})
// const runner = document.querySelector('.header__content')