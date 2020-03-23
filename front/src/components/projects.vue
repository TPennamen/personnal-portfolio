<template>
  <section class="center project-list">
    <div v-if="!groupChosen" class="project-box">
      <h1>Click on one of these two logos</h1>
    </div>
    <div :style="skilderPosition" v-if="!groupChosen || skilderChosen" class="project-box">
      <button class="group-button" @click="showSkilder">
        <img src="../../public/skilder.png" />
        <p v-if="groupChosen" class="back-button">Back to the list</p>
      </button>
      <div v-if="!groupChosen" class="project-introduction">
        <p>Skilder is an young French start-up. Its aim is to detect soft skills in candidates to remplace resume at hiring.</p>
        <p>My job was to create all applications and automatication they needed. I have used NoSQL databases such as Postgres and MongoDB. I have automated their analysis with Machine Learning using Tensorflow. I have simplified all of these in applications in Node.js and Vue.js.</p>(Click to read more about this)
      </div>
    </div>
    <div :style="digitalLabPosition" v-if="!groupChosen || digitalLabChosen" class="project-box">
      <div v-if="!groupChosen" class="project-introduction">
        <p>Centrale Digital Lab is an new programm in Centrale Lyon School. It offers the opportunity to do interesting projects with compagnies.</p>
        <p>I have practiced my knowledges of Big Data, Web/mobile development and IA. Meanwhile, I have done three projects which mixed Vue.js, Node.js, d3 and lot of Python modules.</p>(Click to read more about this)
      </div>

      <button class="group-button" @click="showDigitalLab">
        <img src="../../public/digital-lab.png" />
        <p v-if="groupChosen" class="back-button">Back to the list</p>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      groupChosen: false,
      skilderChosen: false,
      digitalLabChosen: false
    };
  },
  methods: {
    showSkilder() {
      // if (this.skilderChosen) {
      //   this.skilderChosen = false;
      //   this.groupChosen = false;
      // } else {
      //   this.groupChosen = true;
      //   this.skilderChosen = true;
      // }
    },
    showDigitalLab() {
      // if (this.digitalLabChosen) {
      //   this.digitalLabChosen = false;
      //   this.groupChosen = false;
      // } else {
      //   this.groupChosen = true;
      //   this.digitalLabChosen = true;
      // }
    }
  },
  computed: {
    digitalLabPosition() {
      if (this.digitalLabChosen) {
        return "position:absolute; top:5%; left:50%; transform:translate(-50%,0);";
      }
      return null;
    },
    skilderPosition() {
      if (this.skilderChosen) {
        return "position:absolute; top:5%; left:50%; transform:translate(-50%,0);";
      }
      return null;
    }
  }
};
</script>

<style>
</style>