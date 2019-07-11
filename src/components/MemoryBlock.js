import React from "react";

class memoryCard extends React.Component{
    render(){
        return (
            <div class="card-body text-center">
                <span role="img" aria-label="emoji" style={{ fontSize: "64px" }}>{this.props.emoji}</span>
            </div>
        )
    }
}

export default memoryCard;