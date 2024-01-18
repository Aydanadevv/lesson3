import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link, useNavigate } from "react-router-dom";
const Menu = ({
  readProduct,
  data,
  deleteProduct,
  addToProduct,
  editProduct,
}) => {
  useEffect(() => {
    readProduct();
  }, []);

  // const navigate = useNavigate();
  return (
    <div>
      <section id="menu">
        <div className="container">
          <div className="menu">
            <h3>MENU</h3>
            <div className="cards">
              {data.map((el, index) => (
                <Card
                  sx={{
                    width: "260px",
                    height: "280px",
                    padding: "20px",
                    borderRadius: "15px",
                  }}
                >
                  <CardMedia
                    sx={{ height: 140 }}
                    image={el.image}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {el.name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      {el.price}
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      marginTop: "-20px",
                      display: "flex",
                      justifyContent: "space-around",
                    }}
                  >
                    <button onClick={() => addToProduct(el.id)}>
                      <BookmarkBorderIcon />
                    </button>
                    <Link to={`/edit/${el.id}`}>
                      <button onClick={() => editProduct(index)}>
                        <EditNoteIcon />
                      </button>
                    </Link>
                    <button onClick={() => deleteProduct(el.id)}>
                      <DeleteIcon />
                    </button>
                  </CardActions>
                </Card>
              ))}
              ;
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
