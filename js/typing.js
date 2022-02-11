class Typing {
    constructor(key) {
        this.el = document.querySelector(key.el)
        this.interval = key.interval || 500
        this.delay = key.delay == undefined ? 1000 : key.delay
        this.text = this.el.innerHTML.trim()
        this.el.innerHTML = ''
        setTimeout(() => {
            this.write()
        }, this.delay);
    }
    write(i = 0) {
        this.el.innerHTML += this.text[i]
        i++
        if (i < this.text.length) {
            setTimeout(() => {
                this.write(i)
            }, this.interval);
        }
       
    }
}

new Typing({
    el: '.header__content h1',
    interval: 300,
    delay: 1000
})
new Typing({
    el: '.header__content p',
    interval: 100,
    delay: 300
})
new Typing({
    el: '.info__scroll-desc',
    interval: 100,
    delay: 0
})