import React from 'react';
import SidebarState from './sidebar/SidebarState';

export default function State(props) {
  return (
    <SidebarState>
        {props.children}
    </SidebarState>
  )
}