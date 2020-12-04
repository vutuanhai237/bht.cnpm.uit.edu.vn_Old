// Document by VTH
// function: shows the top of posts in home page.
// props from parent: none
// state: expand or not
// dependency component: summary post
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { bindActionCreators } from "redux";
import { getHighlightPosts } from "redux/services/postServices"
class TopPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpand: "block",
        };
    }

    componentDidMount() {
        this.props.getHighlightPosts();
    }
    changeStatePost() {
        if (this.state.isExpand === "block") {
            this.setState({
                isExpand: "none",
            });
        } else {
            this.setState({
                isExpand: "block",
            });
        }
    }

    render() {
        const { highlights } = this.props;
        const style = {
            display: this.state.isExpand,
        };
        return (

            <div className="display-flex">
                <div className="Highlight_Title">BÀI VIẾT HAY</div>
                <div className="Highlight_Title_Underline"></div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        highlights: state.post.highlights,
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getHighlightPosts,
}, dispatch);

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(TopPost)
);

// <div id="group-post">
//                 <div onClick={this.changeStatePost.bind(this)}>
//                     <p className="title">BÀI VIẾT HAY</p>
//                 </div>

//                 <Card.Body style={style} className="card-body">
//                     <Row>
//                         {highlights.map((item) => {
//                             return (
//                                 <Col sm={12} md={4}>
//                                     <SummaryPost item={item}></SummaryPost>
//                                 </Col>
//                             );
//                         })}
//                     </Row>
//                 </Card.Body>
//             </div>