<template>
  <section>
    <div class="header"></div>
    <div class="search__bar-container" v-show="filters.length">
      <div class="search__bar">
        <div class="keywords">
          <template v-for="(filter, key) in filters" :key="key">
            <div class="keyword">
              <p>{{ filter }}</p>
              <button @click="filters.splice(key, 1)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-x"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  stroke-width="4"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </template>
        </div>
        <p @click="() => (filters = [])" class="reset">Clear</p>
      </div>
    </div>
    <div class="job__container">
      <template v-for="job in currentJobs" :key="job.id">
        <Job :job="job" @filter="(v) => filtersPush(v)" />
      </template>
    </div>
  </section>
</template>

<script>
import Job from "./components/Job.vue";
import json from "../data.json";

export default {
  name: "App",
  components: {
    Job,
  },
  data() {
    return {
      jobs: json,
      filters: [],
    };
  },
  computed: {
    currentJobs() {
      if (this.filters.length) {
        const results = this.jobs.filter((job) =>
          this.filters.every(
            (filter) =>
              job.tools.indexOf(filter) > -1 ||
              job.languages.indexOf(filter) > -1 ||
              job.role == filter ||
              job.level == filter
          )
        );
        return results;
      } else {
        return this.jobs;
      }
    },
  },
  methods: {
    filtersPush(v) {
      if (this.filters.indexOf(v) === -1) {
        return this.filters.push(v);
      }
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: hsl(180, 52%, 96%);
  font-family: "Spartan", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
section {
  position: relative;
}
.header {
  width: 100%;
  height: 200px;
  background: url("./assets/bg-header-desktop.svg"),
    hsl(180, 29%, 50%) no-repeat center;
  background-size: cover;
}
.job__container {
  padding: 5rem 3rem 2rem 3rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.search__bar-container {
  padding: 0rem 3rem;
  position: absolute;
  left: 50%;
  top: 170px;
  transform: translate(-50%, 0);
  width: 70%;
}
.search__bar {
  padding: 0.3rem 2rem;
  border-radius: 5px;
  height: 50px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}
.job__tags > *:not(:last-child) {
  margin-right: 0.75rem;
}
.job__tag {
  border: none;
  font-family: "Spartan", sans-serif;
  color: hsl(180, 29%, 50%);
  background: hsl(180, 52%, 96%);
  padding: 0.3rem;
  font-size: 12px;
  font-weight: 700;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
}
.job__tag:hover {
  color: white;
  background: hsl(180, 29%, 50%);
}
.reset {
  font-size: 12px;
  color: hsl(180, 29%, 50%);
  font-weight: 700;
  cursor: pointer;
}
.reset:hover {
  text-decoration: underline;
}
.keywords {
  display: flex;
}
.keyword {
  display: flex;
  align-items: center;
  font-size: 12px;
  color: hsl(180, 29%, 50%);
  background: hsl(180, 52%, 96%);
  font-weight: 700;
  margin: 0 0.5rem;
  border-radius: 3px;
}
.keyword p {
  padding: 0 0.5rem;
}
.keyword button {
  color: white;
  background: hsl(180, 29%, 50%);
  border: none;
  outline: none;
  padding: 0.2rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
.keyword button:hover {
  background: hsl(180, 14%, 20%);
}
@media screen and (max-width: 768px) {
  .header {
    background: url("./assets/bg-header-mobile.svg"),
      hsl(180, 29%, 50%) no-repeat center;
    background-size: cover;
  }
  .search__bar-container {
    width: 80%;
  }
  .search__bar {
    padding: 0.3rem 1rem;
  }
  .job__container {
    padding: 5rem 1rem 2rem 1rem;
  }
  .job__tags > *:not(:last-child) {
    margin-bottom: 0.75rem;
    margin-right: 0.75rem;
  }
}
</style>
