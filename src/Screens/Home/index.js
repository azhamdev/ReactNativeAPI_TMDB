import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ACCESS_TOKEN, BaseUrl, ImagesUrl } from '../../Helpers/ApiAccess'


export default function Home() {
    const [listMovie, setListMovie] = useState([])

    useEffect(() => {
        getLitsMovieNowPlaying();
    }, [])

    const getLitsMovieNowPlaying = async () => {
        try
        {

            const results = await axios.get(`${BaseUrl}movie/now_playing`, { headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } });
            setListMovie(results.data.results)
        } catch (error)
        {
            console.log(error)

        }
    }
    const getLitsMovieTopRated = async () => {
        try
        {

            const results = await axios.get(`${BaseUrl}/movie/top_rated`, { headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } });
            setListMovie(results.data.results)
        } catch (error)
        {
            console.log(error)

        }
    }
    const getLitsMoviePopular = async () => {
        try
        {

            const results = await axios.get(`${BaseUrl}/movie/popular`, { headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } });
            setListMovie(results.data.results)
        } catch (error)
        {
            console.log(error)

        }
    }

    const cardMovie = ({ item }) => {
        return (
            <View style={{ flexDirection: 'row', marginTop: 30 }}>
                <Image source={{ uri: `${ImagesUrl}${item.poster_path}` }} style={Styles.poster} />
                <View style={{ flex: 1, marginLeft: -10, paddingRight: 12 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white', marginBottom: 12, flexWrap: 'wrap' }}>
                        {item.title}
                    </Text>
                    <Text style={{ fontSize: 12, color: 'blue', fontStyle: 'italic', marginBottom: 12 }}>
                        Popularity : {item.popularity}
                    </Text>
                    <Text style={{ marginBottom: 10, fontSize: 14, color: 'white', textAlign: 'justify' }}>
                        {item.overview}
                    </Text>
                    <Text style={{ color: 'white' }}>
                        Rating : {item.vote_average}
                    </Text>
                    <Text style={{ color: 'white' }}>
                        Realese date : {item.release_date}
                    </Text>
                </View>
            </View >
        )
    }

    return (
        <View style={Styles.container}>
            <View style={Styles.content}>
                <TouchableOpacity onPress={getLitsMovieNowPlaying}>
                    <View style={{ width: 120, height: 50, backgroundColor: '#FF0000', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: '#FFFFFF' }}>
                            Now Playing
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={getLitsMovieTopRated}>
                    <View style={{ width: 120, height: 50, backgroundColor: '#FF0000', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: '#FFFFFF' }}>
                            Top Rated
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={getLitsMoviePopular}>
                    <View style={{ width: 120, height: 50, backgroundColor: '#FF0000', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: '#FFFFFF' }}>
                            Popular
                        </Text>
                    </View>
                </TouchableOpacity>

            </View>
            <FlatList data={listMovie} keyExtractor={(item, index) => index} renderItem={cardMovie} />
        </View>
    )

}
const Styles = StyleSheet.create({
    poster: {
        height: 200,
        width: 200,
        resizeMode: 'contain',


    },
    container: {
        paddingTop: 20,
        paddingBottom: 100,
        backgroundColor: 'black'
    },

    content: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})