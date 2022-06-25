<template>
  <div class="job" :class="{ new: job.featured }">
    <img
      :src="getImgUrl(job.logo)"
      :alt="job.company"
      class="job__logo-mobile"
    />
    <div class="job__content">
      <img :src="getImgUrl(job.logo)" :alt="job.company" class="job__logo" />
      <div>
        <p class="job__company">
          {{ job.company }} <span class="job__new" v-if="job.new">NEW!</span>
          <span class="job__featured" v-if="job.featured">FEATURED</span>
        </p>
        <p class="job__position">
          {{ job.position }}
        </p>
        <p class="job__desc">
          {{ job.postedAt }} • {{ job.contract }} • {{ job.location }}
        </p>
      </div>
    </div>
    <hr />
    <div class="job__tags">
      <button class="job__tag" @click="$emit('filter', job.role)">
        {{ job.role }}
      </button>
      <button class="job__tag" @click="$emit('filter', job.level)">
        {{ job.level }}
      </button>
      <template v-for="(language, key) in job.languages" :key="'lang' + key">
        <button class="job__tag" @click="$emit('filter', language)">
          {{ language }}
        </button>
      </template>
      <template v-for="(tool, key) in job.tools" :key="'lang' + key">
        <button class="job__tag" @click="$emit('filter', tool)">
          {{ tool }}
        </button>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "Job",
  props: {
    job: Object,
  },
  methods: {
    getImgUrl(img) {
      return require("../assets/" + img);
    },
  },
};
</script>

<style scoped>
.job {
  display: flex;
  align-items: center;
  width: 70%;
  background: white;
  padding: 2rem;
  margin-bottom: 2rem;
  justify-content: space-between;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  position: relative;
  overflow: hidden;
}
.job.new::after {
  content: "";
  width: 5px;
  height: 100%;
  background: hsl(180, 29%, 50%);
  position: absolute;
  left: 0;
  top: 0;
}
.job__content {
  text-align: left;
  display: flex;
  align-items: center;
  line-height: 2;
}
.job__company {
  color: hsl(180, 29%, 50%);
  font-weight: 700;
  font-size: 14px;
}
.job__logo {
  margin-right: 1rem;
}
.job__position {
  color: hsl(180, 14%, 20%);
  font-weight: 700;
  font-size: 14px;
  transition: 0.3s ease-in-out;
  cursor: pointer;
}
.job__position:hover {
  color: hsl(180, 29%, 50%);
}
.job__desc {
  color: hsl(180, 8%, 52%);
  font-size: 14px;
  font-weight: 500;
}
.job__new {
  color: hsl(180, 52%, 96%);
  background: hsl(180, 29%, 50%);
  padding: 0.25rem 0.5rem;
  margin: 0 0.5rem;
  border-radius: 20px;
  font-size: 12px;
}
.job__featured {
  color: hsl(180, 52%, 96%);
  background: hsl(180, 14%, 20%);
  padding: 0.25rem 0.5rem;
  margin: 0 0.5rem;
  border-radius: 20px;
  font-size: 12px;
}
@media screen and (max-width: 768px) {
  .job {
    flex-direction: column;
    align-items: flex-start;
    overflow: unset;
    margin-bottom: 3rem;
  }
  .job__logo {
    display: none;
  }
  .job__content {
    align-items: flex-start;
  }
  hr {
    width: 100%;
    margin: 1rem 0;
    background: hsl(180, 8%, 52%);
    opacity: 0.3;
  }
  .job__logo-mobile {
    position: absolute;
    top: -25px;
    width: 50px;
    height: 50px;
    left: 30px;
  }
  .job.new::after {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
}
@media screen and (min-width: 769px) {
  hr {
    display: none;
  }
  .job__logo-mobile {
    display: none;
  }
}
</style>