import { View, Text, StyleSheet, Image, Dimensions, TextInput, ActivityIndicator, ScrollView} from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react';

//import factors
import colors from '../../factors/colors';

//import dependencies
import axios from 'axios';
import Markdown from 'react-native-markdown-display';

const ArticleDetailScreen = ({ route }) => {
    const { articleId } = route.params;
    const [article, setArticle] = useState({});
    const [loading, setLoading] = useState(true);

    const markdownStyles = {
        body: {
          fontFamily: 'Kanit-Regular',
          fontSize: 16,
          lineHeight: 24,
          color: colors.sut_darkblue,  // สีของข้อความ
        },
        heading1: {
          fontFamily: 'Kanit-Medium',
          fontSize: 22,
          color: colors.sut_darkblue,
        },
        strong: {
            fontFamily: 'Kanit-Medium',
            fontWeight: 'bold',
            color: colors.sut_darkblue,
          },
        bold: {
            fontFamily: 'Kanit-Medium',
            fontWeight: 'bold',
            color: colors.sut_darkblue,
        },
        italic: {
            fontFamily: 'Kanit-Regular',
        },
      };

    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        const options = {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        };
        return date.toLocaleDateString('th-TH', options);
    };

    const fetchArticleDetails = async () => {
        try {
            const response = await axios.post('http://192.168.1.42:8000/articleDetail', { articleId });
            console.log("Article details fetched:", response.data);
            if (response.data.status === "Ok") {
                setArticle(response.data.data);  // Store article details in state
            } else {
                console.error("Error fetching article details:", response.data.data);
            }
        } catch (error) {
            console.error("Error fetching article details:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchArticleDetails(); // Fetch article details when the screen loads
    }, []);

    if (loading) {
        return <ActivityIndicator size="large" color={colors.sut_darkblue} />;
    }

    // Screen
    return (
        <ScrollView style={{backgroundColor: colors.sut_white}}>
        <View style={styles.container}>
            <View style={styles.containerTopper}>
            <Text style={styles.topperText}>{article.userID.firstName}</Text>
            <Text style={styles.topperText}>โพสต์เมื่อ {formatDate(article.dateCreated)}</Text>
            </View>
            <Text style={styles.titleText}>{article.title}</Text>
            <Markdown style={markdownStyles}>{article.content}</Markdown>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.sut_white,
        alignItems: 'center',
        alignContent: 'center',
        paddingHorizontal: 20,
      },
        containerTopper: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            paddingVertical: 10,
        },
        topperText: {
            fontFamily: 'Kanit-Regular',
            fontSize: 12,
        },
        titleText: {
            fontFamily: 'Kanit-Medium',
            fontSize: 24,
            alignSelf: 'flex-start',
            color: colors.sut_darkblue,
        },
});

export default ArticleDetailScreen