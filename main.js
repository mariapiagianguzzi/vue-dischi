/* Istruzioni:
Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali. 
Servendoci di Vue JS stampiamo tutto a schermo.
In questo momento non è importante la parte grafica.
Bonus: Creare una select con i seguenti generi: pop, rock, metal e jazz. In base a cosa scegliamo nella select vedremo i corrispondenti cd.
Chiamata: https://flynn.boolean.careers/exercises/api/array/music */

$(document).ready(function () {
  let app = new Vue({
    el: "#app",
    data: {
      listaCd: "", //contenitore dove devo mettere le informazioni
    },
    mounted() {
      axios
        .get("https://flynn.boolean.careers/exercises/api/array/music") //le informazioni le prendo in questo link che è un API ci permette di manipolare le informazioni
        .then((response) => {
          let cd = response.data.response; // è il mio contenitore che contiene responde.data.response più precisamente il percorso dove io voglio andare a prendere le informazioni
          this.listaCd = cd;
        });
    },
  });
});
