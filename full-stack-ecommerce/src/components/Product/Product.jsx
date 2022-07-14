import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import { AddShoppingCart, CallMissedSharp } from '@material-ui/icons';
import { mergeClasses } from '@material-ui/styles';

const Product = () => {
  return (
    <div>
        <Card className={classes.root}>
            <CardMedia className={classes.media} image='' />

        </Card>
    </div>
  )
}

export default Product