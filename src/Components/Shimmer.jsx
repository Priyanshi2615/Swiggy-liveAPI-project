import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import "../App.css";

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array.from({ length: 12 }).map((_, index) => (
        <Card key={index} className="shimmer-card">
          <CardMedia className="shimmer-media" />
          <CardContent>
            <Typography className="shimmer-text shimmer-title" />
            <Typography className="shimmer-text shimmer-subtitle" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Shimmer;
