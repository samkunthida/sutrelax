import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { WebView } from 'react-native-webview';

// Import styles and components
import colors from '../../factors/colors';

export default function VideoDetailScreen({ route }) {
    const { videoId } = route.params;
    const [video, setVideo] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchVideoDetails = async () => {
        try {
            const response = await axios.post('http://192.168.1.42:8000/videoDetail', { videoId });
            console.log("Video details fetched:", response.data);
            if (response.data.status === "Ok") {
                setVideo(response.data.data);
            } else {
                console.error("Error fetching video details:", response.data.data);
            }
        } catch (error) {
            console.error("Error fetching video details:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchVideoDetails();
    }, []);

    if (loading) {
        return <ActivityIndicator size="large" color={colors.sut_darkblue} />;
    }

    return (
        <View style={styles.container}>
            {video ? (
                <View style={styles.content}>
                    <WebView
    style={styles.video}
    source={{ uri: `https://www.youtube.com/embed/${video.youtubeURL}` }}
    javaScriptEnabled={true}
    domStorageEnabled={true}
    onError={(syntheticEvent) => {
        const { nativeEvent } = syntheticEvent;
        console.error('WebView error: ', nativeEvent);
    }}
/>
                    <Text style={styles.title}>{video.title}</Text>
                    <Text style={styles.desc}>{video.desc}</Text>
                </View>
            ) : (
                <Text style={styles.errorText}>Error loading video details</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.sut_white,
        padding: 20,
    },
    content: {
        alignItems: 'center',
    },
    video: {
        height: 230,
        width: '100%',
        backgroundColor: colors.sut_gray,
    },
    title: {
        fontSize: 18,
        fontFamily: 'Kanit-Medium',
        color: colors.sut_darkblue,
        marginTop: 15,
    },
    desc: {
        fontSize: 14,
        fontFamily: 'Kanit-Regular',
        color: colors.sut_darkgray,
        marginTop: 10,
        textAlign: 'center',
    },
    errorText: {
        color: colors.sut_red,
        fontSize: 16,
        textAlign: 'center',
    },
});
