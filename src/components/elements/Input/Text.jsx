import React from 'react';

const TextView = (className, params) => (<input type="text" className={className || ''} {...params}/>);

export default TextView;
