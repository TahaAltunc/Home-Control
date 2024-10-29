import React from 'react';
import { Text, SafeAreaView, StyleSheet, View, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.content}>
        <View style={styles.myBtn}>
          <Image source={require('./assets/Rectangle-3.svg')} style={styles.myImg} />
          <Text style={styles.myLabel}>Bedroom</Text>
          <Image source={require('./assets/Vector 3.png')} style={styles.myArrow} />
        </View>
        <Image source={require('./assets/fan.png')} style={styles.fanImage} />
        <Text style={styles.textWarning}>Black Ceiling Fan</Text>

        <View style={styles.myTengle}>
          <Image source={require('./assets/Rectangle-2.png')} style={styles.tengleImg} />
          <Image source={require('./assets/wind2.png')} style={styles.tengleIcon1} />
          <Text style={styles.tengleText}>20</Text>
          <Image source={require('./assets/wind2.png')} style={styles.tengleIcon2} />
          <Image source={require('./assets/wind2.png')} style={styles.tengleIcon3} />
          <Image source={require('./assets/wind2.png')} style={styles.tengleIcon4} />
        </View>

        <View style={styles.myTengle2}>
          <Text style={[styles.textWarning, styles.low]}>low</Text>
          <Image source={require('./assets/group_7.png')} style={styles.tengleImg2} />
          <Text style={[styles.textWarning, styles.high]}>high</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'linear-gradient(180deg, rgba(248, 140, 140, 0.61) 0%, #000000 99.98%, #514E4E 99.99%, rgba(0, 0, 0, 0) 100%)',
    justifyContent: 'center',
  },
  content: {
    width: 410,
    padding: 10,
    marginHorizontal: 'auto',
  },
  myBtn: {
    width: '50%',
    position: 'relative',
    alignSelf: 'center',
  },
  myImg: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  myLabel: {
    position: 'absolute',
    top: 20,
    right: 80,
    fontSize: 19,
    fontFamily: 'Lucida Sans',
  },
  myArrow: {
    position: 'absolute',
    top: 28,
    right: 50,
  },
  fanImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    alignSelf: 'center',
  },
  textWarning: {
    color: '#FDA43C',
    fontFamily: 'Lucida Sans',
    textAlign: 'center',
  },
  myTengle: {
    position: 'relative',
    height: 30,
    width: '50%',
    marginTop: 50,
    alignSelf: 'center',
  },
  tengleImg: {
    position: 'absolute',
    top: '82%',
    left: '17%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
  },
  tengleIcon1: {
    position: 'absolute',
    top: 5,
    left: 10,
  },
  tengleText: {
    color: '#FDA43C',
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    top: 5,
    left: '50%',
    transform: [{ translateX: -10 }],
  },
  tengleIcon2: {
    position: 'absolute',
    top: -2,
    right: 10,
  },
  tengleIcon3: {
    position: 'absolute',
    top: 5,
    right: 10,
  },
  tengleIcon4: {
    position: 'absolute',
    top: 11,
    right: 10,
  },
  myTengle2: {
    position: 'relative',
    height: 100,
    width: '50%',
    marginTop: 50,
    alignSelf: 'center',
  },
  tengleImg2: {
    width: 200,
    height: undefined,
    aspectRatio: 1,
    alignSelf: 'center',
  },
  low: {
    position: 'absolute',
    left: -40,
    top: 100,
  },
  high: {
    position: 'absolute',
    right: -40,
    top: 100,
  },
});
