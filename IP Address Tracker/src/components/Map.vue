<template>
  <section class="map">
    <div id="map"></div>
  </section>
</template>

<script>
import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

export default {
  name: "Map",
  data() {
    return {
      map: null,
    };
  },
  props: ["coordinate"],
  updated() {
    this.createMap();
  },
  beforeUpdate() {
    if (this.map) {
      this.map.remove();
    }
  },
  beforeUnmount() {
    if (this.map) {
      this.map.remove();
    }
  },
  methods: {
    createMap: function () {
      this.map = Leaflet.map("map").setView(this.coordinate, 13);

      Leaflet.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(this.map);

      this.markerIcon = Leaflet.icon({
        iconUrl: "https://i.ibb.co/PYFv0LZ/icon-location.png",
        iconSize: [40, 48.6],
      });

      this.marker = Leaflet.marker(this.coordinate, {
        icon: this.markerIcon,
      }).addTo(this.map);
    },
  },
};
</script>

<style scoped>
section.map {
  flex-grow: 1;
}
#map {
  z-index: 0;
  height: 100%;
}
</style>