import React from 'react';
import RemovableListItem from '../RemovableListItem';
import PropTypes from 'prop-types';


const List = (props) => {
    const {items, removeItem} = props;

    return (
        <ul style={{paddingLeft: 0}}>
            {items.map(item =>  
                <RemovableListItem key={item.key} text={item.text} id={item.key} removeItem={removeItem}/>   
            )}
        </ul>
    )
}

List.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      })
    ),
    removeItem: PropTypes.func
  };

  export default List;