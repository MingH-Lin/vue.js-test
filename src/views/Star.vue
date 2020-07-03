<template>
  <div id="star">
        <!-- <img src="../img/0.png"> -->
        <!-- <div v-for="n in 10"> -->
        <input type="number" size="2" v-model.number="one" value="one" />
        Count : {{ one }}
        <input type="number" size="2" v-model.number="two" value="two" />
        Count : {{ two }}
        <input type="number" size="2" v-model.number="three" value="three" />
        Count : {{ three }}<br>
        <input type="number" size="2" v-model.number="four" value="four" />
        Count : {{ four }}
        <input type="number" size="2" v-model.number="five" value="five" />
        Count : {{ five }}
        <input type="number" size="2" v-model.number="six" value="six" />
        Count : {{ six }}<br>
        <input type="number" size="2" v-model.number="seven" value="seven" />
        Count : {{ seven }}
        <input type="number" size="2" v-model.number="eight" value="eight" />
        Count : {{ eight }}
        <input type="number" size="2" v-model.number="nine" value="nine" />
        Count : {{ nine }}<br>
        <input type="number" size="2" v-model.number="ten" value="ten" />
        Count : {{ ten }}
        <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: "star",
  data() {
    return {
        one:'0',
        two:'0',
        three:'0',
        four:'0',
        five:'0',
        six:'0',
        seven:'0',
        eight:'0',
        nine:'0',
        ten:'0',
    };
  }
};
</script>


<style scoped>
</style>