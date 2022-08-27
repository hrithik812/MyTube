import React, { Component } from 'react'

class VideoDetail extends Component {
    render() {
        const { description, title, videoId } = this.props;

        return (
            <div className='col-md-8'>
                <div className='embed-responsive embed-responsive-16by9'>

                    <iframe title={videoId} className='embed-responsive-item' src={`https://www.youtube.com/embed/${videoId}`} frameBorder="0" style={{ height: '400px', width: '100%' }} />
                    `
                </div>
                <div className="details" style={{ marginTop: '10px', border: '1px solid #ddd', borderRadius: '4px' }}>
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>

            </div>
        );
    }
}

export
    default VideoDetail;