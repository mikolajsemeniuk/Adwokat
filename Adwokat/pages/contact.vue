<template>
    <div>
        <desktop :panels='panels' :position='position' :active='active' v-if="!mobile"/>
        <mobile v-else/>    
    </div>
</template>

<script>
import desktop from '@/components/desktop/index'
import mobile from '@/components/mobile/index'
export default {
    head() {
    return {
      title: "Kontakt - Adwokat Płock. Kancelaria Adwokacka Barbara Semeniuk - Płock i okolice"
    };
  },
    data() {
        return {
            panels: [
                { progress: 0, title: 'Kontakt', subtitle: 'tel: 508 35 99 33, email: barbara.semeniuk@wp.pl', img: "url('/images/img1.jpeg')", text: 'Zapraszam do kancelari w godzinach 10:00-18:00 od poniedziałku do piątku po uprzednim umówieniu się telefonicznie' },
            ],
            position : {
                paused: true,
                firstPos: null,
                lastPos: null,
                next: true,
                back: false,
            },
            active: {
                i: 0,
                t: 1.2,
                animate: false,
            }
        }
    },
    computed: {
        mobile() {
            return this.$store.getters.mobile
        }
    },
    components: {
        desktop, mobile
    }
}
</script>