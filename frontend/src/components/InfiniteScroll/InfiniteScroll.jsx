import React from 'react'
import './InfiniteScroll.css'
const InfiniteScroll = () => {
  return (

    <div >
    <div className="wrapper flex gap-5 ">
        <div className="item item1 min-w-32 h-16 relative" style={{"--position":1}}><img  className="w-full h-full object-cover absolute" src="https://www.isdia.org/img/i_image/india.png" alt="india" /></div>
        <div className="item item2 min-w-32 h-16 relative" style={{"--position":2}}><img  className="w-full h-full object-cover absolute" src="https://www.isdia.org/img/i_image/australia.png" alt="australia" /></div>
        <div className="item item3 min-w-32 h-16 relative" style={{"--position":3}}><img  className="w-full h-full object-cover absolute" src="https://www.isdia.org/img/i_image/china.png" alt="china" /></div>
        <div className="item item4 min-w-32 h-16 relative" style={{"--position":4}}><img  className="w-full h-full object-cover absolute" src="https://www.isdia.org/img/i_image/france.png" alt="france" /></div>
        <div className="item item5 min-w-32 h-16 relative" style={{"--position":5}}><img  className="w-full h-full object-cover absolute" src="https://www.isdia.org/img/i_image/ireland.png" alt="ireland" /></div>
        <div className="item item6 min-w-32 h-16 relative" style={{"--position":6}}><img  className="w-full h-full object-cover absolute" src="https://www.isdia.org/img/i_image/korea.png" alt="southkorea" /></div>
        <div className="item item7 min-w-32 h-16 relative" style={{"--position":7}}><img  className="w-full h-full object-cover absolute" src="https://www.isdia.org/img/i_image/malaysia.png" alt="malaysia" /></div>
        <div className="item item8 min-w-32 h-16 relative" style={{"--position":8}}><img  className="w-full h-full object-cover absolute" src="https://www.isdia.org/img/i_image/morocco.png" alt="morocco" /></div>
        <div className="item item9 min-w-32 h-16 relative" style={{"--position":9}}><img  className="w-full h-full object-cover absolute" src="https://www.isdia.org/img/i_image/moldova.png" alt="moldova" /></div>
        <div className="item item10 min-w-32 h-16 relative" style={{"--position":10}}><img className="w-full h-full object-cover absolute"  src="https://www.isdia.org/img/i_image/nigeria.png" alt="nigeria" /></div>
        <div className="item item11 min-w-32 h-16 relative" style={{"--position":11}}><img className="w-full h-full object-cover absolute"  src="https://www.isdia.org/img/i_image/norway.png" alt="norway" /></div>
        <div className="item item12 min-w-32 h-16 relative" style={{"--position":12}}><img className="w-full h-full object-cover absolute"  src="https://www.isdia.org/img/i_image/russia.png" alt="russia" /></div>
        <div className="item item13 min-w-32 h-16 relative" style={{"--position":13}}><img className="w-full h-full object-cover absolute"  src="https://www.isdia.org/img/i_image/saudi-arabia.png" alt="saudia arabia" /></div>
        <div className="item item14 min-w-32 h-16 relative" style={{"--position":14}}><img className="w-full h-full object-cover absolute"  src="https://www.isdia.org/img/i_image/korea.png" alt="korea" /></div>
        <div className="item item15 min-w-32 h-16 relative" style={{"--position":15}}><img className="w-full h-full object-cover absolute"  src="https://www.isdia.org/img/i_image/spain.png" alt="spain" /></div>
        <div className="item item16 min-w-32 h-16 relative" style={{"--position":16}}><img className="w-full h-full object-cover absolute"  src="https://www.isdia.org/img/i_image/taiwan.png" alt="taiwan" /></div>
        <div className="item item17 min-w-32 h-16 relative" style={{"--position":17}}><img className="w-full h-full object-cover absolute"  src="https://www.isdia.org/img/i_image/united-states-america.png" alt="usa" /></div>
        <div className="item item18 min-w-32 h-16 relative" style={{"--position":18}}><img className="w-full h-full object-cover absolute"  src="https://www.isdia.org/img/i_image/vietnam.png" alt="vietnam" /></div>
        <div className="item item19 min-w-32 h-16 relative" style={{"--position":19}}><img className="w-full h-full object-cover absolute"  src="https://www.isdia.org/img/i_image/yemen.png" alt="yemen" /></div>
        <div className="item item20 min-w-32 h-16 relative" style={{"--position":20}}><img className="w-full h-full object-cover absolute"  src="https://www.isdia.org/img/i_image/mauritius.png" alt="mauritius" /></div>
        <div className="item item21 min-w-32 h-16 relative" style={{"--position":21}}><img className="w-full h-full object-cover absolute"  src="https://www.isdia.org/img/i_image/netherlanda.png" alt="netherlands" /></div>
        <div className="item item22 min-w-32 h-16 relative" style={{"--position":22}}><img className="w-full h-full object-cover absolute"  src="https://www.isdia.org/img/i_image/south-africa.png" alt="south africa" /></div>
        <div className="item item23 min-w-32 h-16 relative" style={{"--position":23}}><img className="w-full h-full object-cover absolute"  src="https://www.isdia.org/img/i_image/thailand.png" alt="thailand" /></div>
        <div className="item item24 min-w-32 h-16 relative" style={{"--position":24}}><img className="w-full h-full object-cover absolute"  src="https://www.isdia.org/img/i_image/czekh-republic.png" alt="czekh republic" /></div>
        <div className="item item25 min-w-32 h-16 relative" style={{"--position":25}}><img className="w-full h-full object-cover absolute"  src="https://www.isdia.org/img/i_image/switzerland.png" alt="switzerland" /></div>
        <div className="item item26 min-w-32 h-16 relative" style={{"--position":26}}><img className="w-full h-full object-cover absolute"  src="https://www.isdia.org/img/i_image/sweden.png" alt="sweden" /></div>
        <div className="item item27 min-w-32 h-16 relative" style={{"--position":27}}><img className="w-full h-full object-cover absolute"  src="https://www.isdia.org/img/i_image/uae.png" alt="uae" /></div>
      </div>
    </div>

  )
}

export default InfiniteScroll
