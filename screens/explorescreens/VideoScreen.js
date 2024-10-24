import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import React,{ useEffect, useState } from 'react';
import axios from 'axios';

// Import components and styles
import colors from '../../factors/colors';
import MenuCard10 from '../../components/MenuCard10';
import images from '../../factors/images';

export default function VideoScreen({ navigation }) {

    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [coverImage, setCoverImage] = useState(images.ARTICLE);

    // Fetch articles from API
    const fetchVideo = async () => {
        try {
            const response = await axios.post('http://192.168.1.42:8000/videoFetch');
            console.log("video Fetched:", response.data);
            if (response.data.status === "Ok") {
                setVideos(response.data.data); 
            } else {
                console.error("Error fetching videos:", response.data.data);
            }
        } catch (error) {
            console.error("Error fetching videos:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchVideo(); 
    }, []);

    if (loading) {
        return <ActivityIndicator size="large" color={colors.sut_darkblue} />;
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.contentContainer}>
                <View style={styles.menuContainer1}>
                    {videos.map(video => (
                        <MenuCard10
                            key={video._id} 
                            text={video.title}
                            desc={video.desc}
                            image={coverImage}
                            onPress={() => navigation.navigate('VideoDetailScreen', { videoId: video._id })}
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
        paddingTop: 20,
        alignItems: 'center',
        marginHorizontal: 10,
        paddingRight: 12,
    },
    menuContainer1: {
        width: '100%',
    },
    menu: {
        
    }
});
