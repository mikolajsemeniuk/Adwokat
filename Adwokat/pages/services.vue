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
            title: "Adwokat Płock. Kancelaria Adwokacka Barbara Semeniuk - Płock i okolice"
        };
    },
    data() {
        return {
            panels: [
                { progress: 0, title: 'Usługi', subtitle: 'Celem kancelari jest świadczenie klientom indywidualnym oraz biznesowym kompleksowej, rzetelnej i skutecznej obsługi oraz pomocy prawnej w podejmowaniu trudnych decyzji.', img: "url('/images/img3.jpeg')", options: [
                    { text: 'Udzielanie porad prawnych.' },
                    { text: 'Zastępstwo procesowe przed sądami, organami ścigania, organami administracji publicznej.' },
                    { text: 'Stała obsługa prawna.' },
                    { text: 'Sporządzanie pism procesowych, w tym: pozwów, wniosków, apelacji, zażaleń, skarg i innych.' },
                    { text: 'Reprezentacja przed sądem i prokuratorem.' },
                    { text: 'Dochodzenie należności od dłużników.' },
                ]},
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