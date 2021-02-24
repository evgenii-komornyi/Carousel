import React, { Component } from 'react';
import Carousel from './Carousel.component';

// Data for carousel
const carouselSlidesData = [
    {
        content: {
            title: 'Title 1',
            desc:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quisquam deleniti consectetur animi ipsam provident maxime, beatae rem dolore nemo labore neque, eius nobis id sunt fugit cupiditate ab vero.',
        },
        image: 'https://i.redd.it/z4pfey7g15501.jpg',
    },
    {
        content: {
            title: 'Title 2',
            desc:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quisquam deleniti consectetur animi ipsam provident maxime, beatae rem dolore nemo labore neque, eius nobis id sunt fugit cupiditate ab vero.',
        },
        image: 'https://eskipaper.com/images/universe-3.jpg',
    },
    {
        content: {
            title: 'Title 3',
            desc:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quisquam deleniti consectetur animi ipsam provident maxime, beatae rem dolore nemo labore neque, eius nobis id sunt fugit cupiditate ab vero.',
        },
        image: 'https://wallpapercave.com/wp/jj44bEm.jpg',
    },
    {
        content: {
            title: 'Title 4',
            desc:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quisquam deleniti consectetur animi ipsam provident maxime, beatae rem dolore nemo labore neque, eius nobis id sunt fugit cupiditate ab vero.',
        },
        image:
            'https://www.wallpapertip.com/wmimgs/13-139185_universe-wallpaper-for-desktop.jpg',
    },
];

class App extends Component {
    render() {
        return (
            <>
                <Carousel slides={carouselSlidesData} />
            </>
        );
    }
}

export default App;
