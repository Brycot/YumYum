import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getRecipeDetail } from '../../redux/actions';

export const DetailPage = () => {
    const { recipeId } = useParams();
    const dispatch = useDispatch();
    const { id, image, title, servings, dietas } = useSelector(
        (state) => state?.recipe
    );

    useEffect(() => {
        dispatch(getRecipeDetail(recipeId));
    }, []);
    return (
        <main>
            <img src={image} alt="" />
            <h3>{title}</h3>
        </main>
    );
};
