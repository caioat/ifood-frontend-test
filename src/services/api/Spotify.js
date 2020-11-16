import axios from 'axios';

const SPOTIFY_LOGIN_ENDPOINT = `https://accounts.spotify.com/authorize?client_id=58b105c3bef543ae978f7329e2f4905a&response_type=token&redirect_uri=http://localhost:3000`;
const SPOTIFY_FEATURED_PLAYLISTS_URL = 'https://api.spotify.com/v1/browse/featured-playlists';

const getFeaturedPlaylists = async(token) => {
    console.log(token);
    await axios.get(SPOTIFY_FEATURED_PLAYLISTS_URL, {
        headers: { Authorization: `Bearer ${token}`}
    }).then(response => {
        console.log(response);
    });
}

const Spotify = {
    getFeaturedPlaylists
};

export default Spotify;