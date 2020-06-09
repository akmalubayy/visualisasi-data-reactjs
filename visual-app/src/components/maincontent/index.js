import React from 'react';
import { Container, Row, Col, StyleSheet } from 'reactstrap';
import ReactDOM from 'react-dom';

const HomeContent = (props) => {
    return (
        <div>
    <div class="card" style={{border:1, borderRadius:5, padding:20, width:'100%', height:'20%', boxShadow:2, display:'inline-block', marginRight:8, marginBlockEnd:17}}>
        <p class="title" style={{fontWeight:'bold', fontSize:18, marginBottom:8}}>Visual App</p>
        <p style={{margin:0}}>Deskripsi</p>
    </div>
    <div>
    <div class="card" style={{border:1, borderRadius:5, padding:20, width:'85%', height:'20%', boxShadow:2, display:'inline-block', marginRight:8, marginBlockEnd:17}}>
        <p class="title" style={{fontWeight:'bold', fontSize:18, marginBottom:8}}>Visual App</p>
        <p style={{margin:0}}>Deskripsi</p>
    </div>
    </div>
        </div>
    )
}



// ReactDOM.render(
//         <HomeContent/>,
//         document.getElementById('konten')
// );

export default HomeContent;