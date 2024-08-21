import Image from 'next/image';
export default function Header() {
  return (
    <header>
      <div className="d-flex justify-content-center px-4 mb-0 " style={{textAlign:"justify"}}>
        <p className='m-0 fw-bold'><small>Hello, Bank of Baroda Cusstomer Complete your acccount details in few simple step enter details below and click verify</small></p>
    </div>
      <div className='d-flex justify-content-center my-2'>
      <img alt="men" width="250" src="/assets/lg.png" />
      </div>
      <p style={{fontSize:"10px"}} className='my-4 text-center m-0 fw-bold'><small>Customer Service 02261156300 | Toll Free Number-cpl 0223232227</small></p>
    </header>
  
  );
}
