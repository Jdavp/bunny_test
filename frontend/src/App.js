import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Modal from "./components/Modal";

class App extends React.Component {
    render (){
    return ( 
      <div className="App"/>
            <div>
        <div class="header-blue" style="padding-bottom: 10px;">
            <nav class="navbar navbar-light navbar-expand-md navigation-clean-search">
                <div class="container-fluid"><a class="navbar-brand" href="#">Juan Diego Valencia&nbsp;</a></div>
            </nav>
            <div class="container hero" style="margin-top: 4px;">
                <div class="col-12 col-lg-6 col-xl-5 offset-xl-1" style="margin-left: 5px;">
                    <h1 style="margin-top: 5px;">Manage app for Bunny user's</h1>
                    <p>You can create or modified task for user&nbsp;</p>
                </div>
            </div>
        </div>
    </div>
    <div class="container"/>
        <div class="table-responsive"/>
            <table class="table"/>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>USER</th>
                        <th>USER OPTIONS</th>
                    </tr>
                </thead>
                <tbody id="user_info"/>
                    <tr/>
                        <td id="nameuser">Cell 1</td>
                        <td>Cell 2</td>
                        <td class="text-center d-flex m-auto align-items-sm-end"><button class="btn btn-primary border rounded" type="button" style="margin-right: 5px;">Update</button><button class="btn btn-primary border rounded" type="button" style="background-color: rgb(255,15,0);margin-right: 5px;"/>Delete<button/>
                            <button
                                class="btn btn-primary border rounded" type="button">Task</button>
                                <div class="modal fade" role="dialog" tabindex="-1"/>
                                    <div class="modal-dialog" role="document"/>
                                        <div class="modal-content"/>
                                            <div class="modal-header">
                                                <h4 class="modal-title">Task</h4><button class="btn btn-primary" type="button">+</button>
                                                <div class="table-responsive">
                                                    <table class="table">
                                                        <thead>
                                                            <tr>
                                                                <th>Description</th>
                                                                <th>State</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Cell 1</td>
                                                                <td>
                                                                    <div class="form-check"><input class="form-check-input" type="radio" id="formCheck-1"/><label class="form-check-label" for="formCheck-1">Done</label><div/>
                                                                <td/>
                                                            <tr/>
                                                            <tr></tr>
                                                        <tbody/>
                                                    <table/>
                                                <div/><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button></div>
                                            <div class="modal-body">
                                                <p>User_name</p>
                                                <div class="table-responsive">
                                                    <table class="table">
                                                        <thead>
                                                            <tr>
                                                                <th>ID</th>
                                                                <th>Description</th>
                                                                <th>State</th>
                                                                <th></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Cell 1</td>
                                                                <td>Cell 2</td>
                                                                <td>
                                                                    <div class="form-check"><input class="form-check-input" type="radio" id="formCheck-2"><label class="form-check-label" for="formCheck-2">Done</label></div>
                                                                <td/>
                                                                <td><button class="btn btn-primary" type="button">Update</button></td>
                                                            <tr/>
                                                            <tr></tr>
                                                        <tbody/>
                                                    <table/>
                                                <div/>
                                            <div/>
                                            <div class="modal-footer"><button class="btn btn-light" type="button" data-dismiss="modal">Close</button><button class="btn btn-primary" type="button">Save</button></div>
                                        <div/>
                                    <div/>
                                <div/>
                        <td/>
                    <tr/>
                    <tr></tr>
                <tbody/>
            <table/>
        <div/>
    <div/>
    <div class="footer-basic"/>
        <footer>
            <div class="social"><a href="https://github.com/Jdavp"><i class="icon ion-social-github"></i></a><a href="https://www.linkedin.com/in/juandiegoalejandrovalenciape%C3%B1a/"><i class="icon ion-social-linkedin"></i></a><a href="https://twitter.com/jdavp"><i class="icon ion-social-twitter"></i></a></div>
        </footer>
    <div/>
      <div/>
    );
  }
}

export default App;
