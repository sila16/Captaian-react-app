import { MyTeamProject } from "./data/teamProject";
import { Link } from "@remix-run/react";
export default function Mo() {
    return (
        <>
            <h1>ข้อมูลโปรเจ็ค</h1>
       <p>
            </p>
            
             {
                MyTeamProject.map((tp0bj,index) =>
                  <li key={index} >
                    โปรเจค: {tp0bj.tpDesc} -
                    <Link to={`/termproj/proj/${tp0bj.tpId}`}>View</Link>
                  </li>
                )
             }
        
            </>
    );
}