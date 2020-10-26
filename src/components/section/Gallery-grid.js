import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import imagea from './galleryGrid/image1.jpg';
import imageb from './galleryGrid/Image2.jpg';
import imagec from './galleryGrid/Image3.jpg';
import imaged from './galleryGrid/Image4.jpg';
import imagee from './galleryGrid/Image5.jpg';
import imagef from './galleryGrid/Image6.jpg';
import imageg from './galleryGrid/Image7.jpg';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
}));


 const tileData = [
   {
     img: imagea,
     title: 'Image',
     author: 'author',
     cols: 2,
   },
   {
    img: imageb,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: imagec,
    title: 'Image',
    author: 'author',
    cols: 3,
  },
  {
    img: imaged,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: imagee,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    img: imagef,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    img: imageg,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
 ];
 
export default function ImageGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3} style={{ marginTop: "10px", marginBottom: "10px"}}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}