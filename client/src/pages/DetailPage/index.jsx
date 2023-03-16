import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getRecipeDetail } from '../../redux/actions';

export const DetailPage = () => {
    const { recipeId } = useParams();
    const dispatch = useDispatch();
    const { id, image, title, servings, diets, steps } = useSelector(
        (state) => state?.recipe
    );
    console.log(steps);
    useEffect(() => {
        dispatch(getRecipeDetail(recipeId));
    }, []);
    return (
        <main>
            <h1>{title}</h1>
            <div>
                <p>Health Score: </p>
                <p>150</p>
            </div>
            <p>Steps</p>
            <section>
                <p>1</p>
                <p></p>
            </section>
            <img src="" alt="" />
            <section>
                <div>
                    <p>20 minutes</p>
                    <p>mexican</p>
                </div>
                <div>
                    <p>ingredients</p>
                    <p>serves: </p>
                </div>
            </section>
        </main>
    );
};
