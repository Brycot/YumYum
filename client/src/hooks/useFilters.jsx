import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    deleteFilters,
    getAllCuisines,
    getAllDiets,
    sortByCuisine,
    sortByDiet,
    sortByName,
    sortByScore,
} from '../redux/actions';

export const useFilters = () => {
    const dispatch = useDispatch();
    const cuisines = useSelector((state) => state?.cuisines);
    const diets = useSelector((state) => state?.diets);

    const handleSort = (event) => {
        const selectedValue = event.target.value;
        dispatch(sortByName(selectedValue));
    };
    const handleSortByCuisine = (event) => {
        const selectedValue = event.target.value;
        dispatch(sortByCuisine(selectedValue));
    };
    const handleSortByDiet = (event) => {
        const selectedValue = event.target.value;
        dispatch(sortByDiet(selectedValue));
    };
    const handleSortByScore = (event) => {
        const selectedValue = event.target.value;
        dispatch(sortByScore(selectedValue));
    };

    const handleDeleteFilters = () => {
        dispatch(deleteFilters());
        document.getElementById('sort').value = 'sort';
        document.getElementById('origin').value = 'All';
        document.getElementById('diets').value = 'All';
        document.getElementById('healthScore').value = 'All';
    };
    useEffect(() => {
        dispatch(getAllCuisines());
        dispatch(getAllDiets());
    }, []);

    return {
        cuisines,
        diets,
        handleSort,
        handleSortByCuisine,
        handleSortByDiet,
        handleSortByScore,
        handleDeleteFilters,
    };
};
