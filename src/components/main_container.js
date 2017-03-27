import React, {Component} from 'react'
import Sidebar from './sidebar'
import MainContent from './main_content'
import Footer from './footer'

const MainContainer = (props) => {

    return (
        <div className="main-container ace-save-state" id="main-container">
            <a href="#" id="btn-scroll-up" className="btn-scroll-up btn btn-sm btn-inverse">
                <i className="ace-icon fa fa-angle-double-up icon-only bigger-110"></i>
            </a>
            <Sidebar/>
            <MainContent/>
            <Footer/>
        </div>

    )

};

export default MainContainer