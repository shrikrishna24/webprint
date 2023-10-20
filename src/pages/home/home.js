import React from "react";
import "./home.css";
import Card from "../../components/card/card";
import TextField from "../../components/textfield/textField";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-left">
        <div className="search-bar">
          <img
            src={require("../../assets/search.png")}
            alt=""
            height="20px"
            width="20px"
          />
          <TextField name="Search" placeholder="Search" type="text" />
        </div>
        <div className="home-heading">
          <h3>Hey John, Welcome to Webprint</h3>
        </div>

        <div className="data-card">
          <Card ctype="card-primary"></Card>
          <Card ctype="card-primary"></Card>
          <Card ctype="card-primary"></Card>
        </div>

        <Card ctype="card-primary ">
          <div>
            <h4>October,2023</h4>
          </div>
          <div className="date-box">
            <Card ctype="card-secondary"></Card>
            <Card ctype="card-secondary"></Card>
            <Card ctype="card-secondary"></Card>
            <Card ctype="card-secondary"></Card>
            <Card ctype="card-secondary"></Card>
            <Card ctype="card-secondary"></Card>
            <Card ctype="card-secondary"></Card>
            <Card ctype="card-secondary"></Card>
          </div>
        </Card>
        <Card ctype="card-primary">
          <div className="job-heading">
            <div>
              <h4>Recent Jobs</h4>
            </div>
            <div>
              <h4>View all</h4>
            </div>
          </div>
          <table className="job-table">
            <thead>
              <th>Job Name</th>
              <th>Job ID</th>
              <th>File Name</th>
              <th>Filament used</th>
              <th>Time required</th>
            </thead>
            <tbody>
              <tr>
                <td>Job</td>
                <td>Filename</td>
                <td>ID</td>
                <td>10gm</td>
                <td>2hrs</td>
              </tr>
              <tr>
                <td>Job</td>
                <td>Filename</td>
                <td>ID</td>
                <td>10gm</td>
                <td>2hrs</td>
              </tr>
              <tr>
                <td>Job</td>
                <td>Filename</td>
                <td>ID</td>
                <td>10gm</td>
                <td>2hrs</td>
              </tr>
              <tr>
                <td>Job</td>
                <td>Filename</td>
                <td>ID</td>
                <td>10gm</td>
                <td>2hrs</td>
              </tr>
              <tr>
                <td>Job</td>
                <td>Filename</td>
                <td>ID</td>
                <td>10gm</td>
                <td>2hrs</td>
              </tr>
            </tbody>
          </table>
        </Card>
      </div>

      <div className="home-right">
        <Card ctype="card-primary">
          <img src={require("../../assets/bell.png")} alt="" />
          <img src={require("../../assets/profile-user.png")} alt="" />
        </Card>

        <Card ctype="card-primary"></Card>

        <Card ctype="card-primary"></Card>
      </div>
    </div>
  );
}
