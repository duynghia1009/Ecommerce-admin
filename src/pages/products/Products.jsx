import { useEffect, useState } from "react";
import "./Products.scss";
import { DataGrid } from "@mui/x-data-grid";
import Add from "../../components/add/Add";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import {getAllProduct} from "../../actions/ProductAction"

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "name",
    type: "string",
    headerName: "name",
    width: 250,
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    width: 150,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 200,
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 150,
    type: "boolean",
  },
];

const Products = () => {

  const dispatch = useDispatch();
  const alert = useAlert();
  const [open, setOpen] = useState(false);
  const { productList } = useSelector((state) => state.productList);

  useEffect(() => {
    dispatch(getAllProduct(1,20));
  }, [dispatch])
  console.log(productList);
  const rows =[];
  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <button onClick={() => setOpen(true)}>Add New Products</button>
      </div>
      <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
          />  
      {open && <Add slug="product" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Products;
