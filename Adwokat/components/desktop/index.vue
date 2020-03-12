<template>
    <div>
        <navDesktop/>
        <div 
            v-for="(panel, index) in panels" 
            :key="index" 
            :style="[{ top : panel.progress + '%', zIndex : panels.length - index, transition : active.t + 's' }, panel.progress !==  -100 ? { boxShadow: '0px 0px 60px 30px' } : '', index !== 0 ? { filter : 'brightness('+ -panels[index - 1].progress / 100 +')'} : '' ]"
            @wheel='wheel($event, index)'
            @mousedown="mouseDown($event, index)"
            @mouseup="mouseUp($event, index)"
            class="panel"
        >
            <div 
                :style="[ index % 2 !== 0 ? { 'order' : '2' } : {}, { transition: active.t + 's', transitionDelay: active.t / 2 + 's' }]"
                :class="active.animate && index === 0 || index !== 0 ? 'bg' : 'non-bg' "
                class="left"
            >
                <div :style="{ backgroundImage : panel.img }" class="bg"></div>
                <div :style="[panel.progress !== - 100 ? { boxShadow: '0px 0px 150px 20px', transition: active.t + 's' } : { transition: active.t + 's' }]" class="content">
                    <h1>Kancelaria Adwokacka</h1>
                    <div :style="[index !== 0 ? { width: (-panels[index - 1].progress + panels[index - 1].progress / 5) + '%' } : { width: '80%', transitionDelay: active.t * 1.2}, { transition : active.t + active.t / 2 + 's' }]" class="line"></div>
                    <h3>Barbara Semeniuk</h3>
                    <footer>
                        <div class="info">
                            <p>Telefon: <small>508 35 99 33</small></p>
                            <p>e-mail: <small>barbara.semeniuk@wp.pl</small></p>
                            <p>Godziny otwarcia: <small>Pon-Pt 10:00-18:00</small> ( po uprzednim umówieniu się telefonicznie )</p>
                            <p>Adres: <small>ul. J. Kwiatka 29 lok 3. 09-402 Płock</small></p>
                            <p>NIP: <small>7742569710</small></p>
                        </div>
                    </footer>
                </div>
            </div>
            <div class="right">
                <div :style="[ index !== 0 ? { opacity : -panels[index -1].progress / 100, transform : 'translateY(' + (panels[index -1].progress * 3 + 300) + 'px)'} : {}, { transition : active.t + 's' }]" class="box">
                    <h1 :style="{ transition: active.t + 's', transitionDelay: active.t * 0.7 + 's' }" :class="active.animate && index === 0 || index !== 0 ? '' : 'animate' " >{{ panel.title}}</h1>
                    <h3 :style="{ transition: active.t + 's', transitionDelay: active.t + 's' }" :class="active.animate && index === 0 || index !== 0 ? '' : 'animate' " >{{ panel.subtitle }}</h3>
                    <p :style="{ transition: active.t + 's', transitionDelay: active.t * 1.2 + 's' }" :class="active.animate && index === 0 || index !== 0 ? '' : 'animate' " v-if="panel.text">{{ panel.text }}</p>
                    <div :style="{ transition: active.t + 's', transitionDelay: active.t * 1.2 + 's' }" :class="active.animate && index === 0 || index !== 0 ? '' : 'animate' " v-else>
                        <li v-for="(option, index) in panel.options" :key="index">{{option.text }}</li>
                    </div>
                    <div
                        :style="[index !== 0 ? { width : -panels[index - 1].progress + '%', transition : active.t * 1.5 + 's' } : { transition : active.t * 1.5 + 's', transitionDelay: active.t * 1.7 + 's' }]"
                        :class="active.animate && index === 0 || index !== 0 ? '' : 'animate' "
                        class="line"
                    >
                    </div>
                    <strong :style="{ transition: active.t + 's', transitionDelay: active.t * 1.5 + 's' }" :class="active.animate && index === 0 || index !== 0 ? '' : 'animate' ">zapraszam do współpracy</strong>
                    <small :style="{ transition: active.t + 's', transitionDelay: active.t * 1.7 + 's' }" :class="active.animate && index === 0 || index !== 0 ? '' : 'animate' ">Barbara Semeniuk</small>
                </div>
            </div>
            <div v-if="index !== panels.length - 1" :style="{ transition: active.t + 's', transitionDelay: active.t * 1.8 + 's' }" :class="active.animate && index === 0 || index !== 0 ? '' : 'animate' " class="slider">
                <div class="dot"></div>
            </div>
        </div>
    </div>
</template>

<script>
import navDesktop from '@/components/desktop/nav'
export default {
    props: ['panels', 'position', 'active'],
    methods: {
        wheel(e, index) {
            if ( this.position.paused === true ) return
            this.position.paused = true
            if (this.active.i !== index) {
                this.active.i = index
            } 
            if (e.deltaY >= 1) {
                var length = this.panels.length
                if (index !== length - 1) {
                    this.panels[this.active.i].progress = -100
                    this.active.i += 1
                }
            }
            if (e.deltaY <= -1) {
                if (index !== 0) {
                    this.panels[this.active.i - 1].progress = 0
                    this.active.i -= 1
                }
            }
            setTimeout(() => this.position.paused = false, 2220)
        },
        mouseDown(e, index) {
            if (this.position.paused === true ) return
            this.position.paused = true
            if (this.active.i !== index) {
                this.active.i = index
            } 
            this.position.firstPos = e.clientY
            window.addEventListener('mousemove', this.scroll)
            setTimeout(() => this.position.paused = false, 2220)
        },
        scroll(e) {
            this.active.t = 0
            this.position.lastPos = e.clientY
            var sum = (this.position.lastPos * 100) / this.position.firstPos - 100
            if (sum > 0) {
                this.position.next = false
                if (this.active.i !== 0) {
                    this.panels[this.active.i - 1].progress = -100 + sum / 0.5
                    var percent = this.panels[this.active.i -1].progress + 100
                    if (this.panels[this.active.i - 1].progress < -90) {
                        this.position.back = true
                    } else {    
                        this.position.back = false
                    }
                }
            } else {
                this.position.next = true
                var length = this.panels.length
                if (this.active.i !== length - 1) {
                    this.panels[this.active.i].progress = 0 + sum / 0.5
                    if (this.panels[this.active.i].progress > -10) {
                        this.position.back = true
                    } else {    
                        this.position.back = false
                    }
                }
            }
        },
        mouseUp(e, index) {
            window.removeEventListener('mousemove', this.scroll)
            this.active.t = 2.2
            if (this.position.next === true) {
                var length = this.panels.length
                if (this.active.i !== length - 1) {
                    if (this.position.back === false) {
                        setTimeout(() => this.panels[this.active.i].progress = -100, 100)
                    } else {
                        setTimeout(() => this.panels[this.active.i].progress = 0, 100)
                    }
                }
            } else if (this.position.next === false) {
                if (this.active.i !== 0) {
                    if (this.position.back === false) {
                        setTimeout(() => this.panels[this.active.i - 1].progress = 0, 100)
                    } else {
                        setTimeout(() => this.panels[this.active.i - 1].progress = -100, 100)
                    }
                }
            }
        },
    },
    components: {
        navDesktop
    },
    mounted() {
        setTimeout(() => this.active.animate = true, 100)
        setTimeout(() => this.position.paused = false, 4000) 
    }
}
</script>