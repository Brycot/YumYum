import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    deleteFilters,
    getAllCuisines,
    getAllDiets,
    sortByCreated,
    sortByCuisine,
    sortByDiet,
    sortByName,
    sortByScore,
} from '../redux/actions';

export const useFilters = (resetPage) => {
    const dispatch = useDispatch();
    const cuisines = useSelector((state) => state?.cuisines);
    const diets = useSelector((state) => state?.diets);

    const handleSort = (event) => {
        resetPage(1);
        const selectedValue = event.target.value;
        dispatch(sortByName(selectedValue));
    };
    const handleSortByCuisine = (event) => {
        resetPage(1);
        const selectedValue = event.target.value;
        dispatch(sortByCuisine(selectedValue));
    };
    const handleSortByDiet = (event) => {
        resetPage(1);
        const selectedValue = event.target.value;
        dispatch(sortByDiet(selectedValue));
    };
    const handleSortByScore = (event) => {
        resetPage(1);
        const selectedValue = event.target.value;
        dispatch(sortByScore(selectedValue));
    };
    const handleSortByCreated = (event) => {
        resetPage(1);
        const selectedValue = event.target.value;
        dispatch(sortByCreated(selectedValue));
    };

    const handleDeleteFilters = () => {
        dispatch(deleteFilters());
        document.getElementById('sort').value = 'sort';
        document.getElementById('origin').value = 'All';
        document.getElementById('created').value = 'All';
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
        handleSortByCreated,
    };
};
