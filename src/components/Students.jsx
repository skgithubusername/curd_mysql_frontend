// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const Students = () => {
//   const [student, setStudent] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8081/")
//       .then((res) => {
//         console.log(res.data);
//         setStudent(res.data); // Update the state with fetched data
//       })
//       .catch((err) => console.error("Error fetching students:", err));
//   }, []);

//   return (
//     <div className="mt-20 flex justify-center items-center">
//       <div className="md:w-[800px]  w-[500px] bg-white rounded ">
//         <Link
//           to="/create"
//           className="bg-slate-800 rounded p-2 m-2  md:w-40 w-20"
//         >
//           Add +
//         </Link>
//         <table className="text-black  m-4">
//           <thead>
//             <tr className="  justify-center ml-4">
//               <th className="pl-4 ">Name</th>
//               <th className="pl-4 ">Email</th>
//               <th className="pl-4 md:pl-16">Phone No.</th>
//               <th className="pl-4 md:pl-16">D.O.B</th>
//               <th className="pl-4 md:pl-16">Action</th>
//             </tr>
//           </thead>
//           <tbody className="">
//             {student.map((data, i) => (
//               <tr className="  text-black" key={i}>
//                 <td>{data.Name}</td>
//                 <td>{data.Email}</td>
//                 <td>{data.Phone}</td>
//                 <td>{data.Date}</td>
//                 <td>
//                   <button>Update</button>
//                   <button>Delete</button>
//                 </td>
//               </tr>
//             ))}

            
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Students;





























import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Students = () => {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((res) => {
        console.log(res.data);
        setStudent(res.data); // Update the state with fetched data
      })
      .catch((err) => console.error("Error fetching students:", err));
  }, []);



const handleDelete = async (id)=>{
try {
    await axios.delete("http://localhost:8081/student/" + id)
    window.location.reload()
} catch (error) {
    console.log(error)
}
}
  

  return (
    <div className="mt-20 flex justify-center items-center">
      <div className="md:w-[800px]  w-[500px] bg-white rounded ">
        <Link
          to="/create"
          className="bg-slate-800 rounded p-2 m-2  md:w-24 w-20 block"
        >
          Add +
        </Link>
        <div className="overflow-x-auto">
          <table className="text-black  m-4 w-full">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Email</th>
                <th className="py-3 px-6 text-left">Phone No.</th>
                <th className="py-3 px-6 text-left">D.O.B</th>
                <th className="py-3 px-6 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {student.map((data, i) => (
                <tr key={i} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left whitespace-nowrap">{data.Name}</td>
                  <td className="py-3 px-6 text-left">{data.Email}</td>
                  <td className="py-3 px-6 text-left">{data.Phone}</td>
                  <td className="py-3 px-6 text-left">{data.Date}</td>
                  <td className="py-3 px-6 text-left">
                    <Link to={`update/${data.ID}`} className= " bg-blue-700 mb-2 text-white font-bold py-2 px-4 rounded-full mr-2 hover:bg-blue-300">Update</Link>
                    <button onClick={e => handleDelete(data.ID)} className="bg-red-800 mt-3 text-white font-bold py-2 px-4 rounded-full hover:bg-red-500">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Students;
