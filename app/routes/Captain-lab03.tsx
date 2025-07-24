//Filename: lab03.tsx
import  Profile  from "./components/Profile";
import Contact from "./components/contact";

export default function MyProfile() {
    return (
        <>
        <Profile />
        <h2 className="text-2xl text-center text-green-700 font-blod m-5">Contact</h2>
       
          <div className="flex items-center m-5 w-1/2 mx-auto">
        <div className="grid grid-cols-3 gap-3 mx-auto">
             <Contact label="Sila Chunyong FB" link={"https://www.facebook.com/Sila.Chunyong/"} icon="/images/like.png" />
         <Contact label="captain.slc IG" link={"https://www.instagram.com/captain.slc/"} icon="/images/instagram.png" />
        </div>
    </div>
    <div className="ps-5 pe-5 pb-1 pt-1 bg-yellow-200 text-green-600 rounded w-16 flex justify-center mt-5 "><a href="/">Back</a>
            </div>
        </>
    );
}