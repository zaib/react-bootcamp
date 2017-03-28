import React, {Component} from 'react';
import $ from 'jquery';

class Progressbar extends Component {


    componentDidMount(){
        $(".progress-bar").animate({
            width: "70%"
        }, 2500 );
    }

    render() {
      
        return (
            <div className="progress">
                <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                    <span className="sr-only">70% Complete</span>
                </div>
            </div>
        );
    }
}

export default Progressbar;