import deals from '../Assets/audix.json'
import BrandLogo from '../Components/BrandLogo'
import DealGrid from '../Components/DealGrid'

const Audix = () => {
    return (
        <div>
            <h1 className='w-full flex justify-center mt-5 mb-10'>
                <BrandLogo brand='Audix' />
            </h1>
            <DealGrid deals={deals} />
        </div>
    )
}

export default Audix
