import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'

//import factors
import colors from '../factors/colors'

import { BarChart } from "react-native-gifted-charts";

export default function BarChart1({ topic, data, yAxisLabels }) {


    return (
        <View>
            <Text style={styles.chartTopic}>{topic}</Text>
            <BarChart data = {data}
            xAxisLabelTextStyle={{color: colors.sut_grey7d, fontFamily: 'Kanit-Regular'}}
            yAxisLabelTextStyle={{color: colors.sut_grey7d, fontFamily: 'Kanit-Regular'}}
            yAxisLabelTexts={yAxisLabels}
            barBorderTopLeftRadius={5}
            barBorderTopRightRadius={5}
            frontColor={colors.sut_grey7d}
            xAxisThickness={0}
            yAxisThickness={0}
            rulesType="solid"
            style={{ height: 200, width: '100%' }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
      chartTopic: {
        fontFamily: 'Kanit-Medium',
        color: colors.sut_darkblue,
        marginTop: 10,
        marginLeft: 20,
      },
});
