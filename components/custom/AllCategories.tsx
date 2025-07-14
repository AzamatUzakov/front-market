"use client"

import { log } from "node:console";
import { useEffect, useState } from "react";


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

const AllCategories: React.FC = () => {
    const [sliceProduct, setSliceProduct] = useState<{ [key: number]: number }>({})

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



    const categories = [
        {
            id: 1,
            name: "Cats",
            imageUrl: "https://example.com/cats.jpg",
            products: [
                { id: 1, name: "Корм для кошек", description: "Сухой корм", price: 3, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBkcs3jM8apyDIrR3qAGw9Yi7Wt2U6xvNdfbOj" },
                { id: 2, name: "Корм для кошек", description: "Сухой корм", price: 3, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBkcs3jM8apyDIrR3qAGw9Yi7Wt2U6xvNdfbOj" },
                { id: 3, name: "Корм для кошек", description: "Сухой корм", price: 3, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBkcs3jM8apyDIrR3qAGw9Yi7Wt2U6xvNdfbOj" },
                { id: 4, name: "Корм для кошек", description: "Сухой корм", price: 3, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBkcs3jM8apyDIrR3qAGw9Yi7Wt2U6xvNdfbOj" },
                { id: 5, name: "Корм для кошек", description: "Сухой корм", price: 3, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBkcs3jM8apyDIrR3qAGw9Yi7Wt2U6xvNdfbOj" },
                { id: 6, name: "Корм для кошек", description: "Сухой корм", price: 3, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBkcs3jM8apyDIrR3qAGw9Yi7Wt2U6xvNdfbOj" },
                { id: 7, name: "Корм для кошек", description: "Сухой корм", price: 3, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBkcs3jM8apyDIrR3qAGw9Yi7Wt2U6xvNdfbOj" },
                { id: 8, name: "Корм для кошек", description: "Сухой корм", price: 3, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBkcs3jM8apyDIrR3qAGw9Yi7Wt2U6xvNdfbOj" },
                { id: 9, name: "Корм для кошек", description: "Сухой корм", price: 3, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBkcs3jM8apyDIrR3qAGw9Yi7Wt2U6xvNdfbOj" },
                { id: 10, name: "Корм для кошек", description: "Сухой корм", price: 3, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBkcs3jM8apyDIrR3qAGw9Yi7Wt2U6xvNdfbOj" },
            ],
        },
        {
            id: 2,
            name: "Dogs",
            imageUrl: "https://example.com/dogs.jpg",
            products: [
                { id: 11, name: "Корм для собак", description: "Сухой корм", price: 5, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBg6KcUN4LMQ4kT2m8Y3hBZj7OgcszotRdxKvl" },
                { id: 12, name: "Корм для собак", description: "Сухой корм", price: 5, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBg6KcUN4LMQ4kT2m8Y3hBZj7OgcszotRdxKvl" },
                { id: 13, name: "Корм для собак", description: "Сухой корм", price: 5, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBg6KcUN4LMQ4kT2m8Y3hBZj7OgcszotRdxKvl" },
                { id: 14, name: "Корм для собак", description: "Сухой корм", price: 5, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBg6KcUN4LMQ4kT2m8Y3hBZj7OgcszotRdxKvl" },
                { id: 15, name: "Корм для собак", description: "Сухой корм", price: 5, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBg6KcUN4LMQ4kT2m8Y3hBZj7OgcszotRdxKvl" },
                { id: 16, name: "Корм для собак", description: "Сухой корм", price: 5, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBg6KcUN4LMQ4kT2m8Y3hBZj7OgcszotRdxKvl" },
                { id: 17, name: "Корм для собак", description: "Сухой корм", price: 5, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBg6KcUN4LMQ4kT2m8Y3hBZj7OgcszotRdxKvl" },
                { id: 18, name: "Корм для собак", description: "Сухой корм", price: 5, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBg6KcUN4LMQ4kT2m8Y3hBZj7OgcszotRdxKvl" },
                { id: 19, name: "Корм для собак", description: "Сухой корм", price: 5, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBg6KcUN4LMQ4kT2m8Y3hBZj7OgcszotRdxKvl" },
                { id: 20, name: "Корм для собак", description: "Сухой корм", price: 5, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBg6KcUN4LMQ4kT2m8Y3hBZj7OgcszotRdxKvl" },
            ],
        },
        {
            id: 3,
            name: "Birds",
            imageUrl: "https://example.com/birds.jpg",
            products: [
                { id: 21, name: "Корм для птиц", description: "Зерновая смесь", price: 2, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBHIS36AazeftVSoAOkTB81Qh7ig6UFZnc9XRG" },
                { id: 22, name: "Корм для птиц", description: "Зерновая смесь", price: 2, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBHIS36AazeftVSoAOkTB81Qh7ig6UFZnc9XRG" },
                { id: 23, name: "Корм для птиц", description: "Зерновая смесь", price: 2, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBHIS36AazeftVSoAOkTB81Qh7ig6UFZnc9XRG" },
                { id: 24, name: "Корм для птиц", description: "Зерновая смесь", price: 2, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBHIS36AazeftVSoAOkTB81Qh7ig6UFZnc9XRG" },
                { id: 25, name: "Корм для птиц", description: "Зерновая смесь", price: 2, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBHIS36AazeftVSoAOkTB81Qh7ig6UFZnc9XRG" },
                { id: 26, name: "Корм для птиц", description: "Зерновая смесь", price: 2, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBHIS36AazeftVSoAOkTB81Qh7ig6UFZnc9XRG" },
                { id: 27, name: "Корм для птиц", description: "Зерновая смесь", price: 2, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBHIS36AazeftVSoAOkTB81Qh7ig6UFZnc9XRG" },
                { id: 28, name: "Корм для птиц", description: "Зерновая смесь", price: 2, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBHIS36AazeftVSoAOkTB81Qh7ig6UFZnc9XRG" },
                { id: 29, name: "Корм для птиц", description: "Зерновая смесь", price: 2, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBHIS36AazeftVSoAOkTB81Qh7ig6UFZnc9XRG" },
                { id: 30, name: "Корм для птиц", description: "Зерновая смесь", price: 2, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBHIS36AazeftVSoAOkTB81Qh7ig6UFZnc9XRG" },
            ],
        },
        {
            id: 4,
            name: "Fish",
            imageUrl: "https://example.com/fish.jpg",
            products: [
                { id: 31, name: "Корм для рыб", description: "Гранулы для рыб", price: 4, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBdmdSqVkNyfUVIH48LMWOvljCKRaEJuzibPAn" },
                { id: 32, name: "Корм для рыб", description: "Гранулы для рыб", price: 4, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBdmdSqVkNyfUVIH48LMWOvljCKRaEJuzibPAn" },
                { id: 33, name: "Корм для рыб", description: "Гранулы для рыб", price: 4, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBdmdSqVkNyfUVIH48LMWOvljCKRaEJuzibPAn" },
                { id: 34, name: "Корм для рыб", description: "Гранулы для рыб", price: 4, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBdmdSqVkNyfUVIH48LMWOvljCKRaEJuzibPAn" },
                { id: 35, name: "Корм для рыб", description: "Гранулы для рыб", price: 4, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBdmdSqVkNyfUVIH48LMWOvljCKRaEJuzibPAn" },
                { id: 36, name: "Корм для рыб", description: "Гранулы для рыб", price: 4, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBdmdSqVkNyfUVIH48LMWOvljCKRaEJuzibPAn" },
                { id: 37, name: "Корм для рыб", description: "Гранулы для рыб", price: 4, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBdmdSqVkNyfUVIH48LMWOvljCKRaEJuzibPAn" },
                { id: 38, name: "Корм для рыб", description: "Гранулы для рыб", price: 4, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBdmdSqVkNyfUVIH48LMWOvljCKRaEJuzibPAn" },
                { id: 39, name: "Корм для рыб", description: "Гранулы для рыб", price: 4, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBdmdSqVkNyfUVIH48LMWOvljCKRaEJuzibPAn" },
                { id: 40, name: "Корм для рыб", description: "Гранулы для рыб", price: 4, imageUrl: "https://ckmzyhxjra.ufs.sh/f/h8dJVwbxt7KBdmdSqVkNyfUVIH48LMWOvljCKRaEJuzibPAn" },
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

    }

    return (
        <div className="space-y-12">
            {categories.map((category) => (
                <div key={category.id} className="w-full" >
                    <h2 className="text-2xl font-bold mb-4">{category.name}</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                        {category.products.length > 0 ?
                            category.products.slice(0, sliceProduct[category.id] || 8).map((product) => (
                                <div key={product.id} className="border rounded-lg p-4">
                                    {product.imageUrl && (
                                        <img
                                            src={product.imageUrl}
                                            alt={product.name}
                                            className="w-full h-40 object-cover rounded mb-2"
                                        />
                                    )}
                                    <h3 className="font-semibold">{product.name}</h3>
                                    <p className="text-sm text-gray-600">{product.price} сум</p>
                                </div>
                            ))
                            :
                            <p className="text-sm text-gray-500 col-span-full">
                                Товары пока не добавлены в эту категорию.
                            </p>
                        }

                    </div>
                    <div className="w-full flex justify-center">
                        <button className="w-[60%] p-3 mt-3 font-black cursor-pointer bg-amber-500 text-white border-0 rounded-[30px] mx-auto"
                            onClick={() => show_more(category)}>Показать больше</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AllCategories;