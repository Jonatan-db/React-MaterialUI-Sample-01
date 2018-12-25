import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const Course = props => {
  return (
    <React.Fragment>
      {props.course ? (
        <Card>
          <CardMedia
            style={{ height: 0, paddingTop: "56.25%" }}
            image={props.course.imageUrl}
            title={props.course.title}
          />

          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {props.course.title}
            </Typography>

            <Typography component="p">{props.course.description}</Typography>
          </CardContent>

          <CardActions>
            <Button size="small" href={props.course.imageUrl} target="_blank">
              Go to course...
            </Button>
          </CardActions>
        </Card>
      ) : null}
    </React.Fragment>
  );
};

export default Course;
