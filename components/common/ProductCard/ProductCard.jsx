import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { ShoppingCartOutlined, FavoriteBorder } from "@mui/icons-material";

const ProductCard = ({product}) => {
  const {
    name,
    description,
    image,
    price
  } = product;
  return (
    <Card sx={{ width:"100%" }}>
      <CardMedia
        component="img"
        alt={name}
        height="130"
        image={image}
        sx={{ objectFit:"contain" }}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
        >
          {`${description.slice(0,70)}...`}
        </Typography>
      </CardContent>
      <CardActions sx={{ display:"flex",justifyContent:"space-between",gap:"10px" , marginInline:"10px" }}>
        <div className="product-price">$ {price}</div>
        <div className="product-card-btns">
          <button className="product-card__btn"><FavoriteBorder fontSize="small" /></button>
          <button className="product-card__btn"><ShoppingCartOutlined fontSize="small" /></button>
        </div>
      </CardActions>
    </Card>
  );
};

export default ProductCard;