/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react'
import '../AdminPage'
import Admin_Titlebar from '../admin_components/Admin_Titlebar/Admin_Titlebar'
import dropdown_btn from '../../../img/dropdown_icon.png'
import './Admin_PageNotification.scss'
import done_icon from '../../../img/done_icon.png'
import CustomModal from '../../shared_components/CustomModalPopup/CustomModal'
import { ClickAwayListener } from '@material-ui/core';

class Admin_PageNotification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notificationList: [
                {
                    id: "0",
                    title: "THÔNG BÁO BẢO TRÌ SERVER TỪ NGÀY TỚI NGÀY",
                    isCurrentNotification: false,
                },
                {
                    id: "1",
                    title: "THÔNG BÁO BẢO TRÌ SERVER TỪ NGÀY TỚI NGÀY",
                    isCurrentNotification: true,
                }
            ],
        }

    }

    componentDidMount() {
        // console.log(process.env.path);
        this.fetchAllNotification();

    }

    fetchAllNotification = () => {
        //feta
    }

    fetchAllRole = () => {

    }

    onPageChange = () => {

    }

    render() {
        return (
            <div>
                <Admin_Titlebar title="QUẢN LÝ THÔNG BÁO" />
                <div className="Admin_Show_Port">
                    {/* Danh mục bài viết */}



                    <div className="Category_Type_Dropdown" id="admin-post-categories-dropdown" onClick={() => this.handlerCategoryTypeDropDownClick("admin-post-categories-dropdown", "admin-post-categories-container")}>
                        <div>
                            DANH SÁCH THÔNG BÁO
                        </div>
                        <img alt="v" className="Dropdown_Btn_Element" src={dropdown_btn} id="page-management-dropdown-btn-element" />
                    </div>


                    <div className="Category_Type_Dropdown_Container" id="admin-post-categories-container" style={{ marginTop: "5px" }}>
                        <div className="Category_Component_List">
                            <div className="Category_Component">

                                <ClickAwayListener onClickAway={() => { this.closeAllNotificationListItemActivated() }}>

                                    <div className="Category_List_Port">
                                        <div className="Category_List_Header">
                                            <div className="Category_List_CODE_Header">Mã thông báo</div>
                                            <div className="Category_List_NAME_Header">Nội dung thông báo</div>
                                        </div>

                                        {this.state.notificationList.map(item =>
                                            <div className="Category_List_Item" name="Post_Category_List_Item" key={item.id} id={"admin-post-category-item-" + item.id} onClick={(e) => this.handlerNotificationItemClick(e, item.id, item.title)} >
                                                <div className="Category_List_Item_CODE">{item.id}</div>
                                                <div className="Category_List_Item_NAME">
                                                    {item.title}


                                                </div>
                                                {/* <img className ="Current_Notification_Icon" alt="V" hidden={item.isCurrentNotification} src={done_icon} /> */}
                                            </div>
                                        )}

                                    </div>
                                </ClickAwayListener>
                                <div className="Category_Buttons_Port display_flex justify-content-md-between">
                                    <div>
                                        <button className="Simple_Blue_Button margin_right_5px" disabled={!this.state.canClickDeleteNotification} onClick={() => this.handlerSetCurrentNotification()}>Đặt làm thông báo hiện tại</button>
                                        <button className="Simple_White_Button" onClick={() => this.handlerClickDeleteNotification()}>Không thông báo</button>
                                    </div>
                                    <div>
                                        <button className="Simple_Blue_Button margin_right_5px" onClick={() => this.handlerClickAddNotification()}>Thêm</button>
                                        <button className="Simple_White_Button margin_right_5px" disabled={!this.state.canClickEditNotification} onClick={() => this.handlerClickEditNotification()}>Sửa</button>
                                        <button className="Simple_Red_Button" disabled={!this.state.canClickDeleteNotification} onClick={() => this.handlerClickDeleteNotification()}>Xóa</button>
                                    </div>
                                </div>
                            </div>
                            <div style={{ height: "30px" }}></div>
                        </div>
                    </div>


                </div>

                {/* Popup for add new post category */}
                <CustomModal
                    shadow={true}
                    type="custom"
                    title="Thêm thông báo"
                    open={this.isAddNotificationPopupOpen}
                    closeModal={() => { this.isAddNotificationPopupOpen = false; this.setState({}); }}
                >
                    <div className="Custom_Modal_Body">
                        <div className="Simple_Gray_Label_18px"> Nội dung thông báo: </div>
                        <input type="text" className="Simple_Text_Input" placeholder="Nhập tên thông báo ..." />
                    </div>

                    <div className="Custom_Modal_Footer">
                        <div className="Simple_Gray_Label_18px">Xác nhận?</div>
                        <div style={{ display: "flex" }}>
                            <button className="Simple_Blue_Button margin_right_5px" onClick={() => this.handlerVerifyAddNewNotificationConfirmation()}>OK</button>
                            <button className="Simple_White_Button" onClick={() => { this.isAddNotificationPopupOpen = false; this.setState({}) }}>Cancel</button>
                        </div>
                    </div>
                </CustomModal>

                {/* Popup for update a new post category */}
                <CustomModal
                    shadow={true}
                    type="custom"
                    title="Cập nhật thông báo"
                    open={this.isEditNotificationPopupOpen}
                    closeModal={() => { this.isEditNotificationPopupOpen = false; this.setState({}); }}
                >
                    <div className="Custom_Modal_Body">
                        <div className="Simple_Gray_Label_18px"> Tên thông báo: </div>
                        <input type="text" className="Simple_Text_Input" defaultValue={this.selected_category_name} />
                    </div>

                    <div className="Custom_Modal_Footer">
                        <div className="Simple_Gray_Label_18px">Xác nhận?</div>
                        <div style={{ display: "flex" }}>
                            <button className="Simple_Blue_Button margin_right_5px" onClick={() => this.handlerVerifyEditNotificationConfirmation()}>OK</button>
                            <button className="Simple_White_Button" onClick={() => { this.isEditNotificationPopupOpen = false; this.setState({}) }}>Cancel</button>
                        </div>
                    </div>
                </CustomModal>

                {/* Popup for verifying delete post category */}
                <CustomModal
                    shadow={true}
                    type="confirmation"
                    title={this.notifyHeader}
                    text={this.notifyContent}
                    open={this.isVerifyDeleteNotificationPopupOpen}
                    closeModal={() => { this.isVerifyDeleteNotificationPopupOpen = false; this.setState({}); }}
                >
                    <button className="Simple_Blue_Button margin_right_5px" onClick={() => this.handlerVerifyDeleteNotificationConfirmation()}>OK</button>
                    <button className="Simple_White_Button" onClick={() => { this.isVerifyDeleteNotificationPopupOpen = false; this.setState({}) }}>Cancel</button>
                </CustomModal>

                {/* Custom for notifing success */}
                <CustomModal
                    open={this.isNotifySuccessOpen}
                    shadow={true}
                    title={this.notifyHeader}
                    text={this.notifyContent}
                    type="alert_success"
                    closeModal={() => { this.isNotifySuccessOpen = false; this.setState({}) }}
                >
                </CustomModal>

                {/* Custom for notifing fail */}
                <CustomModal
                    open={this.isNotifyFailOpen}
                    shadow={true}
                    title={this.notifyHeader}
                    text={this.notifyContent}
                    type="alert_fail"
                    closeModal={() => { this.isNotifyFailOpen = false; this.setState({}) }}
                >
                </CustomModal>

            </div >
        );
    }

    handlerCategoryTypeDropDownClick = (dropdown_id, container_id) => {
        let dropdown = document.getElementById(dropdown_id);
        let container = document.getElementById(container_id);

        if (container.style.display === "none") {
            container.style.display = "block";
            dropdown.style.width = "100%";
        }
        else {
            container.style.display = "none";
            dropdown.style.width = "30%";
        }
    }

    //post category area:
    handlerNotificationItemClick = (e, id, name) => {
        let all_item = document.getElementsByName("Post_Category_List_Item");

        for (let i = 0; i < all_item.length; i++) {
            all_item[i].className = "Category_List_Item";
        }

        let category_item = document.getElementById("admin-post-category-item-" + id);
        category_item.className = "Category_List_Item_Activated";

        this.selected_category_id = id;
        this.selected_category_name = name;

        this.setState({
            canClickDeleteNotification: true,
            canClickEditNotification: true
        });

    }

    closeAllNotificationListItemActivated = () => {
        let all_item = document.getElementsByName("Post_Category_List_Item");
        for (let i = 0; i < all_item.length; i++) {
            all_item[i].className = "Category_List_Item";
        }
        this.setState({
            canClickDeleteNotification: false,
            canClickEditNotification: false
        });
    }

    //Add post category area:
    handlerClickAddNotification = () => {
        this.isAddNotificationPopupOpen = true;
        this.setState({});
    }

    handlerVerifyAddNewNotificationConfirmation = () => {
        this.notifyHeader = "Thành công";
        this.notifyContent = "Thêm thông báo thành công!";
        this.isAddNotificationPopupOpen = false;
        this.isNotifySuccessOpen = true;
        this.setState({});
    }

    //Edit post category item
    handlerClickEditNotification = () => {
        this.isEditNotificationPopupOpen = true;
        this.setState({});
    }

    handlerVerifyEditNotificationConfirmation = () => {
        this.notifyHeader = "Thành công";
        this.notifyContent = "Cập nhật thông báo thành công!";
        this.isEditNotificationPopupOpen = false;
        this.isNotifySuccessOpen = true;
        this.setState({});
    }

    //Delete post category item
    handlerClickDeleteNotification = () => {
        this.notifyHeader = "Xác nhận?";
        this.notifyContent = "Xác nhận xóa thông báo được chọn?";
        this.isVerifyDeleteNotificationPopupOpen = true;
        this.setState({});
    }

    handlerVerifyDeleteNotificationConfirmation = () => {
        this.notifyHeader = "Thành công";
        this.notifyContent = "Xóa thông báo thành công!";
        this.isVerifyDeleteNotificationPopupOpen = false;
        this.isNotifySuccessOpen = true;
        this.setState({});
    }

    handlerSetCurrentNotification = () => {
        this.notifyHeader = "Thành công";
        this.notifyContent = "Thay đổi thông báo hiện tại thành công!";
        this.isVerifyDeleteNotificationPopupOpen = false;
        this.isNotifySuccessOpen = true;
        this.setState({});
    }


}
export default Admin_PageNotification;