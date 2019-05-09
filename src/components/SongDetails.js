import React from "react";
import { connect } from "react-redux";

const SongDetails = ({ song }) => {
  if (!song) {
    return <div>Select song</div>;
  }
  return (
    <div>
      <h1>{song.title}</h1>
      <p>{song.duration}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetails);
