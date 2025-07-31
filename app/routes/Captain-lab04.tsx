import Foots from "./components/Foots";
import Header from "./components/Header";   

export default function MyTeamject() {

const myPage = "Captain   - My Project";
const myName = "Sila Chunyong";
const myStudID = "026730491004-0";
const MyTeamProject = [ // {} - Objects
    {
     tpId: 1,
     tpSubject: " Web Technologั",
     tpDesc: "เซ็บไซต์ท่องเที่ยว",
     tpCover: "/images/Projs/ccc.png",
     tpUrl: "http://busitlab.rmutto.ac.th/~026730491009-9/project-travel/home.html",
     tpTeam:true
    },
     {
     tpId: 2,
     tpSubject: " Web Technologั",
     tpDesc: "ข้อมูลสัตว์เลี้ยง",
     tpCover: "/images/Projs/jjj.png",
     tpUrl: "http://busitlab.rmutto.ac.th/~026730491004-0/week09-ch072/",
     tpTeam:false
    },
     {
     tpId: 3,
     tpSubject: " Web Technologั",
     tpDesc: "แนะนำหนังสือ",
     tpCover: "/images/Projs/ppp.png",
     tpUrl: "http://busitlab.rmutto.ac.th/~026730491004-0/week08_ch071/",
     tpTeam:false
    },
    
];
const tpSingle = MyTeamProject.filter(tpTmp=>
    tpTmp.tpTeam==true
    )
const myTeamProject = tpSingle.map((tp0bj,index) => 
    <div className="grid grid-cols-5 mx-auto border-gray-300"key={index}>
<div className="w-32 p-1">
<img src={tp0bj.tpCover} className="w-full rounded-full" title={tp0bj.tpSubject+"(ID:"+tp0bj.tpId+")"}/>
</div>
<div className="p-4 col-span-3 mb-auto">
<h2 className="text-lg font-semibold text-gray-800">{tp0bj.tpSubject}</h2>
<p className="text-gray-600 text-sm mt-2">{tp0bj.tpDesc}</p>
<ItemTeam isTeam={tp0bj.tpTeam}/>
</div>
<div className="p-4 mb-auto">
<a href={tp0bj.tpUrl} className="bg-indigo-600 text-white rounded-sm hover:bg-indigo-700 px-10 py-2">Preview</a>
</div>
</div>
);

    return (
        <>
        <Header title={myPage} />
        <p className="text-xl m3 text-center">
          Name: {myName} Student ID: {myStudID}
        </p>
<div className="w-1/2 grid mx-auto h-100 overflow-auto rounded-2xl border border-gray-300">
{myTeamProject}
</div>
        <Foots title= "My footer | Captain"/>
        </>
    );
}
function ItemTeam ({isTeam}){
 if(isTeam)
    return(<p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
</svg>

    </p>)
    return(<p>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>


       </p>)
 }
