<template>
  <section class="input">
    <h1>IP Address Tracker</h1>
    <form @submit.prevent="submitIP">
      <input
        type="text"
        placeholder="Search for any IP address or domain"
        v-model="ipSearch"
      />
      <button type="submit">
        <IconArrow />
      </button>
    </form>
    <div class="results">
      <div class="result">
        <p class="result__title">ip address</p>
        <p class="result__text">{{ this.ip }}</p>
      </div>
      <div class="result">
        <p class="result__title">location</p>
        <p class="result__text">{{ this.city }}, {{ this.country }}</p>
      </div>
      <div class="result">
        <p class="result__title">timezone</p>
        <p class="result__text">UTC{{ this.timezone }}</p>
      </div>
      <div class="result">
        <p class="result__title">isp</p>
        <p class="result__text">{{ this.isp }}</p>
      </div>
    </div>
  </section>
  <Map :coordinate="coordinate" />
</template>

<script>
import IconArrow from "./components/IconArrow.vue";
import Map from "./components/Map.vue";

export default {
  name: "App",
  components: {
    IconArrow,
    Map,
  },
  data() {
    return {
      marker: null,
      markerIcon: null,
      apiKey: process.env.VUE_APP_API_KEY,
      coordinate: [],
      ip: null,
      city: null,
      country: null,
      timezone: null,
      isp: null,
      ipSearch: null,
    };
  },
  created() {
    this.fetchUserIP();
  },
  methods: {
    fetchUserIP: function () {
      fetch("https://geo.ipify.org/api/v1?apiKey=" + this.apiKey)
        .then((response) => response.json())
        .then((data) => {
          const { ip, location, as } = data;
          this.coordinate = [location.lat, location.lng];
          this.city = location.city;
          this.country = location.country;
          this.timezone = location.timezone;
          this.ip = ip;
          this.isp = as.name;
        });
    },
    submitIP: function () {
      fetch(
        "https://geo.ipify.org/api/v1?apiKey=" +
          this.apiKey +
          "&ipAddress=" +
          this.ipSearch
      )
        .then((response) => response.json())
        .then((data) => {
          const { ip, location, as } = data;
          this.coordinate = [location.lat, location.lng];
          this.city = location.city;
          this.country = location.country;
          this.timezone = location.timezone;
          this.ip = ip;
          this.isp = as.name;
        });
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Rubik", sans-serif;
  display: flex;
  flex-direction: column;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
}
section.input {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: url("./assets/pattern-bg.png");
  background-size: cover;
  position: relative;
}
h1 {
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 2rem;
  font-size: 2rem;
}
form {
  display: flex;
  align-items: center;
  margin-bottom: 5rem;
  width: 40%;
}
input {
  font-size: 18px;
  border: none;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  padding: 1rem 1.5rem;
  width: 100%;
  color: hsl(0, 0%, 17%);
}
input:focus {
  border: none;
  outline: none;
}
button {
  padding: 1.146875rem;
  background-color: hsl(0, 0%, 17%);
  border: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  cursor: pointer;
}
button:hover {
  background-color: hsl(0, 0%, 59%);
}
.results {
  background-color: white;
  padding: 1rem;
  border-radius: 10px;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, 0);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: grid;
  z-index: 1;
  grid-template-columns: repeat(4, minmax(250px, 1fr));
}
.result {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.result__title {
  color: hsl(0, 0%, 59%);
  text-transform: uppercase;
  font-weight: 500;
  font-size: 0.65rem;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
}
.result__text {
  color: hsl(0, 0%, 17%);
  font-size: 1.5rem;
  font-weight: 500;
}
@media screen and (max-width: 768px) {
  form {
    width: 100%;
  }
  .results {
    grid-template-columns: repeat(1, minmax(250px, 1fr));
    top: 70%;
  }
  .result {
    align-items: center;
    text-align: center;
    padding: 0.5rem;
  }
  .result__text {
    font-size: 1.25rem;
  }
}
@media screen and (min-width: 768px) and (max-width: 1200px) {
  form {
    width: 60%;
  }
  .results {
    grid-template-columns: repeat(2, minmax(250px, 1fr));
    top: 70%;
  }
}
@media screen and (min-width: 1200px) {
  .results > *:not(:last-child) {
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }
}
</style>
