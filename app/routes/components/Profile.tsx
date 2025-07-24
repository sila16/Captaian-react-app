export default function Profile() {
    return (
        <>
        <h1 className="text-2xl text-center bg-yellow-200 text-green-500">Profile</h1>
        <div className="p-10 bg-green-700 rounded">
            <img src="/images/mum.png.jpg"className="rounded-full w-32 shadow-lg border-neutral-100 mx-auto"/>
            <h2 className="text-2xl text-center text-yellow-200 font-blod m-5">About me</h2>
            <p className="text-start border-2 rounded w-1/2 mx-auto p-5">
            ศิลา ฉุ้นย่อง<br />
            อายุ 20 ปี<br />
            นักศึกษาชั้นปีที่ 2 สาขาเทคโนโลยีสาระสนเทศ<br />
            กีฬาที่ชอบ : ฟุตบอล เบสบอล<br />
            งานอดิเรก : เล่นเกม<br /> 
            </p>
             </div>
        
            </>
    );
}