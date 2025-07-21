"use client"

import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { Skeleton } from "../ui/skeleton";

import { FaArrowRightLong } from "react-icons/fa6";

interface Product {
    id: number;
    name: string;
    price: number;
    imageUrl?: string;
    description?: string;
}

interface Category {
    id: number;
    name: string;
    imageUrl?: string;
    products: Product[];
}
export const categories = [
    {
        id: 1,
        name: "Cats",
        imageUrl: "https://example.com/cats.jpg",
        products: [
            { id: 1, name: "Корм для кошек", description: "Сухой корм",  categoryId:1, price: 3, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBkcs3jM8apyDIrR3qAGw9Yi7Wt2U6xvNdfbOj" },
            { id: 2, name: "Корм для кошек", description: "Сухой корм",  categoryId:1, price: 3, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBkcs3jM8apyDIrR3qAGw9Yi7Wt2U6xvNdfbOj" },
            { id: 3, name: "Корм для кошек", description: "Сухой корм",  categoryId:1, price: 3, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBkcs3jM8apyDIrR3qAGw9Yi7Wt2U6xvNdfbOj" },
            { id: 4, name: "Корм для кошек", description: "Сухой корм",  categoryId:1, price: 3, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBkcs3jM8apyDIrR3qAGw9Yi7Wt2U6xvNdfbOj" },
            { id: 5, name: "Корм для кошек", description: "Сухой корм",  categoryId:1, price: 3, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBkcs3jM8apyDIrR3qAGw9Yi7Wt2U6xvNdfbOj" },
            { id: 6, name: "Корм для кошек", description: "Сухой корм",  categoryId:1, price: 3, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBkcs3jM8apyDIrR3qAGw9Yi7Wt2U6xvNdfbOj" },
            { id: 7, name: "Корм для кошек", description: "Сухой корм",  categoryId:1, price: 3, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBkcs3jM8apyDIrR3qAGw9Yi7Wt2U6xvNdfbOj" },
            { id: 8, name: "Корм для кошек", description: "Сухой корм",  categoryId:1, price: 3, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBkcs3jM8apyDIrR3qAGw9Yi7Wt2U6xvNdfbOj" },
            { id: 9, name: "Корм для кошек", description: "Сухой корм",  categoryId:1, price: 3, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBkcs3jM8apyDIrR3qAGw9Yi7Wt2U6xvNdfbOj" },
            { id: 10, name: "Корм для кошек", description: "Сухой корм", categoryId:1, price: 3, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBkcs3jM8apyDIrR3qAGw9Yi7Wt2U6xvNdfbOj" },
        ],
    },
    {
        id: 2,
        name: "Dogs",
        imageUrl: "https://example.com/dogs.jpg",
        products: [
            { id: 11, name: "Корм для собак", categoryId:2, description: "Сухой корм", price: 5, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBg6KcUN4LMQ4kT2m8Y3hBZj7OgcszotRdxKvl" },
            { id: 12, name: "Корм для собак", categoryId:2, description: "Сухой корм", price: 5, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBg6KcUN4LMQ4kT2m8Y3hBZj7OgcszotRdxKvl" },
            { id: 13, name: "Корм для собак", categoryId:2, description: "Сухой корм", price: 5, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBg6KcUN4LMQ4kT2m8Y3hBZj7OgcszotRdxKvl" },
            { id: 14, name: "Корм для собак", categoryId:2, description: "Сухой корм", price: 5, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBg6KcUN4LMQ4kT2m8Y3hBZj7OgcszotRdxKvl" },
            { id: 15, name: "Корм для собак", categoryId:2, description: "Сухой корм", price: 5, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBg6KcUN4LMQ4kT2m8Y3hBZj7OgcszotRdxKvl" },
            { id: 16, name: "Корм для собак", categoryId:2, description: "Сухой корм", price: 5, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBg6KcUN4LMQ4kT2m8Y3hBZj7OgcszotRdxKvl" },
            { id: 17, name: "Корм для собак", categoryId:2, description: "Сухой корм", price: 5, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBg6KcUN4LMQ4kT2m8Y3hBZj7OgcszotRdxKvl" },
            { id: 18, name: "Корм для собак", categoryId:2, description: "Сухой корм", price: 5, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBg6KcUN4LMQ4kT2m8Y3hBZj7OgcszotRdxKvl" },
            { id: 19, name: "Корм для собак", categoryId:2, description: "Сухой корм", price: 5, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBg6KcUN4LMQ4kT2m8Y3hBZj7OgcszotRdxKvl" },
            { id: 20, name: "Корм для собак", categoryId:2, description: "Сухой корм", price: 5, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBg6KcUN4LMQ4kT2m8Y3hBZj7OgcszotRdxKvl" },
        ],
    },
    {
        id: 3,
        name: "Birds",
        imageUrl: "https://example.com/birds.jpg",
        products: [
            { id: 21, name: "Корм для птиц",   categoryId:3, description: "Зерновая смесь", price: 2, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBHIS36AazeftVSoAOkTB81Qh7ig6UFZnc9XRG" },
            { id: 22, name: "Корм для птиц",   categoryId:3, description: "Зерновая смесь", price: 2, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBHIS36AazeftVSoAOkTB81Qh7ig6UFZnc9XRG" },
            { id: 23, name: "Корм для птиц",   categoryId:3, description: "Зерновая смесь", price: 2, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBHIS36AazeftVSoAOkTB81Qh7ig6UFZnc9XRG" },
            { id: 24, name: "Корм для птиц",   categoryId:3, description: "Зерновая смесь", price: 2, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBHIS36AazeftVSoAOkTB81Qh7ig6UFZnc9XRG" },
            { id: 25, name: "Корм для птиц",   categoryId:3, description: "Зерновая смесь", price: 2, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBHIS36AazeftVSoAOkTB81Qh7ig6UFZnc9XRG" },
            { id: 26, name: "Корм для птиц",   categoryId:3, description: "Зерновая смесь", price: 2, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBHIS36AazeftVSoAOkTB81Qh7ig6UFZnc9XRG" },
            { id: 27, name: "Корм для птиц",   categoryId:3, description: "Зерновая смесь", price: 2, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBHIS36AazeftVSoAOkTB81Qh7ig6UFZnc9XRG" },
            { id: 28, name: "Корм для птиц",   categoryId:3, description: "Зерновая смесь", price: 2, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBHIS36AazeftVSoAOkTB81Qh7ig6UFZnc9XRG" },
            { id: 29, name: "Корм для птиц",   categoryId:3, description: "Зерновая смесь", price: 2, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBHIS36AazeftVSoAOkTB81Qh7ig6UFZnc9XRG" },
            { id: 30, name: "Корм для птиц",  categoryId:3, description: "Зерновая смесь", price: 2, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBHIS36AazeftVSoAOkTB81Qh7ig6UFZnc9XRG" },
        ],
    },
    {
        id: 4,
        name: "Fish",
        imageUrl: "https://example.com/fish.jpg",
        products: [
            { id: 31, name: "Корм для рыб",   categoryId:4, description: "Гранулы для рыб", price: 4, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBdmdSqVkNyfUVIH48LMWOvljCKRaEJuzibPAn" },
            { id: 32, name: "Корм для рыб",   categoryId:4, description: "Гранулы для рыб", price: 4, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBdmdSqVkNyfUVIH48LMWOvljCKRaEJuzibPAn" },
            { id: 33, name: "Корм для рыб",   categoryId:4, description: "Гранулы для рыб", price: 4, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBdmdSqVkNyfUVIH48LMWOvljCKRaEJuzibPAn" },
            { id: 34, name: "Корм для рыб",   categoryId:4, description: "Гранулы для рыб", price: 4, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBdmdSqVkNyfUVIH48LMWOvljCKRaEJuzibPAn" },
            { id: 35, name: "Корм для рыб",   categoryId:4, description: "Гранулы для рыб", price: 4, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBdmdSqVkNyfUVIH48LMWOvljCKRaEJuzibPAn" },
            { id: 36, name: "Корм для рыб",   categoryId:4, description: "Гранулы для рыб", price: 4, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBdmdSqVkNyfUVIH48LMWOvljCKRaEJuzibPAn" },
            { id: 37, name: "Корм для рыб",   categoryId:4, description: "Гранулы для рыб", price: 4, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBdmdSqVkNyfUVIH48LMWOvljCKRaEJuzibPAn" },
            { id: 38, name: "Корм для рыб",   categoryId:4, description: "Гранулы для рыб", price: 4, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBdmdSqVkNyfUVIH48LMWOvljCKRaEJuzibPAn" },
            { id: 39, name: "Корм для рыб",   categoryId:4, description: "Гранулы для рыб", price: 4, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBdmdSqVkNyfUVIH48LMWOvljCKRaEJuzibPAn" },
            { id: 40, name: "Корм для рыб",  categoryId:4, description: "Гранулы для рыб", price: 4, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBdmdSqVkNyfUVIH48LMWOvljCKRaEJuzibPAn" },
        ],
    },
    {
        id: 5,
        name: "Small Animals",
        imageUrl: "https://example.com/small.jpg",
        products: [
            { id: 41, name: "Корм для хомяков", description: "Зерновой микс", price: 3.5, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KB0SkNtbpnBA4Edalu3gWDyeZwMITVLGF5qRjb" },
            { id: 42, name: "Корм для хомяков", description: "Зерновой микс", price: 3.5, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KB0SkNtbpnBA4Edalu3gWDyeZwMITVLGF5qRjb" },
            { id: 43, name: "Корм для хомяков", description: "Зерновой микс", price: 3.5, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KB0SkNtbpnBA4Edalu3gWDyeZwMITVLGF5qRjb" },
            { id: 44, name: "Корм для хомяков", description: "Зерновой микс", price: 3.5, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KB0SkNtbpnBA4Edalu3gWDyeZwMITVLGF5qRjb" },
            { id: 45, name: "Корм для хомяков", description: "Зерновой микс", price: 3.5, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KB0SkNtbpnBA4Edalu3gWDyeZwMITVLGF5qRjb" },
            { id: 46, name: "Корм для хомяков", description: "Зерновой микс", price: 3.5, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KB0SkNtbpnBA4Edalu3gWDyeZwMITVLGF5qRjb" },
            { id: 47, name: "Корм для хомяков", description: "Зерновой микс", price: 3.5, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KB0SkNtbpnBA4Edalu3gWDyeZwMITVLGF5qRjb" },
            { id: 48, name: "Корм для хомяков", description: "Зерновой микс", price: 3.5, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KB0SkNtbpnBA4Edalu3gWDyeZwMITVLGF5qRjb" },
            { id: 49, name: "Корм для хомяков", description: "Зерновой микс", price: 3.5, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KB0SkNtbpnBA4Edalu3gWDyeZwMITVLGF5qRjb" },
            { id: 50, name: "Корм для хомяков", description: "Зерновой микс", price: 3.5, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KB0SkNtbpnBA4Edalu3gWDyeZwMITVLGF5qRjb" },
        ],
    },
    {
        id: 6,
        name: "Reptiles",
        imageUrl: "https://example.com/reptiles.jpg",
        products: [
            { id: 51, name: "Корм для рептилий", description: "Сушёные насекомые", price: 6, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBdmdSqVkNyfUVIH48LMWOvljCKRaEJuzibPAn" },
            { id: 52, name: "Корм для рептилий", description: "Сушёные насекомые", price: 6, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBdmdSqVkNyfUVIH48LMWOvljCKRaEJuzibPAn" },
            { id: 53, name: "Корм для рептилий", description: "Сушёные насекомые", price: 6, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBdmdSqVkNyfUVIH48LMWOvljCKRaEJuzibPAn" },
            { id: 54, name: "Корм для рептилий", description: "Сушёные насекомые", price: 6, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBdmdSqVkNyfUVIH48LMWOvljCKRaEJuzibPAn" },
            { id: 55, name: "Корм для рептилий", description: "Сушёные насекомые", price: 6, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBdmdSqVkNyfUVIH48LMWOvljCKRaEJuzibPAn" },
            { id: 56, name: "Корм для рептилий", description: "Сушёные насекомые", price: 6, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBdmdSqVkNyfUVIH48LMWOvljCKRaEJuzibPAn" },
            { id: 57, name: "Корм для рептилий", description: "Сушёные насекомые", price: 6, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBdmdSqVkNyfUVIH48LMWOvljCKRaEJuzibPAn" },
            { id: 58, name: "Корм для рептилий", description: "Сушёные насекомые", price: 6, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBdmdSqVkNyfUVIH48LMWOvljCKRaEJuzibPAn" },
            { id: 59, name: "Корм для рептилий", description: "Сушёные насекомые", price: 6, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBdmdSqVkNyfUVIH48LMWOvljCKRaEJuzibPAn" },
            { id: 60, name: "Корм для рептилий", description: "Сушёные насекомые", price: 6, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBdmdSqVkNyfUVIH48LMWOvljCKRaEJuzibPAn" },
        ],
    },
    {
        id: 7,
        name: "Akula",
        imageUrl: "https://example.com/shark.jpg",
        products: [
            { id: 61, name: "Корм для акул", description: "Морская рыба", price: 20, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBQiCHVFdP5U31dV2lqSnhYfpuQTBvetaEGmkZ" },
            { id: 62, name: "Корм для акул", description: "Морская рыба", price: 20, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBQiCHVFdP5U31dV2lqSnhYfpuQTBvetaEGmkZ" },
            { id: 63, name: "Корм для акул", description: "Морская рыба", price: 20, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBQiCHVFdP5U31dV2lqSnhYfpuQTBvetaEGmkZ" },
            { id: 64, name: "Корм для акул", description: "Морская рыба", price: 20, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBQiCHVFdP5U31dV2lqSnhYfpuQTBvetaEGmkZ" },
            { id: 65, name: "Корм для акул", description: "Морская рыба", price: 20, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBQiCHVFdP5U31dV2lqSnhYfpuQTBvetaEGmkZ" },
            { id: 66, name: "Корм для акул", description: "Морская рыба", price: 20, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBQiCHVFdP5U31dV2lqSnhYfpuQTBvetaEGmkZ" },
            { id: 67, name: "Корм для акул", description: "Морская рыба", price: 20, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBQiCHVFdP5U31dV2lqSnhYfpuQTBvetaEGmkZ" },
            { id: 68, name: "Корм для акул", description: "Морская рыба", price: 20, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBQiCHVFdP5U31dV2lqSnhYfpuQTBvetaEGmkZ" },
            { id: 69, name: "Корм для акул", description: "Морская рыба", price: 20, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBQiCHVFdP5U31dV2lqSnhYfpuQTBvetaEGmkZ" },
            { id: 70, name: "Корм для акул", description: "Морская рыба", price: 20, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBQiCHVFdP5U31dV2lqSnhYfpuQTBvetaEGmkZ" },
        ],
    },
];

const AllCategories: React.FC = () => {
    const [sliceProduct, setSliceProduct] = useState<{ [key: number]: number }>({})
    const [loading, setLoading] = useState<boolean>(false);

    /* const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/api/all-products");
            const data = await res.json();
            setCategories(data);
        };
        fetchData();
    }, []);
    console.log(categories); */



  


    useEffect(() => {
        const initialViseble: { [key: number]: number } = {}
        categories.forEach((cat) => {
            initialViseble[cat.id] = 8
        })
        setSliceProduct(initialViseble)
    }, [])


    console.log(sliceProduct);

    function show_more(categor: Category) {

        setSliceProduct(prev => ({
            ...prev,
            [categor.id]: (prev[categor.id] || 8) + 4
        }))



        console.log(sliceProduct[categor.id]);

        if (sliceProduct[categor.id] >= categor.products.length) {
            console.log("good");
            setSliceProduct(prev => ({
                ...prev,
                [categor.id]: 8
            }))
        }

    }



    if (loading) {
        return (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:grid-cols-5 2xl:grid-cols-6 mt-15">
                {Array.from({ length: 10 }).map((_, i) => {
                    return (
                        <div key={i} className="mb-5">
                            <Skeleton className="h-[125px] md:h-[200px]  w-full rounded-xl" />
                            <div className="space-y-2 mt-2">
                                <Skeleton className="h-4 w-full max-w-[250px]" />
                                <Skeleton className="h-4 w-full max-w-[200px]" />
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }


    return (
        <>

            <div className="space-y-12">
                {categories.map((category) => (
                    <div key={category.id} className="w-full" >
                        <h2 className="flex items-center gap-6 text-2xl font-bold mb-4 mt-15 text-[#171212] lg:text-4xl">{category.name}  <FaArrowRightLong className="text-[#ffca39] mt-1 hover:ml-4 cursor-pointer transition-all" /></h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:grid-cols-5 2xl:grid-cols-6">

                            {category.products.length > 0 ?
                                category.products.slice(0, sliceProduct[category.id] || 8).map((product) => (
                                    <motion.div key={product.id} 
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.1 }}
                                        transition={{ duration: 0.5, delay: product.id * 0.01 }}
                                        className="p-2 mb-5">
                                        <div>
                                            {product.imageUrl && (
                                                <img
                                                    draggable={false}
                                                    src={product.imageUrl}
                                                    alt={product.name}
                                                    className="w-full h-auto object-cover rounded mb-2"
                                                />
                                            )}
                                            <h3 className="font-medium text-[17px] md:text-[18px] text-[#171212] mt-4">{product.name}</h3>
                                            <div className="flex flex-col gap-1.5 md:flex-row md:justify-between md:mt-2">
                                                <p className="text-sm text-[#8A6E61] ">{product.price} сум</p>
                                                <button className="text-sm bg-[#E88C30] hover:bg-[#d37c26] hover:scale-98 transition-all duration-200 ease-in-out py-2 px-2 font-semibold text-white  md:font-semibold rounded-[8px] cursor-pointer shadow-sm hover:shadow-md">
                                                    Посмотреть товар
                                                </button>

                                            </div>
                                        </div></motion.div>
                                ))
                                :
                                <p className="text-sm text-gray-500 col-span-full">
                                    Товары пока не добавлены в эту категорию.
                                </p>
                            }

                        </div>
                        <div className="w-full flex justify-center">
                            <button
                                onClick={() => show_more(category)}
                                className="w-[70%] sm:w-[50%] p-3 mt-4 cursor-pointer font-extrabold bg-[#ffbf64] text-[#4E3620] rounded-full shadow-md transition-all duration-200 ease-in-out hover:bg-[#F5E0B9] hover:scale-105 hover:shadow-lg"
                            >
                                {sliceProduct[category.id] >= category.products.length ? "Скрыть" : " 🐾 Показать больше"}
                            </button>


                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default AllCategories;