/**
 * Created by Z on 2017/12/12.
 */
import React,{Component} from 'react';
import './nav.scss'
class Nav extends Component {
  render() {
    return (
      <ul className="home_nav">
        <li >
          <span className="text active">推荐音乐</span>
        </li>
        <li>
          <span className="text">热门歌手</span>
        </li>
        <li>
          <span className="text">排行榜</span>
        </li>
      </ul>
    )
  }
}

export default Nav