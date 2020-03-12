<template>
  <div>
    <desktop :panels='panels' :position="position" :active='active' v-if="!mobile"/>
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
    }
  },
  data() {
    return {
      panels: [
        { progress: 0, title: 'Adwokat w Płocku', subtitle: 'Kancelaria Adwokacka Barbara Semeniuk - Płock i okolice', img: "url('/images/img1.jpeg')", text: 'Wizyta na stronie mojej kancelarii wskazuje,że potrzebujecie Państwo rozwiązania problemu, który wymaga pomocy prawnika.Poniżej przedstawiam informacje dotyczące mojego doświadczenia zawodowego i wykształcenia,które mam nadzieję przekonają Państwa do skorzystania z usług kancelarii.' },
        { progress: 0, title: 'Doświadczenie zawodowe', subtitle: 'Od ukończenia studiów w 1998 roku aktywnie działam w zawodzie i dalej się rozwijam.', img: "url('/images/img2.jpeg')", options: [
          { text: 'Studia prawnicze ukończone z wynikiem bardzo dobrym.' },
          { text: 'Ukończona aplikacja sądowa i zdany egzamin sędziowski.' },
          { text: 'Trzy lata pracy w sądzie.' },
          { text: '10 lat prowadzenia kancelarii jako adwokat.' },
          { text: '6 lat w obsłudze prawnej jednostek samorządu terytorialnego.' },
          { text: 'Członek rady nadzorczej.' },
        ]},
        { progress: 0, title: 'Usługi', subtitle: 'Celem kancelari jest świadczenie klientom indywidualnym oraz biznesowym kompleksowej, rzetelnej i skutecznej obsługi oraz pomocy prawnej w podejmowaniu trudnych decyzji.', img: "url('/images/img3.jpeg')", options: [
          { text: 'Udzielanie porad prawnych.' },
          { text: 'Zastępstwo procesowe przed sądami, organami ścigania, organami administracji publicznej.' },
          { text: 'Stała obsługa prawna.' },
          { text: 'Sporządzanie pism procesowych, w tym: pozwów, wniosków, apelacji, zażaleń, skarg i innych.' },
          { text: 'Reprezentacja przed sądem i prokuratorem.' },
          { text: 'Dochodzenie należności od dłużników.' },
        ]},
        { progress: 0, title: 'Adwokat w Płocku', subtitle: 'zakres usług świadczonych przez kancelarię Prawną Barbara Semeniuk w Płocku i okolicach', img: "url('/images/img4.jpeg')", options: [
          { text: 'Prawo Cywilne' },
          { text: 'Prawo Gospodarcze' },
          { text: 'Prawo Administracyjne' },
          { text: 'Prawo Karne' },
          { text: 'Prawo Rodzinne' },
          { text: 'Prawo Spadkowe' },
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
        t: 2.2,
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