import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

//import factors
import colors from '../../factors/colors'
import stringTH from '../../factors/strings'
import exploreRoutes from '../../factors/exploreRoutes'

//import components
import MenuCard1 from '../../components/MenuCard1';

//import dependencies

export default function ExploreScreen( {navigation} ) {

  handleArticle = () => {
    navigation.navigate('ArticlesScreen');
  }

  handleVideo = () => {
    //navigation.navigate('VideoScreen');
  }

  return (
    //I made it hardcode for now, will change it later
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.menuContainer1}>
          <MenuCard1 style={styles.menu} icon={"newspaper"} text ="บทความ" iconColor={colors.sut_white} onPress={handleArticle}></MenuCard1>
          <MenuCard1 style={styles.menu} icon={"clapperboard"} iconColor={colors.sut_white} text="วิดีโอ" onPress={handleVideo}></MenuCard1>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.sut_white,
    alignContent: 'center',

  },
  contentContainer: {
    width: '100%',
    paddingTop: 40,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  menuContainer1: {
    width: '100%'
  },
  menu: {
    backgroundColor: colors.sut_darkblue,
  }
});