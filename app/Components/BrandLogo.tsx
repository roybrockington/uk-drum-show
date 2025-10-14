import Image from 'next/image'

const BrandLogo = ({brand}: {brand: string}) => {
    console.log(brand)
    return (
        <Image 
            alt={brand}
            src={`/${brand}.jpg`} 
            width={150}
            height={50}
        />
    )
}

export default BrandLogo
