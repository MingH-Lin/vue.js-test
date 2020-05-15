<template>
  <div id="app">
    <h1> {{ title }}</h1>
    
    <input type="number" v-model.number="name" value="name">
      <p>Here use v-model {{ name }}</p>
      
      <ul v-for="(item, index) in member" :key="index">
        <li>{{ item.name }} <br /> {{ item.mail}}  </li>
      </ul>

      <h2> {{ selectTitle}}</h2>
      <select v-model="select"> 
        <option v-for="(sel, index) in qry" :key="index"> {{ sel }} </option>
      </select>
      <p>You choose {{ select }}</p>


      <h2>Components test</h2>
      <Card :cardData="cardData" />
      
  </div>
</template>

<script>
import Card from './components/Card'

export default {
  components: {
    Card
  },
  name: 'app',
data() {
  return {

    title:'PLAY Vue.js',

    name:'use v-model ',

    member:[ 
                          {
                            name:'v-for',
                            mail:'aaa@aaa.com'
                          },
                          {
                            name:'v-for2',
                            mail:'bbb@bbb.com'
                          },
                          {
                            name:'v-for3',
                            mail:'ccc@ccc.com'
                          },
  ],

    selectTitle:'select v-for',
    select:'',
    qry:['aaa','bbb','ccc','ddd','eee'],

    cardData:[
      {
        name:'aaa',
        birth:'1999.99.99',
        mail:'aaa@aaa.com'
      },
      {
        name:'bbb',
        birth:'1888.88.88',
        mail:'bbb@bbb.com'
      },
      {
        name:'ccc',
        birth:'1777.77.77',
        mail:'ccc@ccc.com'
      },
      {
        name:'ddd',
        birth:'1666.66.66',
        mail:'ddd@ddd.com'
      },
    ]

  }
}
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
