import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


type Deal = {
    img: string
    name: string
    link: string
    ukds: number
    ssp: number
    code: number
}

const DealGrid = ({deals}: {deals: Deal[]}) => {
  return (
  <div className='px-7 flex flex-col gap-8 mb-8'>
                {deals.map((deal) => 
                    <li key={deal.code} className="mb-2 list-none flex flex-col items-center gap-4">
                        <h3 className="text-xl font-bold">{deal.name}</h3>
                        <div className="flex">
                            <Image
                                className="dark:invert"
                                src={`https://media.sound-service.eu/Artikelbilder/Shopsystem/450x150/${deal.img}.jpg`}
                                alt="deal.name"
                                width={180}
                                height={38}
                                priority
                            />
                        </div>
                        <p className="flex gap-4 items-center">
                            <span className="line-through">£{deal.ssp}</span>
                            <span className="text-xl font-bold">£{deal.ukds.toFixed()}</span>
                        </p>
                        <Link className="py-4 px-8 uppercase bg-gradient-to-r bg-pink-800 text-white rounded drop-shadow-lg" href={deal.link}>Buy</Link>
                        <hr className='w-full h-0.5 border-0 rounded-sm bg-gray-200' />
                    </li>
                )}
            </div>
    )
}

export default DealGrid
