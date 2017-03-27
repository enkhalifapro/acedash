import React, {Component} from 'react'

const MainContent = (props) => {

    return (
        <div className="main-content">
            <div className="main-content-inner">
                <div className="breadcrumbs ace-save-state" id="breadcrumbs">
                    <ul className="breadcrumb">
                        <li>
                            <i className="ace-icon fa fa-home home-icon"></i>
                            <a href="#">Home</a>
                        </li>
                        <li className="active">Dashboard</li>
                    </ul>

                    <div className="nav-search" id="nav-search">
                        <form className="form-search">
								<span className="input-icon">
									<input type="text" placeholder="Search ..." className="nav-search-input"
                                           id="nav-search-input" autoComplete="off"/>
									<i className="ace-icon fa fa-search nav-search-icon"></i>
								</span>
                        </form>
                    </div>
                </div>

                <div className="page-content">
                    <div className="ace-settings-container" id="ace-settings-container">
                        <div className="btn btn-app btn-xs btn-warning ace-settings-btn" id="ace-settings-btn">
                            <i className="ace-icon fa fa-cog bigger-130"></i>
                        </div>

                        <div className="ace-settings-box clearfix" id="ace-settings-box">
                            <div className="pull-left width-50">
                                <div className="ace-settings-item">
                                    <div className="pull-left">
                                        <select id="skin-colorpicker" className="hide">
                                            <option data-skin="no-skin" value="#438EB9">#438EB9</option>
                                            <option data-skin="skin-1" value="#222A2D">#222A2D</option>
                                            <option data-skin="skin-2" value="#C6487E">#C6487E</option>
                                            <option data-skin="skin-3" value="#D0D0D0">#D0D0D0</option>
                                        </select>
                                    </div>
                                    <span>&nbsp; Choose Skin</span>
                                </div>

                                <div className="ace-settings-item">
                                    <input type="checkbox" className="ace ace-checkbox-2 ace-save-state"
                                           id="ace-settings-navbar" autoComplete="off"/>
                                    <label className="lbl" for="ace-settings-navbar"> Fixed Navbar</label>
                                </div>

                                <div className="ace-settings-item">
                                    <input type="checkbox" className="ace ace-checkbox-2 ace-save-state"
                                           id="ace-settings-sidebar" autoComplete="off"/>
                                    <label className="lbl" for="ace-settings-sidebar"> Fixed Sidebar</label>
                                </div>

                                <div className="ace-settings-item">
                                    <input type="checkbox" className="ace ace-checkbox-2 ace-save-state"
                                           id="ace-settings-breadcrumbs" autoComplete="off"/>
                                    <label className="lbl" for="ace-settings-breadcrumbs"> Fixed Breadcrumbs</label>
                                </div>

                                <div className="ace-settings-item">
                                    <input type="checkbox" className="ace ace-checkbox-2" id="ace-settings-rtl"
                                           autoComplete="off"/>
                                    <label className="lbl" for="ace-settings-rtl"> Right To Left (rtl)</label>
                                </div>

                                <div className="ace-settings-item">
                                    <input type="checkbox" className="ace ace-checkbox-2 ace-save-state"
                                           id="ace-settings-add-container" autoComplete="off"/>
                                    <label className="lbl" for="ace-settings-add-container">
                                        Inside
                                        <b>.container</b>
                                    </label>
                                </div>
                            </div>

                            <div className="pull-left width-50">
                                <div className="ace-settings-item">
                                    <input type="checkbox" className="ace ace-checkbox-2" id="ace-settings-hover"
                                           autoComplete="off"/>
                                    <label className="lbl" for="ace-settings-hover"> Submenu on Hover</label>
                                </div>

                                <div className="ace-settings-item">
                                    <input type="checkbox" className="ace ace-checkbox-2" id="ace-settings-compact"
                                           autoComplete="off"/>
                                    <label className="lbl" for="ace-settings-compact"> Compact Sidebar</label>
                                </div>

                                <div className="ace-settings-item">
                                    <input type="checkbox" className="ace ace-checkbox-2" id="ace-settings-highlight"
                                           autoComplete="off"/>
                                    <label className="lbl" for="ace-settings-highlight"> Alt. Active Item</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="page-header">
                        <h1>
                            Dashboard
                            <small>
                                <i className="ace-icon fa fa-angle-double-right"></i>
                                overview &amp; stats
                            </small>
                        </h1>
                    </div>

                    <div className="row">
                        <div className="col-xs-12">
                            <div className="alert alert-block alert-success">
                                <button type="button" className="close" data-dismiss="alert">
                                    <i className="ace-icon fa fa-times"></i>
                                </button>

                                <i className="ace-icon fa fa-check green"></i>

                                Welcome to
                                <strong className="green">
                                    Ace
                                    <small>(v1.4)</small>
                                </strong>,
                                лёгкий, многофункциональный и простой в использовании шаблон для админки на bootstrap
                                3.3.6. Загрузить исходники с <a href="https://github.com/bopoda/ace">github</a> (with
                                minified ace js/css files).
                            </div>

                            <div className="row">
                                <div className="space-6"></div>

                                <div className="col-sm-7 infobox-container">
                                    <div className="infobox infobox-green">
                                        <div className="infobox-icon">
                                            <i className="ace-icon fa fa-comments"></i>
                                        </div>

                                        <div className="infobox-data">
                                            <span className="infobox-data-number">32</span>
                                            <div className="infobox-content">comments + 2 reviews</div>
                                        </div>

                                        <div className="stat stat-success">8%</div>
                                    </div>

                                    <div className="infobox infobox-blue">
                                        <div className="infobox-icon">
                                            <i className="ace-icon fa fa-twitter"></i>
                                        </div>

                                        <div className="infobox-data">
                                            <span className="infobox-data-number">11</span>
                                            <div className="infobox-content">new followers</div>
                                        </div>

                                        <div className="badge badge-success">
                                            +32%
                                            <i className="ace-icon fa fa-arrow-up"></i>
                                        </div>
                                    </div>

                                    <div className="infobox infobox-pink">
                                        <div className="infobox-icon">
                                            <i className="ace-icon fa fa-shopping-cart"></i>
                                        </div>

                                        <div className="infobox-data">
                                            <span className="infobox-data-number">8</span>
                                            <div className="infobox-content">new orders</div>
                                        </div>
                                        <div className="stat stat-important">4%</div>
                                    </div>

                                    <div className="infobox infobox-red">
                                        <div className="infobox-icon">
                                            <i className="ace-icon fa fa-flask"></i>
                                        </div>

                                        <div className="infobox-data">
                                            <span className="infobox-data-number">7</span>
                                            <div className="infobox-content">experiments</div>
                                        </div>
                                    </div>

                                    <div className="infobox infobox-orange2">
                                        <div className="infobox-chart">
                                            <span className="sparkline"
                                                  data-values="196,128,202,177,154,94,100,170,224"></span>
                                        </div>

                                        <div className="infobox-data">
                                            <span className="infobox-data-number">6,251</span>
                                            <div className="infobox-content">pageviews</div>
                                        </div>

                                        <div className="badge badge-success">
                                            7.2%
                                            <i className="ace-icon fa fa-arrow-up"></i>
                                        </div>
                                    </div>

                                    <div className="infobox infobox-blue2">
                                        <div className="infobox-progress">
                                            <div className="easy-pie-chart percentage" data-percent="42" data-size="46">
                                                <span className="percent">42</span>%
                                            </div>
                                        </div>

                                        <div className="infobox-data">
                                            <span className="infobox-text">traffic used</span>

                                            <div className="infobox-content">
                                                <span className="bigger-110">~</span>
                                                58GB remaining
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-6"></div>

                                    <div className="infobox infobox-green infobox-small infobox-dark">
                                        <div className="infobox-progress">
                                            <div className="easy-pie-chart percentage" data-percent="61" data-size="39">
                                                <span className="percent">61</span>%
                                            </div>
                                        </div>

                                        <div className="infobox-data">
                                            <div className="infobox-content">Task</div>
                                            <div className="infobox-content">Completion</div>
                                        </div>
                                    </div>

                                    <div className="infobox infobox-blue infobox-small infobox-dark">
                                        <div className="infobox-chart">
                                            <span className="sparkline" data-values="3,4,2,3,4,4,2,2"></span>
                                        </div>

                                        <div className="infobox-data">
                                            <div className="infobox-content">Earnings</div>
                                            <div className="infobox-content">$32,000</div>
                                        </div>
                                    </div>

                                    <div className="infobox infobox-grey infobox-small infobox-dark">
                                        <div className="infobox-icon">
                                            <i className="ace-icon fa fa-download"></i>
                                        </div>

                                        <div className="infobox-data">
                                            <div className="infobox-content">Downloads</div>
                                            <div className="infobox-content">1,205</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="vspace-12-sm"></div>

                                <div className="col-sm-5">
                                    <div className="widget-box">
                                        <div className="widget-header widget-header-flat widget-header-small">
                                            <h5 className="widget-title">
                                                <i className="ace-icon fa fa-signal"></i>
                                                Traffic Sources
                                            </h5>

                                            <div className="widget-toolbar no-border">
                                                <div className="inline dropdown-hover">
                                                    <button className="btn btn-minier btn-primary">
                                                        This Week
                                                        <i className="ace-icon fa fa-angle-down icon-on-right bigger-110"></i>
                                                    </button>

                                                    <ul className="dropdown-menu dropdown-menu-right dropdown-125 dropdown-lighter dropdown-close dropdown-caret">
                                                        <li className="active">
                                                            <a href="#" className="blue">
                                                                <i className="ace-icon fa fa-caret-right bigger-110">&nbsp;</i>
                                                                This Week
                                                            </a>
                                                        </li>

                                                        <li>
                                                            <a href="#">
                                                                <i className="ace-icon fa fa-caret-right bigger-110 invisible">&nbsp;</i>
                                                                Last Week
                                                            </a>
                                                        </li>

                                                        <li>
                                                            <a href="#">
                                                                <i className="ace-icon fa fa-caret-right bigger-110 invisible">&nbsp;</i>
                                                                This Month
                                                            </a>
                                                        </li>

                                                        <li>
                                                            <a href="#">
                                                                <i className="ace-icon fa fa-caret-right bigger-110 invisible">&nbsp;</i>
                                                                Last Month
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="widget-body">
                                            <div className="widget-main">
                                                <div id="piechart-placeholder"></div>

                                                <div className="hr hr8 hr-double"></div>

                                                <div className="clearfix">
                                                    <div className="grid3">
															<span className="grey">
																<i className="ace-icon fa fa-facebook-square fa-2x blue"></i>
                                                                &nbsp; likes
															</span>
                                                        <h4 className="bigger pull-right">1,255</h4>
                                                    </div>

                                                    <div className="grid3">
															<span className="grey">
																<i className="ace-icon fa fa-twitter-square fa-2x purple"></i>
                                                                &nbsp; tweets
															</span>
                                                        <h4 className="bigger pull-right">941</h4>
                                                    </div>

                                                    <div className="grid3">
															<span className="grey">
																<i className="ace-icon fa fa-pinterest-square fa-2x red"></i>
                                                                &nbsp; pins
															</span>
                                                        <h4 className="bigger pull-right">1,050</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="hr hr32 hr-dotted"></div>

                            <div className="row">
                                <div className="col-sm-5">
                                    <div className="widget-box transparent">
                                        <div className="widget-header widget-header-flat">
                                            <h4 className="widget-title lighter">
                                                <i className="ace-icon fa fa-star orange"></i>
                                                Popular Domains
                                            </h4>

                                            <div className="widget-toolbar">
                                                <a href="#" data-action="collapse">
                                                    <i className="ace-icon fa fa-chevron-up"></i>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="widget-body">
                                            <div className="widget-main no-padding">
                                                <table className="table table-bordered table-striped">
                                                    <thead className="thin-border-bottom">
                                                    <tr>
                                                        <th>
                                                            <i className="ace-icon fa fa-caret-right blue"></i>name
                                                        </th>

                                                        <th>
                                                            <i className="ace-icon fa fa-caret-right blue"></i>price
                                                        </th>

                                                        <th className="hidden-480">
                                                            <i className="ace-icon fa fa-caret-right blue"></i>status
                                                        </th>
                                                    </tr>
                                                    </thead>

                                                    <tbody>
                                                    <tr>
                                                        <td>internet.com</td>

                                                        <td>
                                                            <small>
                                                                <s className="red">$29.99</s>
                                                            </small>
                                                            <b className="green">$19.99</b>
                                                        </td>

                                                        <td className="hidden-480">
                                                            <span className="label label-info arrowed-right arrowed-in">on sale</span>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>online.com</td>

                                                        <td>
                                                            <b className="blue">$16.45</b>
                                                        </td>

                                                        <td className="hidden-480">
                                                            <span
                                                                className="label label-success arrowed-in arrowed-in-right">approved</span>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>newnet.com</td>

                                                        <td>
                                                            <b className="blue">$15.00</b>
                                                        </td>

                                                        <td className="hidden-480">
                                                            <span className="label label-danger arrowed">pending</span>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>web.com</td>

                                                        <td>
                                                            <small>
                                                                <s className="red">$24.99</s>
                                                            </small>
                                                            <b className="green">$19.95</b>
                                                        </td>

                                                        <td className="hidden-480">
																	<span className="label arrowed">
																		<s>out of stock</s>
																	</span>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>domain.com</td>

                                                        <td>
                                                            <b className="blue">$12.00</b>
                                                        </td>

                                                        <td className="hidden-480">
                                                            <span className="label label-warning arrowed arrowed-right">SOLD</span>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-7">
                                    <div className="widget-box transparent">
                                        <div className="widget-header widget-header-flat">
                                            <h4 className="widget-title lighter">
                                                <i className="ace-icon fa fa-signal"></i>
                                                Sale Stats
                                            </h4>

                                            <div className="widget-toolbar">
                                                <a href="#" data-action="collapse">
                                                    <i className="ace-icon fa fa-chevron-up"></i>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="widget-body">
                                            <div className="widget-main padding-4">
                                                <div id="sales-charts"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="hr hr32 hr-dotted"></div>

                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="widget-box transparent" id="recent-box">
                                        <div className="widget-header">
                                            <h4 className="widget-title lighter smaller">
                                                <i className="ace-icon fa fa-rss orange"></i>RECENT
                                            </h4>

                                            <div className="widget-toolbar no-border">
                                                <ul className="nav nav-tabs" id="recent-tab">
                                                    <li className="active">
                                                        <a data-toggle="tab" href="#task-tab">Tasks</a>
                                                    </li>

                                                    <li>
                                                        <a data-toggle="tab" href="#member-tab">Members</a>
                                                    </li>

                                                    <li>
                                                        <a data-toggle="tab" href="#comment-tab">Comments</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="widget-body">
                                            <div className="widget-main padding-4">
                                                <div className="tab-content padding-8">
                                                    <div id="task-tab" className="tab-pane active">
                                                        <h4 className="smaller lighter green">
                                                            <i className="ace-icon fa fa-list"></i>
                                                            Sortable Lists
                                                        </h4>

                                                        <ul id="tasks" className="item-list">
                                                            <li className="item-orange clearfix">
                                                                <label className="inline">
                                                                    <input type="checkbox" className="ace"/>
                                                                    <span
                                                                        className="lbl"> Answering customer questions</span>
                                                                </label>

                                                                <div className="pull-right easy-pie-chart percentage"
                                                                     data-size="30" data-color="#ECCB71"
                                                                     data-percent="42">
                                                                    <span className="percent">42</span>%
                                                                </div>
                                                            </li>

                                                            <li className="item-red clearfix">
                                                                <label className="inline">
                                                                    <input type="checkbox" className="ace"/>
                                                                    <span className="lbl"> Fixing bugs</span>
                                                                </label>

                                                                <div className="pull-right action-buttons">
                                                                    <a href="#" className="blue">
                                                                        <i className="ace-icon fa fa-pencil bigger-130"></i>
                                                                    </a>

                                                                    <span className="vbar"></span>

                                                                    <a href="#" className="red">
                                                                        <i className="ace-icon fa fa-trash-o bigger-130"></i>
                                                                    </a>

                                                                    <span className="vbar"></span>

                                                                    <a href="#" className="green">
                                                                        <i className="ace-icon fa fa-flag bigger-130"></i>
                                                                    </a>
                                                                </div>
                                                            </li>

                                                            <li className="item-default clearfix">
                                                                <label className="inline">
                                                                    <input type="checkbox" className="ace"/>
                                                                    <span className="lbl"> Adding new features</span>
                                                                </label>

                                                                <div className="pull-right pos-rel dropdown-hover">
                                                                    <button
                                                                        className="btn btn-minier bigger btn-primary">
                                                                        <i className="ace-icon fa fa-cog icon-only bigger-120"></i>
                                                                    </button>

                                                                    <ul className="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-caret dropdown-close dropdown-menu-right">
                                                                        <li>
                                                                            <a href="#" className="tooltip-success"
                                                                               data-rel="tooltip"
                                                                               title="Mark&nbsp;as&nbsp;done">
																					<span className="green">
																						<i className="ace-icon fa fa-check bigger-110"></i>
																					</span>
                                                                            </a>
                                                                        </li>

                                                                        <li>
                                                                            <a href="#" className="tooltip-error"
                                                                               data-rel="tooltip" title="Delete">
																					<span className="red">
																						<i className="ace-icon fa fa-trash-o bigger-110"></i>
																					</span>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>

                                                            <li className="item-blue clearfix">
                                                                <label className="inline">
                                                                    <input type="checkbox" className="ace"/>
                                                                    <span className="lbl"> Upgrading scripts used in template</span>
                                                                </label>
                                                            </li>

                                                            <li className="item-grey clearfix">
                                                                <label className="inline">
                                                                    <input type="checkbox" className="ace"/>
                                                                    <span className="lbl"> Adding new skins</span>
                                                                </label>
                                                            </li>

                                                            <li className="item-green clearfix">
                                                                <label className="inline">
                                                                    <input type="checkbox" className="ace"/>
                                                                    <span
                                                                        className="lbl"> Updating server software up</span>
                                                                </label>
                                                            </li>

                                                            <li className="item-pink clearfix">
                                                                <label className="inline">
                                                                    <input type="checkbox" className="ace"/>
                                                                    <span className="lbl"> Cleaning up</span>
                                                                </label>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div id="member-tab" className="tab-pane">
                                                        <div className="clearfix">
                                                            <div className="itemdiv memberdiv">
                                                                <div className="user">
                                                                    <img alt="Bob Doe's avatar"
                                                                         src="assets/images/avatars/user.jpg"/>
                                                                </div>

                                                                <div className="body">
                                                                    <div className="name">
                                                                        <a href="#">Bob Doe</a>
                                                                    </div>

                                                                    <div className="time">
                                                                        <i className="ace-icon fa fa-clock-o"></i>
                                                                        <span className="green">20 min</span>
                                                                    </div>

                                                                    <div>
                                                                        <span className="label label-warning label-sm">pending</span>

                                                                        <div className="inline position-relative">
                                                                            <button
                                                                                className="btn btn-minier btn-yellow btn-no-border dropdown-toggle"
                                                                                data-toggle="dropdown"
                                                                                data-position="auto">
                                                                                <i className="ace-icon fa fa-angle-down icon-only bigger-120"></i>
                                                                            </button>

                                                                            <ul className="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">
                                                                                <li>
                                                                                    <a href="#"
                                                                                       className="tooltip-success"
                                                                                       data-rel="tooltip"
                                                                                       title="Approve">
																							<span className="green">
																								<i className="ace-icon fa fa-check bigger-110"></i>
																							</span>
                                                                                    </a>
                                                                                </li>

                                                                                <li>
                                                                                    <a href="#"
                                                                                       className="tooltip-warning"
                                                                                       data-rel="tooltip"
                                                                                       title="Reject">
																							<span className="orange">
																								<i className="ace-icon fa fa-times bigger-110"></i>
																							</span>
                                                                                    </a>
                                                                                </li>

                                                                                <li>
                                                                                    <a href="#"
                                                                                       className="tooltip-error"
                                                                                       data-rel="tooltip"
                                                                                       title="Delete">
																							<span className="red">
																								<i className="ace-icon fa fa-trash-o bigger-110"></i>
																							</span>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="itemdiv memberdiv">
                                                                <div className="user">
                                                                    <img alt="Joe Doe's avatar"
                                                                         src="assets/images/avatars/avatar2.png"/>
                                                                </div>

                                                                <div className="body">
                                                                    <div className="name">
                                                                        <a href="#">Joe Doe</a>
                                                                    </div>

                                                                    <div className="time">
                                                                        <i className="ace-icon fa fa-clock-o"></i>
                                                                        <span className="green">1 hour</span>
                                                                    </div>

                                                                    <div>
                                                                        <span className="label label-warning label-sm">pending</span>

                                                                        <div className="inline position-relative">
                                                                            <button
                                                                                className="btn btn-minier btn-yellow btn-no-border dropdown-toggle"
                                                                                data-toggle="dropdown"
                                                                                data-position="auto">
                                                                                <i className="ace-icon fa fa-angle-down icon-only bigger-120"></i>
                                                                            </button>

                                                                            <ul className="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">
                                                                                <li>
                                                                                    <a href="#"
                                                                                       className="tooltip-success"
                                                                                       data-rel="tooltip"
                                                                                       title="Approve">
																							<span className="green">
																								<i className="ace-icon fa fa-check bigger-110"></i>
																							</span>
                                                                                    </a>
                                                                                </li>

                                                                                <li>
                                                                                    <a href="#"
                                                                                       className="tooltip-warning"
                                                                                       data-rel="tooltip"
                                                                                       title="Reject">
																							<span className="orange">
																								<i className="ace-icon fa fa-times bigger-110"></i>
																							</span>
                                                                                    </a>
                                                                                </li>

                                                                                <li>
                                                                                    <a href="#"
                                                                                       className="tooltip-error"
                                                                                       data-rel="tooltip"
                                                                                       title="Delete">
																							<span className="red">
																								<i className="ace-icon fa fa-trash-o bigger-110"></i>
																							</span>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="itemdiv memberdiv">
                                                                <div className="user">
                                                                    <img alt="Jim Doe's avatar"
                                                                         src="assets/images/avatars/avatar.png"/>
                                                                </div>

                                                                <div className="body">
                                                                    <div className="name">
                                                                        <a href="#">Jim Doe</a>
                                                                    </div>

                                                                    <div className="time">
                                                                        <i className="ace-icon fa fa-clock-o"></i>
                                                                        <span className="green">2 hour</span>
                                                                    </div>

                                                                    <div>
                                                                        <span className="label label-warning label-sm">pending</span>

                                                                        <div className="inline position-relative">
                                                                            <button
                                                                                className="btn btn-minier btn-yellow btn-no-border dropdown-toggle"
                                                                                data-toggle="dropdown"
                                                                                data-position="auto">
                                                                                <i className="ace-icon fa fa-angle-down icon-only bigger-120"></i>
                                                                            </button>

                                                                            <ul className="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">
                                                                                <li>
                                                                                    <a href="#"
                                                                                       className="tooltip-success"
                                                                                       data-rel="tooltip"
                                                                                       title="Approve">
																							<span className="green">
																								<i className="ace-icon fa fa-check bigger-110"></i>
																							</span>
                                                                                    </a>
                                                                                </li>

                                                                                <li>
                                                                                    <a href="#"
                                                                                       className="tooltip-warning"
                                                                                       data-rel="tooltip"
                                                                                       title="Reject">
																							<span className="orange">
																								<i className="ace-icon fa fa-times bigger-110"></i>
																							</span>
                                                                                    </a>
                                                                                </li>

                                                                                <li>
                                                                                    <a href="#"
                                                                                       className="tooltip-error"
                                                                                       data-rel="tooltip"
                                                                                       title="Delete">
																							<span className="red">
																								<i className="ace-icon fa fa-trash-o bigger-110"></i>
																							</span>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="itemdiv memberdiv">
                                                                <div className="user">
                                                                    <img alt="Alex Doe's avatar"
                                                                         src="assets/images/avatars/avatar5.png"/>
                                                                </div>

                                                                <div className="body">
                                                                    <div className="name">
                                                                        <a href="#">Alex Doe</a>
                                                                    </div>

                                                                    <div className="time">
                                                                        <i className="ace-icon fa fa-clock-o"></i>
                                                                        <span className="green">3 hour</span>
                                                                    </div>

                                                                    <div>
                                                                        <span className="label label-danger label-sm">blocked</span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="itemdiv memberdiv">
                                                                <div className="user">
                                                                    <img alt="Bob Doe's avatar"
                                                                         src="assets/images/avatars/avatar2.png"/>
                                                                </div>

                                                                <div className="body">
                                                                    <div className="name">
                                                                        <a href="#">Bob Doe</a>
                                                                    </div>

                                                                    <div className="time">
                                                                        <i className="ace-icon fa fa-clock-o"></i>
                                                                        <span className="green">6 hour</span>
                                                                    </div>

                                                                    <div>
                                                                        <span
                                                                            className="label label-success label-sm arrowed-in">approved</span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="itemdiv memberdiv">
                                                                <div className="user">
                                                                    <img alt="Susan's avatar"
                                                                         src="assets/images/avatars/avatar3.png"/>
                                                                </div>

                                                                <div className="body">
                                                                    <div className="name">
                                                                        <a href="#">Susan</a>
                                                                    </div>

                                                                    <div className="time">
                                                                        <i className="ace-icon fa fa-clock-o"></i>
                                                                        <span className="green">yesterday</span>
                                                                    </div>

                                                                    <div>
                                                                        <span
                                                                            className="label label-success label-sm arrowed-in">approved</span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="itemdiv memberdiv">
                                                                <div className="user">
                                                                    <img alt="Phil Doe's avatar"
                                                                         src="assets/images/avatars/avatar4.png"/>
                                                                </div>

                                                                <div className="body">
                                                                    <div className="name">
                                                                        <a href="#">Phil Doe</a>
                                                                    </div>

                                                                    <div className="time">
                                                                        <i className="ace-icon fa fa-clock-o"></i>
                                                                        <span className="green">2 days ago</span>
                                                                    </div>

                                                                    <div>
                                                                        <span
                                                                            className="label label-info label-sm arrowed-in arrowed-in-right">online</span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="itemdiv memberdiv">
                                                                <div className="user">
                                                                    <img alt="Alexa Doe's avatar"
                                                                         src="assets/images/avatars/avatar1.png"/>
                                                                </div>

                                                                <div className="body">
                                                                    <div className="name">
                                                                        <a href="#">Alexa Doe</a>
                                                                    </div>

                                                                    <div className="time">
                                                                        <i className="ace-icon fa fa-clock-o"></i>
                                                                        <span className="green">3 days ago</span>
                                                                    </div>

                                                                    <div>
                                                                        <span
                                                                            className="label label-success label-sm arrowed-in">approved</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="space-4"></div>

                                                        <div className="center">
                                                            <i className="ace-icon fa fa-users fa-2x green middle"></i>

                                                            &nbsp;
                                                            <a href="#" className="btn btn-sm btn-white btn-info">
                                                                See all members &nbsp;
                                                                <i className="ace-icon fa fa-arrow-right"></i>
                                                            </a>
                                                        </div>

                                                        <div className="hr hr-double hr8"></div>
                                                    </div>

                                                    <div id="comment-tab" className="tab-pane">
                                                        <div className="comments">
                                                            <div className="itemdiv commentdiv">
                                                                <div className="user">
                                                                    <img alt="Bob Doe's Avatar"
                                                                         src="assets/images/avatars/avatar.png"/>
                                                                </div>

                                                                <div className="body">
                                                                    <div className="name">
                                                                        <a href="#">Bob Doe</a>
                                                                    </div>

                                                                    <div className="time">
                                                                        <i className="ace-icon fa fa-clock-o"></i>
                                                                        <span className="green">6 min</span>
                                                                    </div>

                                                                    <div className="text">
                                                                        <i className="ace-icon fa fa-quote-left"></i>
                                                                        Lorem ipsum dolor sit amet, consectetur
                                                                        adipiscing elit. Quisque commodo massa sed ipsum
                                                                        porttitor facilisis &hellip;
                                                                    </div>
                                                                </div>

                                                                <div className="tools">
                                                                    <div className="inline position-relative">
                                                                        <button
                                                                            className="btn btn-minier bigger btn-yellow dropdown-toggle"
                                                                            data-toggle="dropdown">
                                                                            <i className="ace-icon fa fa-angle-down icon-only bigger-120"></i>
                                                                        </button>

                                                                        <ul className="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">
                                                                            <li>
                                                                                <a href="#" className="tooltip-success"
                                                                                   data-rel="tooltip" title="Approve">
																						<span className="green">
																							<i className="ace-icon fa fa-check bigger-110"></i>
																						</span>
                                                                                </a>
                                                                            </li>

                                                                            <li>
                                                                                <a href="#" className="tooltip-warning"
                                                                                   data-rel="tooltip" title="Reject">
																						<span className="orange">
																							<i className="ace-icon fa fa-times bigger-110"></i>
																						</span>
                                                                                </a>
                                                                            </li>

                                                                            <li>
                                                                                <a href="#" className="tooltip-error"
                                                                                   data-rel="tooltip" title="Delete">
																						<span className="red">
																							<i className="ace-icon fa fa-trash-o bigger-110"></i>
																						</span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="itemdiv commentdiv">
                                                                <div className="user">
                                                                    <img alt="Jennifer's Avatar"
                                                                         src="assets/images/avatars/avatar1.png"/>
                                                                </div>

                                                                <div className="body">
                                                                    <div className="name">
                                                                        <a href="#">Jennifer</a>
                                                                    </div>

                                                                    <div className="time">
                                                                        <i className="ace-icon fa fa-clock-o"></i>
                                                                        <span className="blue">15 min</span>
                                                                    </div>

                                                                    <div className="text">
                                                                        <i className="ace-icon fa fa-quote-left"></i>
                                                                        Lorem ipsum dolor sit amet, consectetur
                                                                        adipiscing elit. Quisque commodo massa sed ipsum
                                                                        porttitor facilisis &hellip;
                                                                    </div>
                                                                </div>

                                                                <div className="tools">
                                                                    <div className="action-buttons bigger-125">
                                                                        <a href="#">
                                                                            <i className="ace-icon fa fa-pencil blue"></i>
                                                                        </a>

                                                                        <a href="#">
                                                                            <i className="ace-icon fa fa-trash-o red"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="itemdiv commentdiv">
                                                                <div className="user">
                                                                    <img alt="Joe's Avatar"
                                                                         src="assets/images/avatars/avatar2.png"/>
                                                                </div>

                                                                <div className="body">
                                                                    <div className="name">
                                                                        <a href="#">Joe</a>
                                                                    </div>

                                                                    <div className="time">
                                                                        <i className="ace-icon fa fa-clock-o"></i>
                                                                        <span className="orange">22 min</span>
                                                                    </div>

                                                                    <div className="text">
                                                                        <i className="ace-icon fa fa-quote-left"></i>
                                                                        Lorem ipsum dolor sit amet, consectetur
                                                                        adipiscing elit. Quisque commodo massa sed ipsum
                                                                        porttitor facilisis &hellip;
                                                                    </div>
                                                                </div>

                                                                <div className="tools">
                                                                    <div className="action-buttons bigger-125">
                                                                        <a href="#">
                                                                            <i className="ace-icon fa fa-pencil blue"></i>
                                                                        </a>

                                                                        <a href="#">
                                                                            <i className="ace-icon fa fa-trash-o red"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="itemdiv commentdiv">
                                                                <div className="user">
                                                                    <img alt="Rita's Avatar"
                                                                         src="assets/images/avatars/avatar3.png"/>
                                                                </div>

                                                                <div className="body">
                                                                    <div className="name">
                                                                        <a href="#">Rita</a>
                                                                    </div>

                                                                    <div className="time">
                                                                        <i className="ace-icon fa fa-clock-o"></i>
                                                                        <span className="red">50 min</span>
                                                                    </div>

                                                                    <div className="text">
                                                                        <i className="ace-icon fa fa-quote-left"></i>
                                                                        Lorem ipsum dolor sit amet, consectetur
                                                                        adipiscing elit. Quisque commodo massa sed ipsum
                                                                        porttitor facilisis &hellip;
                                                                    </div>
                                                                </div>

                                                                <div className="tools">
                                                                    <div className="action-buttons bigger-125">
                                                                        <a href="#">
                                                                            <i className="ace-icon fa fa-pencil blue"></i>
                                                                        </a>

                                                                        <a href="#">
                                                                            <i className="ace-icon fa fa-trash-o red"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="hr hr8"></div>

                                                        <div className="center">
                                                            <i className="ace-icon fa fa-comments-o fa-2x green middle"></i>

                                                            &nbsp;
                                                            <a href="#" className="btn btn-sm btn-white btn-info">
                                                                See all comments &nbsp;
                                                                <i className="ace-icon fa fa-arrow-right"></i>
                                                            </a>
                                                        </div>

                                                        <div className="hr hr-double hr8"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="widget-box">
                                        <div className="widget-header">
                                            <h4 className="widget-title lighter smaller">
                                                <i className="ace-icon fa fa-comment blue"></i>
                                                Conversation
                                            </h4>
                                        </div>

                                        <div className="widget-body">
                                            <div className="widget-main no-padding">
                                                <div className="dialogs">
                                                    <div className="itemdiv dialogdiv">
                                                        <div className="user">
                                                            <img alt="Alexa's Avatar"
                                                                 src="assets/images/avatars/avatar1.png"/>
                                                        </div>

                                                        <div className="body">
                                                            <div className="time">
                                                                <i className="ace-icon fa fa-clock-o"></i>
                                                                <span className="green">4 sec</span>
                                                            </div>

                                                            <div className="name">
                                                                <a href="#">Alexa</a>
                                                            </div>
                                                            <div className="text">Lorem ipsum dolor sit amet,
                                                                consectetur
                                                                adipiscing elit. Quisque commodo massa sed ipsum
                                                                porttitor facilisis.
                                                            </div>

                                                            <div className="tools">
                                                                <a href="#" className="btn btn-minier btn-info">
                                                                    <i className="icon-only ace-icon fa fa-share"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="itemdiv dialogdiv">
                                                        <div className="user">
                                                            <img alt="John's Avatar"
                                                                 src="assets/images/avatars/avatar.png"/>
                                                        </div>

                                                        <div className="body">
                                                            <div className="time">
                                                                <i className="ace-icon fa fa-clock-o"></i>
                                                                <span className="blue">38 sec</span>
                                                            </div>

                                                            <div className="name">
                                                                <a href="#">John</a>
                                                            </div>
                                                            <div className="text">Raw denim you probably haven&#39;t
                                                                heard
                                                                of them jean shorts Austin.
                                                            </div>

                                                            <div className="tools">
                                                                <a href="#" className="btn btn-minier btn-info">
                                                                    <i className="icon-only ace-icon fa fa-share"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="itemdiv dialogdiv">
                                                        <div className="user">
                                                            <img alt="Bob's Avatar"
                                                                 src="assets/images/avatars/user.jpg"/>
                                                        </div>

                                                        <div className="body">
                                                            <div className="time">
                                                                <i className="ace-icon fa fa-clock-o"></i>
                                                                <span className="orange">2 min</span>
                                                            </div>

                                                            <div className="name">
                                                                <a href="#">Bob</a>
                                                                <span
                                                                    className="label label-info arrowed arrowed-in-right">admin</span>
                                                            </div>
                                                            <div className="text">Lorem ipsum dolor sit amet,
                                                                consectetur
                                                                adipiscing elit. Quisque commodo massa sed ipsum
                                                                porttitor facilisis.
                                                            </div>

                                                            <div className="tools">
                                                                <a href="#" className="btn btn-minier btn-info">
                                                                    <i className="icon-only ace-icon fa fa-share"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="itemdiv dialogdiv">
                                                        <div className="user">
                                                            <img alt="Jim's Avatar"
                                                                 src="assets/images/avatars/avatar4.png"/>
                                                        </div>

                                                        <div className="body">
                                                            <div className="time">
                                                                <i className="ace-icon fa fa-clock-o"></i>
                                                                <span className="grey">3 min</span>
                                                            </div>

                                                            <div className="name">
                                                                <a href="#">Jim</a>
                                                            </div>
                                                            <div className="text">Raw denim you probably haven&#39;t
                                                                heard
                                                                of them jean shorts Austin.
                                                            </div>

                                                            <div className="tools">
                                                                <a href="#" className="btn btn-minier btn-info">
                                                                    <i className="icon-only ace-icon fa fa-share"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="itemdiv dialogdiv">
                                                        <div className="user">
                                                            <img alt="Alexa's Avatar"
                                                                 src="assets/images/avatars/avatar1.png"/>
                                                        </div>

                                                        <div className="body">
                                                            <div className="time">
                                                                <i className="ace-icon fa fa-clock-o"></i>
                                                                <span className="green">4 min</span>
                                                            </div>

                                                            <div className="name">
                                                                <a href="#">Alexa</a>
                                                            </div>
                                                            <div className="text">Lorem ipsum dolor sit amet,
                                                                consectetur
                                                                adipiscing elit.
                                                            </div>

                                                            <div className="tools">
                                                                <a href="#" className="btn btn-minier btn-info">
                                                                    <i className="icon-only ace-icon fa fa-share"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <form>
                                                    <div className="form-actions">
                                                        <div className="input-group">
                                                            <input placeholder="Type your message here ..." type="text"
                                                                   className="form-control" name="message"/>
                                                            <span className="input-group-btn">
																	<button className="btn btn-sm btn-info no-radius"
                                                                            type="button">
																		<i className="ace-icon fa fa-share"></i>
																		Send
																	</button>
																</span>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default MainContent