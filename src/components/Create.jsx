import { useState } from "react"

const Create = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

    console.log(name,price,image)

  return (
    <div className="flex justify-center items-center w-full">
        <div className="  mt-28 max-w-screen-lg flex justify-center items-center w-full">
                <div className="w-full flex flex-col justify-center items-center">
                    <h1 className="text-2xl font-bold">Create Product</h1>

                    <form className="mt-8 gap-6 flex flex-col">
                        <input value={name} onChange={(e) => setName(e.target.value)} required placeholder="Name of Product" className="pl-4 h-12 border-2 border-gray-400"></input>

                        <input value={price} onChange={(e) => setPrice(e.target.value)}  required type="number" placeholder="Price" className="pl-4 h-12 border-2 border-gray-400"></input>

                        <input value={image} onChange={(e) => setImage(e.target.value)} required type="text" placeholder="Image of Product" className="pl-4 h-12 border-2 border-gray-400"></input>

                        <div className="flex justify-center items-center">
                            <button className="bg-green-500 w-full py-2 rounded-xl">Create</button>
                        </div>
                    </form>
                </div>
        </div>
    </div>
  )
}

export default Create