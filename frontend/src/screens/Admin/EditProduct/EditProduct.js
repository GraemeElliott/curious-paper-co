import React, { useContext, useEffect, useReducer, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Store } from '../../../store';
import { getError } from '../../../utils';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Helmet } from 'react-helmet-async';
import LoadingComponent from '../../../components/partials/LoadingComponent/LoadingComponent';
import MessageAlert from '../../../components/partials/MessageAlert/MessageAlert';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import ListGroup from 'react-bootstrap/ListGroup';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    case 'UPDATE_REQUEST':
      return { ...state, loadingUpdate: true };
    case 'UPDATE_SUCCESS':
      return { ...state, loadingUpdate: false };
    case 'UPDATE_FAIL':
      return { ...state, loadingUpdate: false };
    case 'UPLOAD_REQUEST':
      return { ...state, loadingUpload: true, errorUpload: '' };
    case 'UPLOAD_SUCCESS':
      return {
        ...state,
        loadingUpload: false,
        errorUpload: '',
      };
    case 'UPLOAD_FAIL':
      return { ...state, loadingUpload: false, errorUpload: action.payload };
    default:
      return state;
  }
};
export default function EditProduct() {
  const navigate = useNavigate();
  const params = useParams(); // /product/:id
  const { id: productId } = params;

  const { state } = useContext(Store);
  const { userInfo } = state;
  const [{ loading, error, loadingUpdate, loadingUpload }, dispatch] =
    useReducer(reducer, {
      loading: true,
      error: '',
    });

  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [image, setImage] = useState('');
  const [images, setImages] = useState([]);
  const [brand, setBrand] = useState('');
  const [brandId, setBrandId] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [productCollection, setProductCollection] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [countInStock, setCountInStock] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/product/${productId}`);
        setName(data.name);
        setSlug(data.slug);
        setImage(data.image);
        setImages(data.images);
        setBrand(data.brand);
        setBrandId(data.brandId);
        setCategory(data.category);
        setSubcategory(data.subcategory);
        setProductCollection(data.productCollection);
        setDescription(data.description);
        setPrice(data.price);
        setCountInStock(data.countInStock);
        dispatch({ type: 'FETCH_SUCCESS' });
      } catch (err) {
        dispatch({
          type: 'FETCH_FAIL',
          payload: getError(err),
        });
      }
    };
    fetchData();
  }, [productId]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: 'UPDATE_REQUEST' });
      await axios.put(
        `/products/${productId}`,
        {
          _id: productId,
          name,
          slug,
          image,
          images,
          brand,
          brandId,
          category,
          subcategory,
          productCollection,
          description,
          price,
          countInStock,
        },
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: 'UPDATE_SUCCESS',
      });
      toast.success('Product updated successfully');
      navigate('/admin/products');
    } catch (err) {
      toast.error(getError(err));
      dispatch({ type: 'UPDATE_FAIL' });
    }
  };

  const uploadFileHandler = async (e, forImages) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('file', file);
    try {
      dispatch({ type: 'UPLOAD_REQUEST' });
      const { data } = await axios.post('/upload', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          authorization: `Bearer ${userInfo.token}`,
        },
      });
      dispatch({ type: 'UPLOAD_SUCCESS' });

      if (forImages) {
        setImages([...images, data.secure_url]);
      } else {
        setImage(data.secure_url);
      }
      toast.success('Image uploaded successfully. Click Update to apply.');
    } catch (err) {
      toast.error(getError(err));
      dispatch({ type: 'UPLOAD_FAIL', payload: getError(err) });
    }
  };

  const deleteFileHandler = async (fileName, f) => {
    console.log(fileName, f);
    console.log(images);
    console.log(images.filter((x) => x !== fileName));
    setImages(images.filter((x) => x !== fileName));
    toast.success('Image removed successfully. Click Update to apply.');
  };

  return (
    <Container className="small-container">
      <Helmet>
        <title>Edit Product ${productId}</title>
      </Helmet>
      <h1>Edit Product {productId}</h1>

      {loading ? (
        <LoadingComponent></LoadingComponent>
      ) : error ? (
        <MessageAlert variant="danger">{error}</MessageAlert>
      ) : (
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="slug">
            <Form.Label>Slug</Form.Label>
            <Form.Control
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="image">
            <Form.Label>Image File</Form.Label>
            <Form.Control
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="imageFile">
            <Form.Label>Upload Image</Form.Label>
            <Form.Control type="file" onChange={uploadFileHandler} />
            {loadingUpload}
          </Form.Group>
          <Form.Group className="mb-3" controlId="additionalImage">
            <Form.Label>Additional Images</Form.Label>
            {images.length === 0 && <MessageAlert>No image</MessageAlert>}
            <ListGroup variant="flush">
              {images.map((x) => (
                <ListGroup.Item key={x}>
                  {x}
                  <Button variant="light" onClick={() => deleteFileHandler(x)}>
                    <i className="fa fa-times-circle"></i>
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="additionalImageFile">
            <Form.Label>Upload Aditional Image</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => uploadFileHandler(e, true)}
            />
            {loadingUpload && <LoadingComponent></LoadingComponent>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="brand">
            <Form.Label>Brand</Form.Label>
            <Form.Control
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="brandId">
            <Form.Label>Brand ID</Form.Label>
            <Form.Control
              value={brandId}
              onChange={(e) => setBrandId(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="category">
            <Form.Label>Category</Form.Label>
            <Form.Control
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="subcategory">
            <Form.Label>Subcategory</Form.Label>
            <Form.Control
              value={subcategory}
              onChange={(e) => setSubcategory(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="productCollection">
            <Form.Label>Collection(s)</Form.Label>
            <Form.Control
              value={productCollection}
              onChange={(e) => setProductCollection(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="countInStock">
            <Form.Label>Count In Stock</Form.Label>
            <Form.Control
              value={countInStock}
              onChange={(e) => setCountInStock(e.target.value)}
              required
            />
          </Form.Group>
          <div className="mb-3">
            <Button disabled={loadingUpdate} type="submit">
              Update
            </Button>
            {loadingUpdate && <LoadingComponent></LoadingComponent>}
          </div>
        </Form>
      )}
    </Container>
  );
}
