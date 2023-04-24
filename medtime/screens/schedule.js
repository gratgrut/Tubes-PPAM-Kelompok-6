import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../firebase';



export default function ScheduleScreen({user}) {

  const [ history, setHistory ] = useState()

  useEffect(function() {
    async function getData() {
      const q = query(collection(db, "history"), where("email", "==", user.email));
    
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        setHistory(doc.data())
      });
    }
    
    getData()

  },
  [])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {JSON.stringify(history, null, 2)}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red'
  }
});