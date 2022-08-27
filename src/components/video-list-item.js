import React, { Component } from 'react';
class VideoListItem extends Component {
    render() {

        const { description, title, imgUrl, videoId, handleSelect } = this.props
        return (
            <>
                <li className='list-group-item media videolist' onClick={() => handleSelect(videoId, description, title)}>
                    <img src={imgUrl} alt="" className='mr-3' height={202} width={360} />
                    <div className='media-body'>{title}</div>
                </li>
            </>
        );
    }
}

export default VideoListItem;

