import React from 'react'
import { View, StyleSheet } from 'react-native';
import Search from './components/Search';
import Output from './components/Output'
import { API, KEY, LIMITS } from './Config/config';

export default function App() {

const [val, setVal] = React.useState('')
const [giphy, setGiphy] = React.useState()
const searchGiphyByName=async()=>{
  let url = API + val + KEY +LIMITS
  const req = await fetch(url)
  const res = await req.json()
  setGiphy(res.data)
}

  return (
    <View style={styles.container, 
    {flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'}}>
      <Search
        search = {searchGiphyByName}
        val = {val}
        setVal = {setVal}
      />
      <Output
        data ={giphy}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
