import React from 'react';
import { connect } from 'react-redux';
import { images as imagesList } from './imagesBuilder';
import { loadImages } from '../actions';
import Image from './image';
import { InView } from 'react-intersection-observer'

class Images extends React.Component {
	constructor() {
		super();
		this.state = {

		}
	}
	loadImages = () => {
		const { loadImages, isLoadImages } = this.props;
		loadImages(isLoadImages);
	}
	render() {
		const { isLoadImages } = this.props;
		return (
			<div className="App-content">
				<button className="btn-submit" onClick={this.loadImages}>{isLoadImages ? 'Hide Images' : 'Load Images'}</button>
				{isLoadImages &&
					<ul className="img-list">
						{imagesList.map((image, index) => (
							<li key={index} className="img-item">
								<InView triggerOnce >
									{({ ref, inView }) => (
										<div ref={ref}   >
											{inView &&
												<Image src={process.env.PUBLIC_URL + image} alt={image} />
											}
										</div>
									)}
								</InView>
							</li>
						))}
					</ul>
				}
			</div>
		)
	}

}

const mapStateToProps = (state) => {
	return {
		isLoadImages: state.ImagesReducer.isLoadImages
	}
}
const mapDispatchToProps = {
	loadImages
}

export default connect(mapStateToProps, mapDispatchToProps)(Images)
