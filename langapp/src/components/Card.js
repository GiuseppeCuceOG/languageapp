import React from 'react';

class Card extends React.Component {
    
     render() {      
      return <p>{this.props.dict[0].eng}<br/>
                {this.props.dict[0].rus}<br/>
                {this.props.dict[0].fin}<br/>
                {this.props.dict[0].ita}</p>;
    }
}

export default Card;