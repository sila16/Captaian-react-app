import { MyTeamProject } from "./data/teamProject";
import { Link, useParams } from "@remix-run/react";

export default function  ProjView ()  {
    const {tpid} = useParams();

    const tp = MyTeamProject.filter((item) =>{
        return item.tpId === Number(tpid)
}).map((tp0bj,index) =>
    <>
     <p>รหัสโปรเจค : {tp0bj.tpId}</p>
     <p>รายวิชา : {tp0bj.tpSubject}</p>
     <p>รายละเอียด : {tp0bj.tpDesc}</p>
     <Link to={`/termproj/projlist`}>Back</Link>
    </>

);
if(tp.length ===0){
    return "***ไม่พบข้อมูลโปรเจคที่คุณเลือก***";
}


    return (
        <>
        คุณเลือกโปรเจคหมายเลข : {tpid}
        {tp}
        </>
    );
        

}