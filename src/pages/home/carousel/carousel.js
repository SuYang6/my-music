/**
 * Created by Z on 2017/12/12.
 */
import React, {Component} from 'react';
import ReactSwipe from 'react-swipe';
import {getBannerData} from '../../../api/home'
import './carousel.scss'
import Loading from 'components/loading/loading'
class Carousel extends Component {
  constructor(props) {
    super(props);
    this.setPointActive = this.setPointActive.bind(this);
    this.state = {
      banners: null,
      index: 0
    }
  }

  componentDidMount() {
    getBannerData()
      .then((res) => {
        if (res.code === 200) {
          this.setState(Object.assign(this.state,{
            banners: res.banners
          }))
          
        }
      });
  }
  setPointActive(index) {
    this.setState({
      index: index
    })
  }

  render() {
    const {banners, index} = this.state;
    const carousel = banners ? banners.map((banners,ind) => {
        return (
          <div key={ind} className="imgWrapper">
            <img src={banners.imageUrl} alt="banner" />
            <span style={{backgroundColor: `${banners.titleColor}`}} className="tag">{banners.typeTitle}</span>
          </div>
        )
      }) : <p>正在加载数据</p>;
    const carouselWrapper = banners ? <ReactSwipe className="carousel" swipeOptions={{
      continuous: true,
      callback: this.setPointActive,
      auto: 3000,
    }}>
      {carousel}
    </ReactSwipe> : '';
    const point = banners ? banners.map((banners, num) => {
        return (
          <li key={num} className={num === index ? 'active' : ''}>

          </li>
        )
      }):'';
    if(!banners) {
      return (
        <Loading/>
      )
    }
    return (
      <div className="carousel-wrapper">

        {carouselWrapper}

        <ul className="point">
          {point}
        </ul>
      </div>
    )
  }
}

export default Carousel