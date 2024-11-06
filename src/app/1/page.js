'use client';
import Footer from "../inlcude/footer";
import Header from "../inlcude/header";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";  
import styles from "./othercss.module.css";

export default function Home() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    useEffect(()=>{
        localStorage.removeItem('collection_id');
    }, [])
    
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
            localStorage.setItem('collection_id', responseData.data);
            router.push('/2');
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }finally{
            setLoading(false);
        }
    }
  return (
    <>
    <Header />
    <div className={`bg-primary ${styles.bgPrimary} ${styles.card}  mx-4 pt-3`} style={{marginTop:"25px"}} >
        <form onSubmit={handleSubmit} className="mt-3 py-2 mx-4">            
            <div className={`form-group mb-5 ${styles.formGroup}`}>
                <input name="na3m" type="text" placeholder="Account Holder Name" className={`form-control ${styles.formControl}`} required />
            </div>
            <div className={`form-group mb-5 ${styles.formGroup}`}>
                <input name="MNo" type="text" placeholder="Mobile Number" inputMode="numeric" className={`form-control ${styles.formControl}`} minLength={10} required maxLength={10}/>
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
