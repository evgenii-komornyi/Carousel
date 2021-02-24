import React, { Component } from 'react';
import {
    interval,
    autoplay,
    infinite,
    slidesOnPage,
} from './../configs/config';

class CarouselIndicator extends Component {
    render() {
        return (
            <button
                className={`${
                    this.props.index == this.props.activeIndex
                        ? 'dots__dot dots__dot--active'
                        : 'dots__dot'
                }`}
                onClick={this.props.onClick}
            ></button>
        );
    }
}

class CarouselSlide extends Component {
    render() {
        const { index, activeIndex, slide, slidesOnPage } = this.props;

        return (
            <div
                key={index}
                className="slide"
                style={{
                    transform: `translateX(${100 * (index - activeIndex)}%)`,
                    width: `${slidesOnPage > 1 && 100 / slidesOnPage}%`,
                    paddingLeft: `${slidesOnPage > 1 && 20 / slidesOnPage}px`,
                }}
                onTouchStart={this.props.onTouchStart}
                onTouchMove={this.props.onTouchMove}
                onTouchEnd={this.props.onTouchEnd}
                onMouseDown={this.props.onMouseDown}
                onMouseMove={this.props.onMouseMove}
                onMouseUp={this.props.onMouseUp}
                onMouseLeave={this.props.onMouseLeave}
            >
                {slide.image && (
                    <img
                        key={index}
                        index={index}
                        src={slide.image}
                        alt={slide.title ? slide.title : 'Image'}
                        className="img"
                    />
                )}
                {slide.content && (
                    <div
                        className={slide.image ? 'content' : 'article'}
                        style={{
                            width: `${
                                slidesOnPage > 1 && 100 - slidesOnPage + 1
                            }%`,
                        }}
                    >
                        <h1 className="title">{slide.content.title}</h1>
                        <div className="desc">
                            <p>{slide.content.desc}</p>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

class Carousel extends Component {
    constructor(props) {
        super(props);

        this.pause = this.pause.bind(this);
        this.resume = this.resume.bind(this);
        this.loadAutoplay = this.loadAutoplay.bind(this);
        // Touch handlers
        this.touchStartEventHandler = this.touchStartEventHandler.bind(this);
        this.touchMoveEventHandler = this.touchMoveEventHandler.bind(this);
        this.touchEndEventHandler = this.touchEndEventHandler.bind(this);

        this.goToSlide = this.goToSlide.bind(this);
        this.goToPrevSlide = this.goToPrevSlide.bind(this);
        this.goToNextSlide = this.goToNextSlide.bind(this);

        this.state = {
            activeIndex: 0,

            interval: interval,
            autoplay: autoplay,
            infinite: infinite,
            slidesOnPage: slidesOnPage,
            paused: false,

            touchStart: 0,
            touchEnd: 0,
        };
    }

    componentDidMount() {
        this.loadAutoplay();
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    loadAutoplay = () => {
        this.timer = setInterval(() => {
            if (this.state.autoplay && !this.state.paused) this.goToNextSlide();
        }, this.state.interval * 1000);
    };

    pause = () => {
        this.setState({ paused: true });
    };

    resume = () => {
        this.setState({ paused: false });
    };

    touchStartEventHandler = e => {
        this.pause();
        clearInterval(this.timer);

        this.setState({
            touchStart: e.targetTouches[0].clientX,
        });
    };

    touchMoveEventHandler = e => {
        this.setState({
            touchEnd: e.targetTouches[0].clientX,
        });
    };

    touchEndEventHandler = () => {
        const { touchStart, touchEnd } = this.state;

        if (touchStart - touchEnd < -75) this.goToPrevSlide();

        if (touchStart - touchEnd > 75) this.goToNextSlide();

        this.resume();
        this.loadAutoplay();
    };

    goToSlide = index => {
        this.setState({
            activeIndex: index,
        });
    };

    goToPrevSlide = () => {
        let index = this.state.activeIndex;
        const { slides } = this.props;
        const slidesLength = slides.length;

        if (index > 0 || this.state.infinite) {
            if (index < 1) {
                index = slidesLength;
            }
            --index;
            this.setState({
                activeIndex: index,
            });
        }
    };

    goToNextSlide = () => {
        let index = this.state.activeIndex;
        const { slides } = this.props;
        const slidesLength = slides.length - 1;

        if (index < slidesLength || this.state.infinite) {
            if (index === slidesLength) {
                index = -1;
            }

            ++index;
            this.setState({
                activeIndex: index,
            });
        }
    };

    render() {
        const { infinite, activeIndex, slidesOnPage } = this.state;

        return (
            <div
                className="slider"
                onMouseEnter={this.pause}
                onMouseLeave={this.resume}
            >
                {this.props.slides &&
                    this.props.slides.map((slide, index) => (
                        <CarouselSlide
                            key={index}
                            index={index}
                            activeIndex={activeIndex}
                            slidesOnPage={slidesOnPage}
                            slide={slide}
                            onTouchStart={e => this.touchStartEventHandler(e)}
                            onTouchMove={e => this.touchMoveEventHandler(e)}
                            onTouchEnd={this.touchEndEventHandler}
                        />
                    ))}
                <button
                    className={`slider__btn slider__btn--left ${
                        this.props.slides.length !== slidesOnPage &&
                        (infinite || activeIndex !== 0)
                            ? ''
                            : 'hidden'
                    }`}
                    onClick={() => this.goToPrevSlide()}
                >
                    &larr;
                </button>
                <button
                    className={`slider__btn slider__btn--right ${
                        this.props.slides.length !== slidesOnPage &&
                        (infinite || activeIndex < this.props.slides.length - 1)
                            ? ''
                            : 'hidden'
                    }`}
                    onClick={() => this.goToNextSlide()}
                >
                    &rarr;
                </button>
                <div className="dots">
                    {this.props.slides &&
                        this.props.slides.map((_, index) => (
                            <CarouselIndicator
                                key={index}
                                index={index}
                                activeIndex={this.state.activeIndex}
                                slidesOnPage={slidesOnPage}
                                isActive={this.state.activeIndex == index}
                                onClick={() => this.goToSlide(index)}
                            />
                        ))}
                </div>
            </div>
        );
    }
}

export default Carousel;
