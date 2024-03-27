import Image from "next/image";

const ProductImages = ({images}) => {
    return (
        <>
            <Image fill src={images?.[0]} alt="product image" />   
        </>
    );
};

export default ProductImages;