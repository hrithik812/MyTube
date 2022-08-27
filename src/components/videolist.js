import React, { Component } from 'react'
import { isCompositeComponentWithType } from 'react-dom/test-utils';
import VideoListItem from './video-list-item';
class VideoList extends Component {
    render() {
        const { items, handleSelect } = this.props;
        return (
            <div className='col-md-4'>
                <ul className='list-group col-md-4'>
                    {
                        items.map((item) => {
                            const imgUrl = item.snippet.thumbnails.high.url;
                            const title = item.snippet.title;
                            const videoId = item.id.videoId;
                            const description = item.snippet.description;

                            return (
                                <>
                                    <VideoListItem imgUrl={imgUrl} title={title} videoId={videoId} description={description} handleSelect={handleSelect} />
                                </>
                            )
                        })
                    }

                </ul>
            </div>

        );
    }
}

export
    default VideoList; {/* <VideoListItem src={item.snippet.thumbnails.default.url} title={item.snippet.title} /> */ }
