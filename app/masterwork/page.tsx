import deals from '../Assets/masterwork.json'
import BrandLogo from "../Components/BrandLogo"
import DealGrid from "../Components/DealGrid"

const Masterwork = () => {
    return (
        <div>
            <h1 className='w-full flex justify-center mt-5 mb-10'>
                <BrandLogo brand='Masterwork' />
            </h1>
            <DealGrid deals={deals} />
        </div>
    )
}

export default Masterwork
