import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {

    renderSongs = () => {
        return this.props.songList.map(song => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            );
        });
    };

    render() {
        return (
            <div className="ui divided list">{this.renderSongs()}</div>
        );
    }
}

const mapStateToProps = state => {
    return {
        songList: state.songList,
        selectedSong: state.selectedSong
    };
};

export default connect(mapStateToProps, { selectSong })(SongList);