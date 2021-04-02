import { combineReducers } from 'redux';

const songListReducer = () => {
    return [
        {
            title: '君に届くまで',
            artist: 'Little Glee Monster',
            duration: '5:20'
        },
        {
            title: 'たぶん',
            artist: 'Yoasobi',
            duration: '4:18'
        },
        {
            title: 'LEMONADE',
            artist: "I Don't Like Mondays",
            duration: '3:49'
        },
        {
            title: '明日の空へ',
            artist: 'saji',
            duration: '2:29'
        }
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === "SELECT_SONG") {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({ songList: songListReducer, selectedSong: selectedSongReducer });