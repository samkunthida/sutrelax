import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Import components and styles
import colors from '../../factors/colors';
import ImageCard from '../../components/ImageCard';
import images from '../../factors/images';
import articleImage from '../../assets/images/ArticleCardImage.png';

export default function ArticleScreen({ navigation }) {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [coverImage, setCoverImage] = useState(images.ARTICLE);

    // Fetch articles from API
    const fetchArticles = async () => {
        try {
            const response = await axios.post('http://192.168.1.42:8000/articleFetch');
            console.log("Articles fetched:", response.data);
            if (response.data.status === "Ok") {
                setArticles(response.data.data);  // Store articles in state
            } else {
                console.error("Error fetching articles:", response.data.data);
            }
        } catch (error) {
            console.error("Error fetching articles:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchArticles();  // Call the API to fetch articles on component mount
    }, []);

    if (loading) {
        return <ActivityIndicator size="large" color={colors.sut_darkblue} />;
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.contentContainer}>
                <View style={styles.menuContainer1}>
                    {articles.map(article => (
                        <ImageCard
                            key={article._id} 
                            text={article.title}
                            image={coverImage}
                            onPress={() => navigation.navigate('ArticleDetailScreen', { articleId: article._id })}
                            style={styles.menu}
                        />
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.sut_white,
    },
    contentContainer: {
        width: '100%',
        paddingTop: 40,
        alignItems: 'center',
        marginHorizontal: 20,
    },
    menuContainer1: {
        flexDirection: 'row',
        flexWrap: 'wrap',  // Allows wrapping of cards
        marginRight: 5,  // Adds space between cards
    },
    menu: {
        
    }
});
