import React from 'react';

class Language extends React.Component {
    render() {
        return (
            <div className='language-item'>
                {/*without props*/}
                {/*
                <div className='language-name'>HTML & CSS</div>
                <img className='language-image' src='https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg' />
                */}

                {/*with props*/}
                <div className='language-name'>{this.props.name}</div>
                <img
                    className='language-image'
                    src={this.props.img}
                />
            </div>
        );
    }
}

export default Language;