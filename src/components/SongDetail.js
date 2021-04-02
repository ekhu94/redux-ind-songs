import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({selectedSong}) => {
    if (!selectedSong) {
        return <h1>Select a Song</h1>
    }
    return (
        <div>
            <h2>{selectedSong.title}</h2>
            <h4>Artist: {selectedSong.artist}</h4>
            <h4>Duration: {selectedSong.duration}</h4>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        selectedSong: state.selectedSong
    };
};

export default connect(mapStateToProps)(SongDetail);