import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Course from "./Course";
import Typography from "@material-ui/core/Typography";

class CourseList extends Component {
  state = {
    courses: [],
    searchString: ""
  };
  componentDidMount() {
    // console.log("CourseList - componentDidMount() - Obteniendo cursos...");
    this.getCourses();
  }
  getCourses = () => {
    const result = [
      {
        id: 1,
        title: "React",
        description: "React para principiantes.",
        details: "Descripción del curso...",
        imageUrl:
          "http://connectedcourses.net/wp-content/uploads/2015/01/course.png"
      },
      {
        id: 2,
        title: "Material-UI",
        description: "Curso sobre Material-UI",
        details: "Descripción del curso...",
        imageUrl:
          "http://connectedcourses.net/wp-content/uploads/2015/01/course.png"
      },
      {
        id: 3,
        title: "FlowJS",
        description: "Curso sobre FlowJS",
        details: "Descripción del curso...",
        imageUrl:
          "http://connectedcourses.net/wp-content/uploads/2015/01/course.png"
      }
    ];
    this.setState({ courses: result });
    // console.log("CourseList - getCourses() - Cursos obtenidos!");
  };

  onSearchInputChange = event => {
    const value = event.currentTarget.value;
    if (value) {
      this.setState({ searchString: value });
    } else {
      this.setState({ searchString: "" });
    }
    this.getCourses();
  };
  render() {
    // console.log(
    //   "CourseList - render() - Cursos disponibles: " + this.state.courses.length
    // );
    return (
      <React.Fragment>
        {this.state.courses ? (
          <React.Fragment>
            <TextField
              style={{ padding: 24 }}
              id="searchInput"
              placeholder="Buscar cursos"
              margin="normal"
              onChange={this.onSearchInputChange}
            />
            <Grid container spacing={24} style={{ padding: 24 }}>
              {this.state.searchString
                ? this.state.courses
                    .filter(
                      fc =>
                        fc.title
                          .toLowerCase()
                          .indexOf(this.state.searchString.toLowerCase()) !==
                          -1 ||
                        fc.description
                          .toLowerCase()
                          .indexOf(this.state.searchString.toLowerCase()) !== -1
                    )
                    .map(c => (
                      <Grid item xs={12} sm={6} lg={4} xl={3} key={c.id}>
                        <Course course={c} />
                      </Grid>
                    ))
                : this.state.courses.map(c => (
                    <Grid item xs={12} sm={6} lg={4} xl={3} key={c.id}>
                      <Course course={c} />
                    </Grid>
                  ))}
            </Grid>
          </React.Fragment>
        ) : (
          <Typography variant="headline">No hay cursos disponibles.</Typography>
        )}
      </React.Fragment>
    );
  }
}

export default CourseList;
